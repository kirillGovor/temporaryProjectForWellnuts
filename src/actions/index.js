let nextTodoId = 0
export const addTask = (text,name,date,customer)=> ({
  type: 'ADD_TASK',
  id: nextTodoId++,
  text,
  name,
  date,
  customer
})

export const getTask = (text,name,date,customer)=> ({
  type: 'GET_TASK',
  id: nextTodoId++,
  text,
  name,
  date,
  customer
})

export const DeleteTask = (id)=> ({
      type: 'DELETE_TASK',
      id
  })
