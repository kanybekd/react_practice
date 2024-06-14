import { useParams, Link } from "react-router-dom";
import { articleData } from "./articleData";
function ArticleDetailsPage() {
  const linkName = useParams();
  console.log(linkName.id, "<<<<<");

  const filtered = articleData.filter((item) => item.title === linkName.id)[0];
  const restOfTheArticles = articleData.filter(
    (item) => item.title !== linkName.id
  );
  console.log(filtered);

  return (
    <>
      <h1>{filtered.title}</h1>
      <p>{filtered.description}</p>

      <div>
        <h4>People also interested in these articles</h4>
        {restOfTheArticles.map((article) => {
          return (
            <div>
              <Link to={`/articles/${article.title}`}>
                <h4>{article.headLine}</h4>
              </Link>
              <p>{article.description.slice(0, 100)}...</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ArticleDetailsPage;
