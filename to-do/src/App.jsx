// Bismillah
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo, deleteTodo } from "./redux/todoSlice";
function App() {
  const [value, setValue] = React.useState("");
  const data = useSelector((state) => state.data);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const [toId, setToId] = useState(0);
  const addIng = (e) => {
    e.preventDefault();
    dispatch(addTodo(value));
  };

  const todoEditQilish = (e) => {
    e.preventDefault();
    setIsEdit(false);
    dispatch(editTodo({ title: value, id: toId }));
    setValue("");

    console.log(value, toId);
  };

  const editTing = ({ id, title }) => {
    setValue(title);
    setIsEdit(true);
    setToId(id);
  };

  return (
    <div className="container">
      <form>
        <input
          onChange={(e) => setValue(e.target.value)}
          className="form-control mt-3"
          type="text"
          placeholder="title"
        />
        {isEdit === true ? (
          <button
            type="submit"
            onClick={todoEditQilish}
            className="btn btn-primary mt-3"
            style={{ width: "150px" }}
          >
            Save{" "}
          </button>
        ) : (
          <button
            type="submit"
            onClick={addIng}
            className="btn btn-primary mt-3"
            style={{ width: "150px" }}
          >
            Add todo
          </button>
        )}
      </form>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => {
            return (
              <tr key={value.id} scope="row">
                <td>{index + 1}</td>
                <td>{value.title}</td>
                <td>
                  {" "}
                  <button
                    className="btn btn-warning"
                    onClick={() => editTing(value)}
                  >
                    edit
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={() => dispatch(deleteTodo(value.id))}
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
