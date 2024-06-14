import React from "react";
import { articleData } from "./articleData";
import { Link, useNavigate } from "react-router-dom";

function ArticleList() {
  // const navigate = useNavigate();
  // const handlePageChange = () => {
  //   navigate("/aboutUs");
  // };
  // const handleDelete = () => {
  //   // api post operation to delete items,
  //   navigate("/homepage");
  // };
  return (
    <div>
      {articleData.map((article) => {
        return (
          <div>
            <Link to={`/articles/${article.title}`}>
              <h4>{article.headLine}</h4>
            </Link>
            <p>{article.description.slice(0, 100)}...</p>
            {/* <button onClick={handleDelete}>delete</button> */}
          </div>
        );
      })}
    </div>
  );
}

export default ArticleList;
