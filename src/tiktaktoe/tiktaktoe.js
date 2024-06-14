import { useState, useEffect } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function TikTakToe() {
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const [flag, setflag] = useState(false);
  const [dataForX, setDataForX] = useState([]);
  const [dataForO, setDataForO] = useState([]);
  const [winner, setWinner] = useState("");

  const handleClick = (ind) => {
    const newData = [...data];
    if (flag) {
      newData[ind] = "O";
      const newDataO = [...dataForO];
      newDataO.push(ind);
      newDataO.sort();
      setDataForO(newDataO);
      setData(newData);
    } else {
      newData[ind] = "X";
      const newDataX = [...dataForX];
      newDataX.push(ind);
      newDataX.sort();
      setDataForX(newDataX);
      setData(newData);
    }
    setflag(!flag);
  };
  console.log(dataForX, "data for X");
  console.log(dataForO, "data for O");

  // [0,1,4]

  //  [0,1,2,4,8].includes([0,1,4])

  //   [0, 2, 4, 7, 5, 6].includes([0, 4, 8]),

  //   "02479".includes("049");

  const winningComb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function winnerDetector(dataForXOrO, winComb) {
    let counter = 0;
    for (let i of winComb) {
      //"012"
      if (dataForXOrO.includes(i)) {
        counter++;
      }
    }
    return counter === 3 ? true : false;
  }

  useEffect(() => {
    for (let i of winningComb) {
      const comb = i.join("");
      const dataX = dataForX.join("");

      const dataO = dataForO.join("");
      if (winnerDetector(dataX, comb)) {
        setWinner("X");
      }
      if (winnerDetector(dataO, comb)) {
        setWinner("O");
      }
    }
  }, [dataForX, dataForO]);

  const handleRestart = () => {
    setData(["", "", "", "", "", "", "", "", ""]);
    setWinner("");
    setDataForX([]);
    setDataForO([]);
    setflag(false);
  };
  return (
    <div className="container p-5">
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          style={{ width: "60%" }}
        >
          {data.map((item, index) => (
            //[0,1,2,3,4,5,6,7,8]
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item
                style={{
                  border: "2px solid black",
                  height: "140px",
                  fontSize: "3rem",
                  pointerEvents: item && "none",
                  //   pointerEvents: item ? "none" : "",
                }}
                onClick={() => handleClick(index)}
                disabled={true}
              >
                {item}
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
      <h3>Winner is: {winner}</h3>
      <button onClick={handleRestart}>Restart game</button>
    </div>
  );
}

export default TikTakToe;

// make sure game is not clickable after winner is declared : reset everything

// make sure same cell is not clickable

// make sure longer combinations from x or O should still define winner

// [10, 20, 30, 40, 50, 60][(40, 60)];
