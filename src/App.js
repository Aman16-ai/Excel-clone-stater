import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [rows, setRows] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [cols, setCols] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const [cellProps, setCellProps] = useState({});

  const [selectedCell, setSelectedCell] = useState(null);

  const getText = () => {
    // let selections = window.getSelection();
    // console.log("highlighted text", selections.toString());
    if (selectedCell !== null && selectedCell in cellProps) {
      let temp = {};
      console.log("has ----> ", selectedCell);
      const obj = cellProps[selectedCell];
      temp = { ...cellProps };
      temp[selectedCell] = { ...obj, fontWeight: "bold" };
      setCellProps(temp);
    }
  };

  const applyCellProps = () => {
    const temp = {};
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const key = i + "," + j;
        const style = {
          fontWeight: "regular",
          color: "black"
        };
        temp[key] = style;
      }
    }
    setCellProps(temp);
  };
  useEffect(() => {
    applyCellProps();
  }, []);

  useEffect(() => {
    console.log(cellProps);
  }, [cellProps]);

  return (
    <>
      <div style={{ width: "auto", height: "auto", border: "2px solid black" }}>
        {rows.map((r) => {
          return (
            <div
              style={{ width: "100%", height: "auto", display: "flex" }}
              className="row"
            >
              {cols.map((c) => {
                return (
                  <Cell
                    i={r}
                    j={c}
                    selectedCell={selectedCell}
                    setSelectedCell={setSelectedCell}
                    cellProps={cellProps}
                  />
                );
              })}
            </div>
          );
        })}
      </div>

      <button onClick={getText}>bold</button>

      <div style={{ width: "40px", height: "20px", border: "2px solid red" }}>
        {selectedCell}
      </div>
    </>
  );
}

function Cell(props) {
  const { i, j, setSelectedCell, selectedCell, cellProps } = props;
  const styleObj = { width: "100%", height: "100%" };
  const key = i + "," + j;
  return (
    <>
      <div
        onClick={(e) => setSelectedCell(key)}
        style={{ width: "100px", height: "40px", border: "2px solid black" }}
      >
        <input style={{ ...styleObj, ...cellProps[key] }} />
      </div>
    </>
  );
}
