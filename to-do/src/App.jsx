import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo, deleteTodo } from "./redux/todoSlice";

function App() {
  const [value, setValue] = React.useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [isEdit, setIsEdit] = useState(false);
  const [toId, setToId] = useState(0);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  const addIng = (e) => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue("");
  };

  const todoEditQilish = (e) => {
    e.preventDefault();
    setIsEdit(false);
    dispatch(editTodo({ title: value, id: toId }));
    setValue("");
  };

  const editTing = ({ id, title }) => {
    setValue(title);
    setIsEdit(true);
    setToId(id);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSortOrderChange = (order) => {
    setSortOrder(order);
  };

  const filteredAndSortedData = data
    .filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });

  return (
    <div className="container">
      {/* Search and Sort UI */}
      <div className="d-flex justify-content-between mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search todos"
          onChange={handleSearch}
          value={searchQuery}
          style={{ width: "200px", fontSize: "14px" }}
        />
        <div>
          <button
            className={`btn btn-outline-secondary ${
              sortOrder === "asc" ? "active" : ""
            }`}
            onClick={() => handleSortOrderChange("asc")}
          >
            Sort A-Z
          </button>
          <button
            className={`btn btn-outline-secondary ${
              sortOrder === "desc" ? "active" : ""
            }`}
            onClick={() => handleSortOrderChange("desc")}
          >
            Sort Z-A
          </button>
        </div>
      </div>

      <form>
        <input
          onChange={(e) => setValue(e.target.value)}
          className="form-control mt-3"
          type="text"
          placeholder="title"
          value={value}
        />
        {isEdit ? (
          <button
            type="submit"
            onClick={todoEditQilish}
            className="btn btn-primary mt-3"
            style={{ width: "150px" }}
          >
            Save
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

      <table className="table mt-3">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredAndSortedData.map((value, index) => (
            <tr key={value.id}>
              <td>{index + 1}</td>
              <td>{value.title}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => editTing(value)}
                >
                  edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(deleteTodo(value.id))}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
