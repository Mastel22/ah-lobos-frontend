import React from "react";
import PropTypes from "prop-types";
import user from "../../../assets/images/user.png";

const AuthorInfo = ({ image, readtime, name, created }) => {
  const thisDate = new Date(created);
  const day = thisDate.getDate();
  const month = thisDate.toLocaleString("default", { month: "short" });
  const year = thisDate.getFullYear();
  console.log(thisDate.getFullYear());
  const publishDate = `${month} ${day}, ${year} -`;
  return (
    <>
      <div className="author-info">
        <div className="author-avi">
          <img src={image || user} alt="sam" />
        </div>

        <div className="name-time">
          <div className="author-name">{name}</div>
          <div className="read-time">{`${publishDate} ${readtime}`} read</div>
        </div>
      </div>
    </>
  );
};

AuthorInfo.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  readtime: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired
};

export default AuthorInfo;
