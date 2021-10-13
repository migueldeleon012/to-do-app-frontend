import { v4 as uuidv4 } from 'uuid';

const inititalState = {
  tasks:
    localStorage.getItem('tasks') === null ||
    localStorage.getItem('tasks') === undefined
      ? []
      : JSON.parse(localStorage.getItem('tasks')),
};

const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case 'GET_TASKS':
      return { tasks: action.payload };
    case 'ADD_TASK':
      let newTask = {
        _id: uuidv4(),
        name: action.payload,
        status: 'Pending',
      };
      let getTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      getTasks.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(getTasks));
      return { tasks: [...state.tasks, newTask] };
    case 'REMOVE_TASK':
      let removedTaskList = state.tasks.filter(
        (task) => task._id !== action.payload
      );
      localStorage.setItem('tasks', JSON.stringify(removedTaskList));
      return { tasks: removedTaskList };
    case 'PENDING_TO_DONE':
      let updatedTaskList = state.tasks.filter((task) => {
        if (task._id === action.payload) {
          task.status = 'Done';
        }
        return task;
      });
      localStorage.setItem('tasks', JSON.stringify(updatedTaskList));
      return { tasks: updatedTaskList };
    default:
      return state;
  }
};

export default reducer;
