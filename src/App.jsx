import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import EmptyTaskList from './components/EmptyTaskList'
import AddTaskComponent from './components/AddTaskComponent'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import AppApi from './AppApi';
import './App.css'

function App() {

  const [isTaskFormVisible, setIsTaskFormVisible] = useState(false)
  const [formName, setFormName] = useState()
  const [taskToUpdate, setTaskToUpdate] = useState()
  const [title, setTitle] = useState(null)
  const [description, setDescription] = useState(null)
  const [tasks, setTasks] = useState([])

  async function fetchTasks() {
    try {
      const apiTasks = await AppApi.getAllTasks()
      setTasks(apiTasks)
      console.log("tasks: ")
      console.log(tasks)
    } catch (error) {
      console.error("Erro ao carregar as tarefas da API:", error)
    }
  }
  
  useEffect(() => {
    fetchTasks()
  }, [])

  const toggleTaskFormEdit = (taskId) => {
    setIsTaskFormVisible(prevState => !prevState)
    setFormName("Editar")
    console.log("Editando tarefa com ID:", taskId)
    const taskToEdit = tasks.find(task => task.id === taskId)
    console.log(taskToEdit)
    setTitle(taskToEdit.title)
    setDescription(taskToEdit.description)
    setTaskToUpdate(taskToEdit)
  }

  function toggleTaskFormSave() {
    setIsTaskFormVisible(prevState => !prevState);
    setFormName("Salvar")
  }
  
  const handleTaskList = async (onAddTask) => {
      {
        if(onAddTask.id == null){
          console.log("Atualizando a task:", taskToUpdate.id);
          try {
            var response = await AppApi.updateTask(taskToUpdate.id, onAddTask)
            console.log(`${response}`)
            fetchTasks()
          } catch (error) {
            console.error("Erro ao atualizar tarefa: ", error)
          }
        }else{
          console.log("Criando a task:", onAddTask);
          try {
            await AppApi.createTask(onAddTask)
            fetchTasks()
          } catch (error) {
            console.error("Erro ao carregar as tarefas da API:", error)
          }
        }
    }
  }

  const handleDeleteTask = async (taskId) => {
    const userConfirmed = confirm("Você deseja excluir a tarefa?")
    if(userConfirmed){
      console.log("Deletando tarefa do id: "+ taskId)
      try {
        await AppApi.deleteTaskById(taskId)
        fetchTasks()
      } catch (error) {
        console.error("Erro ao deletar tarefa:", error)
      }
    }
  }

  const handleTaskStatus = async(taskId, isChecked) => {
    try {
      var response = await AppApi.updateTask(taskId, {"isChecked":isChecked})
      console.log(`${response}`)
      fetchTasks()
    } catch (error) {
      console.error("Erro ao atualizar tarefa: ", error)
    }
  }

  return (
    <>
      <Header/>
      {tasks.length > 0 ? (
        <TaskList items={tasks}
         onEditTaskClick={toggleTaskFormEdit} 
         deleteTask={handleDeleteTask} 
         checkTask={handleTaskStatus}
         />
      ) : (
        <EmptyTaskList/>
      )}
      <AddTaskComponent onAddTaskClick={(toggleTaskFormSave)} />
      {isTaskFormVisible && (<TaskForm 
        closeTaskForm={toggleTaskFormSave}
        onAddTask={handleTaskList}
        formName={formName}
        editTitle={title}
        editDesciption={description}
      />)}
    </>

  )
}

export default App
