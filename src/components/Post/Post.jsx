import { Link } from "react-router-dom";

// Imports services
import dateFormat from "../../services/dateFormat";

// Imports SCSS files
import "./post.scss";

import defaultImage from "../../assets/images/1009_536x354_70107d976e.jpg";

const Post = ({ id, date, title, description, image }) => {
  return (
    <div className="post-container">
      <div className="post-content">
        <img
          src={defaultImage}
          alt={image.label ? image.label : "alternative"}
        />
        <section className="post-infos">
          <h4>{dateFormat(date)}</h4>
          <Link to={`posts/${id}`}>
            <h2>
              <span>{title}</span>
            </h2>
          </Link>
          <p>{description}</p>
        </section>
      </div>
      <div className="post-divider"></div>
    </div>
  );
};

export default Post;
