// Bismillah  
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./redux/todoSlice";
function App() {
  const [value, setValue] = React.useState("");
  const data = useSelector((state)=>state.data)
  const dispatch= useDispatch()
  const addIng = (e)=>{
     e.preventDefault();
     dispatch(addTodo(value))
  }
  return (
  <div className="container"> 
  <form>
    <input onChange={(e) => setValue(e.target.value)} className="form-control mt-3" type="text" placeholder="title" />
    <button type="submit" onClick={addIng} className="btn btn-primary mt-3" style={{ width:"150px" }} >Add todo</button>
  </form>
  </div>

)
}

export default App