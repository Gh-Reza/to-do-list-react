import Item from './task-item';
import TasksList from './tasks-data';

function Tasks() {
  return (
    <ul className="list-unstyled container p-0 mt-4">
      {TasksList.map((task) => (
        <Item key={task.id} task={task.title} />
      ))}
    </ul>
  );
}

export default Tasks;
