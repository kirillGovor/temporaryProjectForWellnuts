import React from 'react'
import { connect } from 'react-redux'
import { DeleteTask } from '../actions/index'
import { Table } from 'semantic-ui-react'
import ReactSpoiler from "react-spoiler";

const addTasks = ({ dispatch, ListTask }) => {

  if (ListTask.tasks.length > 0) {
    return (
      <div>
          <Table celled padded >
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>id</Table.HeaderCell>
              <Table.HeaderCell>Название</Table.HeaderCell>
              <Table.HeaderCell>ответственный</Table.HeaderCell>
              <Table.HeaderCell>дэдлайн</Table.HeaderCell>
              <Table.HeaderCell> Описание</Table.HeaderCell>
              <Table.HeaderCell>Удалить</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
        
        {
          ListTask.tasks.map(function (item, i) {
            return (
           
                <Table.Row key={i}>

                  <Table.HeaderCell textAlign='center' >
                    {item.id}
                  </Table.HeaderCell >

                  <Table.HeaderCell textAlign='center' >
                    {item.name}
                  </Table.HeaderCell >

                  <Table.HeaderCell textAlign='center'
                    singleLine>{item.customer}
                  </Table.HeaderCell >

                  <Table.HeaderCell textAlign='center'>
                    {item.date}
                  </Table.HeaderCell >


                  <Table.Cell>
                  <ReactSpoiler>
                    <span id="description" style={{ cursor: "pointer  " }} >{item.text}</span>
                  </ReactSpoiler>
                  </Table.Cell>


                  <Table.Cell  >
                    <form onSubmit={e => {
                      e.preventDefault()
                      dispatch(DeleteTask(item.id))

                    }}>
                      <button type="submit" >Delete</button>
                    </form>
                  </Table.Cell>

                </Table.Row>
            )
          })
        }
         </Table>
      </div>
    )
  }
  else {
    return (
      <div></div>
    )
  }
}


function mapStateToProps(state) {
  return {
    ListTask: state

  };
}

export default connect(mapStateToProps)(addTasks)
