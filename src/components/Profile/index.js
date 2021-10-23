import React from "react";
import { FiCopy, FiPlus, FiPlusCircle } from "react-icons/fi";
import { Button } from "react-bootstrap";
import "./style.scss";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile--img-container">
        <div className="zoom--container">
          <img src={"./banner.jpeg"} className="banner" />
        </div>

        <div className="avatar--container">
          <img src={"./avatar.png"} className="avatar" />
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center profile--info">
        <h4 className="profile--name">Hellen Jummy</h4>
        <div className="profile--id d-flex ">
          <p>0x3b38a52998a4b7...</p>
          <FiCopy className="ml-4" />
        </div>
        <div className="hstack justify-content-center gap-3">
          <Button>Edit profile</Button>
          <Button variant="rounded">
            <FiPlusCircle />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
