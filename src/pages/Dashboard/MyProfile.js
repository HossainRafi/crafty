import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../Firebase/firebase.init";
import { Swal } from "sweetalert2";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [myUser, setMyUser] = useState({});
  // useEffect(() => {
  //   fetch(`http://localhost:5000/user/${user.email}`)
  //     .then((res) => res.json())
  //     .then((data) => setMyUser(data));
  // }, [myUser, user.email]);
  const handleForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const address = e.target.address.value;
    const mobile = e.target.mobile.value;
    const education = e.target.education.value;
    const linkdin = e.target.linkdin.value;
    const profile = {
      name,
      email,
      address,
      education,
      mobile,
      linkdin,
    };

    fetch(`http://localhost:5000/user/${email}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(profile),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // if (data.result.modifiedCount) {
        //   Swal.fire({
        //     position: "top-center",
        //     icon: "success",
        //     title: "Update profile successfully",
        //     showConfirmButton: false,
        //     timer: 1500,
        //   });
        //   e.target.reset();
        // }
      });
  };
  const { name, address, mobile, education, linkdin } = myUser;
  return (
    <div className="hero min-h-screen py-10 px-10">
      <div className="hero-content flex-col gap-20 lg:flex-row-reverse">
        <div className="card-body">
          <h2 className="card-title text-2xl mx-auto font-bold">MY Profile</h2>
          <p className="text-justify">Name: {name}</p>
          <p className="text-justify">Email: {email}</p>
          <p className="font-bold">Address: {address}</p>
          <p className="font-bold">Mobile Number: {mobile}</p>
          <p className="font-bold">Education: {education}</p>
          <p className="font-bold">LinkdIn ID: {linkdin}</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
          <h1 className="text-center font-serif font-bold text-4xl pt-5 px-5">
            Fill This Form
          </h1>

          <div className="card-body">
            <form onSubmit={handleForm}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-serif font-bold">
                    Your Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered"
                  value={user?.displayName}
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-serif font-bold">
                    Your Email
                  </span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  value={user?.email}
                  name="email"
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-serif font-bold">
                    Your Address
                  </span>
                </label>
                <input
                  type="text"
                  name="address"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-serif font-bold">
                    LinkdIn ID
                  </span>
                </label>
                <input
                  type="text"
                  name="linkdin"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-serif font-bold">
                    Phone Number
                  </span>
                </label>
                <input
                  type="number"
                  name="mobile"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-serif font-bold">
                    Education
                  </span>
                </label>
                <textarea name="education" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Confirm Order</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
