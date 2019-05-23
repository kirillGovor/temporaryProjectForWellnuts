// TODO: Add Tasks related reducers here:
// We should be able to CRUD Task entities
// Every Task should include:
// 'task_id', 'task_title', 'task_description', 'deadline' and 'assignee' (some percon's name)

const initialState = {

};

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          name: action.name,
          date: action.date,
          customer: action.customer,
          completed: false
        }
      ]

    case 'GET_TASK':
      return state

    case 'DELETE_TASK':
      return state.filter(task => task.id !== parseInt(action.id));


    default:
      return state;

  }
};

export default tasks;
