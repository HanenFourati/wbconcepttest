const TasksReducer = (state = [], action) => {
    switch (action.type) {
      case "UPDATE_TASKS_LIST":
        return (state = action.tasks);
      default:
        return state;
    }
  };
  
  export default TasksReducer;
  