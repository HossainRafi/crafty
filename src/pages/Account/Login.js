import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading";
import auth from "./../../Firebase/firebase.init";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const email = watch("email");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [sendPasswordResetEmail, sending, pResetError] =
    useSendPasswordResetEmail(auth);

  // ----------------------------------------------------------------------
  // const [token] = useToken(user || gUser);

  useEffect(() => {
    if (user || gUser) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, user, gUser]);
  // -----------------------------------------------------------------------

  if (loading || gLoading || sending) {
    return <Loading />;
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className="md:w-2/5 mx-auto p-10 my-10 rounded-xl bg-gray-300">
      <div>
        <h1 className="text-center text-4xl font-bold font-serif text-blue-600 pb-10">
          Please Login
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
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
                  message: "Provide a valid Email",
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
              <span className="label-text  font-serif font-semibold">
                Password
              </span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
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
            value="Login"
          />
        </form>
      </div>
      {(error || gError || pResetError) && (
        <p className="text-center text-red-600">
          {error?.message} {gError?.message} {pResetError?.message}
        </p>
      )}

      <p className="text-center text-lg font-semibold mt-4">
        New Here ?{" "}
        <Link to="/signup" className="text-blue-600 border-b-2 border-blue-600">
          Create An Account
        </Link>
      </p>
      <p className="text-center text-lg font-semibold mt-3">
        Forgat Password ?{" "}
        <button
          className="text-secondary"
          onClick={async () => {
            await sendPasswordResetEmail(email);
            alert("Sent email");
          }}
        >
          <span className="text-blue-600  text-lg font-semibold border-b-2 border-blue-600">
            Reset Password
          </span>
        </button>
      </p>
      <div className="divider">OR</div>
      <div className="flex justify-center">
        <button onClick={() => signInWithGoogle()} className="btn btn-outline">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
