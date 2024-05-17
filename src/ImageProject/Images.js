const { useEffect, useState } = require("react");

function MyApp() {
  const [data, setData] = useState([]);
  const [userStatus, setUserStatus] = useState(false);
  const [counter, setCounter] = useState(0);
  const [page, setPage] = useState(2);

  useEffect(() => {
    console.log("inside useEffect ");
    setUserStatus(!userStatus);
  }, [counter]);

  useEffect(() => {
    fetch(`https://www.netflix/movies/page=${2}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [page]);

  console.log("outisde useEffect");
  return (
    <div>
      <button> click</button>
      <div>{userStatus ? "true" : "false"}</div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>Counter</button>
      <button onClick={() => setPage(page + 1)}>next</button>
      {data.slice(20, 40).map()}
    </div>
  );
}

export default MyApp;
