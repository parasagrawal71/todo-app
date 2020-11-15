import React from "react";
import "./Header.scss";
import ProfilePic from "../../assets/img/profile.jpg";

const Header = ({ allTasks }) => {
  const calcActiveTaskLength = () => {
    const activeTasks = allTasks.filter((item) => {
      if (!item.isCompleted && new Date(item.dueDate) > new Date()) {
        return item;
      }
    });
    return activeTasks.length;
  };

  return (
    <section className="header">
      <div className="header--left">
        <div className="header-greeting">Hello Floyd Mullins</div>
        <div className="header-task">
          You have {calcActiveTaskLength()} tasks
        </div>
      </div>
      <div className="header--right">
        <img src={ProfilePic} alt="profile-pic" />
      </div>
    </section>
  );
};

export default Header;
