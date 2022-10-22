import "./lastpost.scss";

const Post = () => {
  return (
    <div className="lastpost-container">
      <div className="lastpost-content">
        <section className="lastpost-infos">
          <h4>Sept 25, 2022</h4>
          <a href="/">
            <h2>
              <span> Lorem ipsum dolor sit amet.</span>
            </h2>
          </a>
          <img src="https://picsum.photos/300/200" alt="random" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
            repudiandae deleniti harum non blanditiis quod tempore quasi iste ut
            velit.
          </p>
        </section>
      </div>
      <div className="lastpost-divider"></div>
    </div>
  );
};

export default Post;
