import axios from 'axios';
const API_URL = 'https://localhost:7240/api/TaskItem';


async function getAllTasks() {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter todas as tarefas:", error);
    throw error;
  }
}

async function getTaskById(id) {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao obter a tarefa com ID ${id}:`, error);
    throw error;
  }
}

async function createTask(task) {
  try {
    const response = await axios.post(API_URL, task);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar uma nova tarefa:", error);
    throw error;
  }
}

async function updateTask(id, updatedTask) {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedTask);
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar a tarefa com ID ${id}:`, error);
    throw error;
  }
}

async function deleteTaskById(id) {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao excluir a tarefa com ID ${id}:`, error);
    throw error;
  }
}


export default {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTaskById,
  };
