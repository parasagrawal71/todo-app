import React, { useState } from "react";
import "./App.scss";

import Header from "./components/header/Header";
import Task from "./components/task/Task";
import AddModal from "./components/addModal/AddModal";

const initialState = [
  {
    title: "Complete ten push-ups",
    dueDate: "11-16-2020",
    isCompleted: false,
  },
  {
    title: "Interview scheduled for Mike",
    dueDate: "11-17-2020",
    isCompleted: false,
  },
  {
    title: "Meeting",
    dueDate: "11-18-2020",
    isCompleted: false,
  },
  {
    title: "Party",
    dueDate: "11-19-2020",
    isCompleted: true,
  },
  {
    title: "Complete ten push-ups",
    dueDate: "11-11-2020",
    isCompleted: false,
  },
];

const App = () => {
  const [allTasks, setAllTasks] = useState(initialState);
  const [selectItem, setSelectItem] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const deleteItem = () => {
    setAllTasks([...allTasks.filter((item, ind) => ind !== selectItem)]);
    setSelectItem(null);
  };

  return (
    <div className="app">
      {isVisible ? (
        <AddModal
          setIsVisible={setIsVisible}
          allTasks={allTasks}
          setAllTasks={setAllTasks}
        />
      ) : (
        <>
          <Header allTasks={allTasks} />
          {allTasks.map((task, index) => {
            return (
              <Task
                task={task}
                key={task?.title + " " + index}
                onClick={() => {
                  setSelectItem(index);
                }}
                index={index}
                selectItem={selectItem}
              />
            );
          })}
          <div className="add-container">
            {selectItem === null ? (
              <div className="add" onClick={() => setIsVisible(true)}>
                <div>+</div>
              </div>
            ) : (
              <div className="remove" onClick={deleteItem}>
                <div>X</div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
