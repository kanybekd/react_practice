import { useState } from "react";
import { data } from "./data";

function App() {
  const [page, setPage] = useState(0);
  const handlePrev = () => {
    setPage(page - 1);
  };
  const handleNext = () => {
    setPage(page + 1);
  };
  const styles = {
    border: "1px solid red",
    width: "280px",
    display: "flex",
    margin: "auto",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: " 5px 10px 8px #888888",
    padding: "20px",
  };

  return (
    <div style={styles}>
      {data.slice(page, page + 1).map((page) => {
        return (
          <>
            {page.Name}
            {page.Sections.map((section) => {
              return (
                <div>
                  {section.Label}
                  {section.Questions.map((question) => {
                    return (
                      <ComponentType
                        type={question.UI}
                        text={question.Label}
                        options={question.Options}
                      />
                    );
                  })}
                </div>
              );
            })}
          </>
        );
      })}
      <div>
        <button onClick={handlePrev} disabled={!page}>
          prev
        </button>
        <button onClick={handleNext} disabled={page >= data.length - 1}>
          next
        </button>
      </div>
    </div>
  );
}

const ComponentType = ({ type, text, options }) => {
  if (type === "lb") {
    return <p>{text}</p>;
  }
  if (type === "cb") {
    return (
      <div style={{ display: "flex" }}>
        <p>{text}</p>
        <input type="checkbox" value={text} />
      </div>
    );
  }
  if (type === "tb") {
    return <input type="email" placeholder={text} value={text} />;
  }
  if (type === "rbil") {
    return (
      <>
        <p>{text}</p>
        {options.map((option) => {
          return (
            <div style={{ display: "flex" }}>
              <p>{option.Description}</p>
              <input
                type="radio"
                value={option.Value}
                name={option.QuestionID}
              />
            </div>
          );
        })}
      </>
    );
  }
};

export default App;
