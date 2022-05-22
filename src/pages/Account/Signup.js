import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import auth from "./../../Firebase/firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading";

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [updateProfile, updating, uError] = useUpdateProfile(auth);
// --------------------------------------------------------------------------
  // const [token] = useToken(user || gUser);

  if (user || gUser) {
    navigate(from, { replace: true });
  }
// --------------------------------------------------------------------------
    
    
  if (loading || gLoading || updating) {
    return <Loading />;
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };

  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
  };
  return (
    <div className="w-2/5 mx-auto p-10 my-10 rounded-xl bg-gray-300">
      <div>
        <h1 className="text-center text-4xl font-bold font-serif text-blue-600 pb-10">
          Please Register
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control ">
            <label className="label">
              <span className="label-text font-serif font-semibold">
                Nick Name
              </span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full "
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is requires",
                },
              })}
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text font-serif font-semibold">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full "
              {...register("email", {
                required: {
                  value: true,
                  message: "email is requires",
                },
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Provide a valid email",
                },
              })}
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-serif font-semibold">
                Password
              </span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full"
              {...register("password", {
                required: {
                  value: true,
                  message: "password is requires",
                },
                minLength: {
                  value: 6,
                  message: "Must be 6 characters or longer",
                },
              })}
            />
            <label className="label">
              {errors.password?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
            </label>
          </div>

          <input
            className="btn w-2/6 mx-auto font-bold bg-gray-900 hover:bg-gray-700 text-white border-0 block mt-4"
            type="submit"
            value="Register"
          />
        </form>
      </div>
      {(error || gError || uError) && (
        <p className="text-center text-red-600">
          {error?.message} {gError?.message} {uError?.message}
        </p>
      )}

      <p className="text-center text-lg font-semibold mt-4">
        Have an account ?{" "}
        <Link to="/login" className="text-blue-600 border-b-2 border-blue-600">
          Please Login
        </Link>
      </p>
      <div className="divider">OR</div>
      <div className="flex justify-center">
        <button onClick={handleGoogleSignIn} className="btn btn-outline">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Signup;
