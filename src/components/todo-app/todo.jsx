import { useState } from "react";

function Todo() {
  let [tasks, settasks] = useState("");
  const [newtasks, setnewtasks] = useState([]);
  const [edit, setedit] = useState("");
  const [togglebutton, settogglebutton] = useState(false);

  const addtasks = () => {
    if (tasks === "") {
      alert("please add task to add");
    } else if (togglebutton) {
      setnewtasks([{ ...newtasks, name: tasks }]);
      settogglebutton(false);
      settasks("");
    } else {
      const tasksinfo = {
        id: new Date().getTime().toString(),
        name: tasks,
      };
      setnewtasks([...newtasks, tasksinfo]);
      settasks("");
    }
  };
  const deletetask = (delid) => {
    const updatedtasks = newtasks.filter((taskid) => {
      return taskid.id !== delid;
    });
    setnewtasks(updatedtasks);
    settasks("");
  };

  const edittask = (id) => {
    const editid = newtasks.find((currentvalue) => {
      return currentvalue.id === id;
    });
    setedit(editid.id);
    settasks(editid.name);
    settogglebutton(true);
  };

  return (
    <>
      <div>
        <h1>Daily Tasks</h1>
        <input
          type="text"
          placeholder="Add Tasks"
          value={tasks}
          onChange={(e) => settasks(e.target.value)}
        />
        {togglebutton ? (
          <button onClick={addtasks}>update</button>
        ) : (
          <button onClick={addtasks}>ADD</button>
        )}
      </div>

      <ul>
        {newtasks.map((value) => {
          return (
            <>
              <div key={value.id}>
                <p>{value.name}</p>
                <div>
                  <button
                    onClick={() => {
                      edittask(value.id);
                    }}
                  >
                    Update
                  </button>
                </div>
                <div>
                  <button onClick={() => deletetask(value.id)}>Delete</button>
                </div>
              </div>
            </>
          );
        })}
      </ul>
    </>
  );
}

export default Todo;

//   const deleteitem = (index) => {
//     const copy = [...enteredTexts];
//     copy.splice(index, 1);
//     setEnteredTexts(copy);
//   };
