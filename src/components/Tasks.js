import Task from "./Task";

const Tasks = ({ tasks, handleCheck }) => {
  return (
    <div>
      <h3>Incomplete</h3>
      <ul>
        {tasks
          .filter((task) => task.completed === false)
          .map((task) => (
            <Task task={task} key={task.id} handleCheck={handleCheck} />
          ))}
      </ul>
      <h3>Complete</h3>
      <ul>
        {tasks
          .filter((task) => task.completed === true)
          .map((task) => (
            <Task task={task} key={task.id} handleCheck={handleCheck} />
          ))}
      </ul>
    </div>
  );
};
export default Tasks;
