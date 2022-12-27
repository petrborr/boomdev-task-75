import { useState } from "react";
import "./App.css";

function App() {
  const [note, setNote] = useState("")

  return (
    <div className="App">
      <div className="box">
        <div className="field">
          <div className="control">
            <textarea className="textarea is-large"
             onChange={(e)=>setNote(e.target.value)} placeholder="Notes..." 
             defaultValue={localStorage.getItem("note")} />
          </div>
        </div>
        <button className="button is-large is-primary is-active"
        onClick={() => localStorage.setItem("note", note)}>Save</button>
        <button className="button is-large"
        onClick={()=> {
          localStorage.removeItem("note")
          document.querySelector(".textarea").value = ""
        }}>Clear</button>
      </div>
    </div>
  );
}

export default App;
