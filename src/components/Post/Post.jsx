import { Link } from "react-router-dom";

import "./post.scss";

import defaultImage from "../../assets/images/1009_536x354_70107d976e.jpg";

const Post = ({ id, date, title, description, image }) => {
  console.log(image.media);

  return (
    <div className="post-container">
      <div className="post-content">
        <img
          src={defaultImage}
          alt={image.label ? image.label : "alternative"}
        />
        <section className="post-infos">
          <h4>{date}</h4>
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
