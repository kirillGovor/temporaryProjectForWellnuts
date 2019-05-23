import React from 'react'
import { connect } from 'react-redux'
import { addTask } from '../actions/index'

const addTasks = ({ dispatch, tasks, ListTask }) => {
  let inputText;
  let inputName;
  let data;
  let customer;
  console.log(ListTask)
  return (
    <div style={{ marginLeft: "25px" }} >
      <form onSubmit={e => {
        e.preventDefault()
        if (!inputText.value.trim()) {
          return
        }
        dispatch(addTask(inputText.value, inputName.value, data.value, customer.value))
        inputText.value = '';
        inputName.value = '';
        data.value = '';
        customer.value = '';

      }}>
        <p>Введите название</p>
        <input ref={node => inputName = node} />

        <p>Введите описание</p>
        <textarea ref={node => inputText = node} />

        <p>Введите дату</p>
        <input type="date" ref={node => data = node} />

        <p>ответственный за выполнение</p>
        <input ref={node => customer = node} />
        <br></br>
        <br></br>
        <button type="submit">
          Добавить задачу
        </button>

        <ul>{this.props}</ul>
      </form>
      {this.state}

    </div>
  )
}

function mapStateToProps(state) {
  return {
    ListTask: state

  };
}

export default connect(mapStateToProps)(addTasks)
