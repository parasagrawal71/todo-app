import React, { useState } from "react";
import "./AddModal.scss";

const AddModal = ({ setIsVisible, allTasks, setAllTasks }) => {
  const [title, setTitle] = useState("");

  const addItem = () => {
    setAllTasks([
      ...allTasks,
      {
        title,
        dueDate: new Date(new Date().setDate(new Date().getDate() + 1)),
        isCompleted: false,
      },
    ]);
    setIsVisible(false);
  };

  return (
    <section className="addModal">
      <div onClick={() => setIsVisible(false)} className="cross">
        x
      </div>
      <textarea
        type="text"
        className="textBox"
        placeholder="What would you like to add?"
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="addBtn" onClick={() => addItem()}>
        <div>+</div>
      </div>
    </section>
  );
};

export default AddModal;
