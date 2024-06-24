import React from "react";
import { useContextBox } from "../ContextProvider";

const UserView = () => {
  const { view } = useContextBox();
  const {
    name,
    username,
    avatar,
    email,
    address,
    birthday,
    age,
    phoneNumber,
    website,
    company,
  } = view;

  return (
    <div class="container">
      <div class="row align-items-center flex-row-reverse">
        <div class="col-lg-6">
          <div class="about-text go-to">
            <h3 class="dark-color">About Me</h3>
            {console.log(view)}
            {address && <p>{company.about}</p>}
            <div class="row about-list">
              <div class="col-md-6">
                <div class="media">
                  <label>Birthday</label>
                  <p>{birthday}</p>
                </div>
                {address.city && (
                  <>
                    <div class="media">
                      <label>Age</label>
                      <p>{age} Yr</p>
                    </div>
                  </>
                )}
                <div class="media">
                  <label>Address</label>
                  <p className="user-info">
                    {address.street} {address.suite} {address.city}-
                    {address.zipcode}
                  </p>
                </div>
                <div class="media">
                  <label>Company name</label>
                  <p>{company.name}</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="media">
                  <label>E-mail</label>
                  <p>{email}</p>
                </div>
                <div class="media">
                  <label>Website</label>
                  <p>{website}</p>
                </div>
                <div class="media">
                  <label>Phone</label>
                  {phoneNumber ? <p>{phoneNumber}</p> : "nill"}
                </div>
                <div class="media">
                  <label>Work Experience</label>
                  {company.experience ? <p>{company.experience} yr</p> : "0"}
                </div>
              </div>
            </div>
          </div>
        </div>
        {avatar ? (
          <div class="col-lg-4">
            <div class="about-avatar">
              <h1 className="dark-color">{username}</h1>
              <img src={avatar} width={"300px"} height={"400px"} alt="Avatar" />
            </div>
          </div>
        ) : (
          <div class="col-lg-5">
            <div class="about-avatar">
              <h1 className="dark-color">{username}</h1>
              <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                alt="Default Avatar"
                width={"350px"}
                height={"350px"}
              />
            </div>
          </div>
        )}
      </div>
     
    </div>
  );
};

export default UserView;