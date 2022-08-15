import { useSelector, useDispatch } from 'react-redux';

const DisplayTask = () => {
  const fetchedTasks = useSelector((state) => state.tasks);
  let pendingTasks = fetchedTasks.filter((task) => task.status === 'Pending');
  let doneTasks = fetchedTasks.filter((task) => task.status === 'Done');

  const renderPendingTasks = (task) => (
    <li key={task._id}>
      <p> {task.name} </p>
      <button onClick={(e) => pendingToDoneButton(e)} data-id={task._id}>
        Done
      </button>
      <button onClick={(e) => deleteButton(e)} data-id={task._id}>
        Delete
      </button>
    </li>
  );

  const renderDoneTasks = (task) => (
    <li key={task.id}>
      <p> {task.name} </p>
      <button onClick={(e) => deleteButton(e)} data-id={task._id}>
        Delete
      </button>
    </li>
  );

  const dispatch = useDispatch();

  const deleteButton = (e) => {
    dispatch({ type: 'REMOVE_TASK', payload: e.currentTarget.dataset.id });
  };

  const pendingToDoneButton = (e) => {
    dispatch({ type: 'PENDING_TO_DONE', payload: e.currentTarget.dataset.id });
  };

  return (
    <>
      <div className="container">
        {pendingTasks.length === 0 ? (
          <h3 className="full"> No Pending tasks </h3>
        ) : (
          <h3 className="gray">Pending Tasks</h3>
        )}
        <div className="container__list">
          <ul>{pendingTasks.map(renderPendingTasks)}</ul>
        </div>
      </div>
      <div className="container">
        {doneTasks.length === 0 ? (
          <h3 className="full"> No Done tasks </h3>
        ) : (
          <h3 className="gray">Done Tasks</h3>
        )}
        <div className="container__list">
          <ul>{doneTasks.map(renderDoneTasks)}</ul>
        </div>
      </div>
    </>
  );
};

export default DisplayTask;
