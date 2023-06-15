import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [rows,setRows] = useState([0,1,2,3,4,5,6,7,8,9])
  const [cols,setCols] = useState([0,1,2,3,4,5,6,7,8,9])
 
  const [cellProps,setCellProps] = useState({
    i:0,
    j:0,
    style:{
      weight:"regular"
    }
  })
  const getText = ()=> {
    let selections = window.getSelection()
    console.log("highlighted text",selections.toString())
  }

  return (
    <>
      <div style={{width:"auto",
                  height:"auto",
                  border:"2px solid black"
                  }}>
      
      {rows.map((r)=>{
        return (
          <div style={{width:"100%",height:"auto",display:"flex"}} className="row">
            {cols.map((c)=> {
              return <Cell i ={r} j={c}/>
            })}
          </div>
        );
      })}
      </div>

      <button onClick={getText}>bold</button>
    </>
  );
}

function Cell(props) {
  const {i,j} = props

  return (
    <>
      <div style={{width:"100px",
      height:"40px",
      border:"2px solid black"}}>
        <input style={{width:"100%",height:"100%"}} />
      </div>
    </>
  )
}
