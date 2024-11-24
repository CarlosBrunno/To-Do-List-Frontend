import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from '../styles/TaskForm.module.css'

function TaskForm({ closeTaskForm , onAddTask, formName, editTitle, editDesciption}) {

    const [taskTitle, setTaskTitle] = useState(formName === "Editar" ? editTitle : '')
    const [taskDescription, setTaskDescription] = useState(formName === "Editar" ? editDesciption : '')
    const handleSubmit = (event) => {
        if (formName == "Salvar"){
            console.log("Realizando criação da task!")
            event.preventDefault()
            var taskData = { 
                id: uuidv4(), 
                title: taskTitle, 
                description: taskDescription, 
                isChecked: false 
            }
            onAddTask(taskData)
            setTaskTitle('')
            setTaskDescription('')
        }else{
            console.log("Realizando update da task!")
            event.preventDefault()
            var taskData = { 
                id: null, 
                title: taskTitle, 
                description: taskDescription, 
                //isChecked: null 
            };
            onAddTask(taskData)
            setTaskTitle('')
            setTaskDescription('')
        }
        
        closeTaskForm();
    };

    return (
        
        <div className={styles.taskFormModal}>
            <div className={styles.modalContent}>
                <form className={styles.taskForm} onSubmit={handleSubmit}>
                <span className={styles.closeButton} onClick={closeTaskForm}>×</span>
                    <p className={styles.p3}>{formName}</p>
                    <p className={styles.p4}>Task</p>
                    <label className={styles.label} form="task-name">Nome</label>
                    <input type="text" id="taskTitle" className={styles.input} placeholder="Nome da tarefa" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} required></input>
                    <label className={styles.label} form="task-desc">Descrição (Opcional)</label>
                    <textarea id="taskDescription" className={styles.textArea} placeholder="Descreva a tarefa..." value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)}></textarea>
                    <div className={styles.buttonsForm}>
                        <button type="button" className={styles.closeButtonForm} onClick={closeTaskForm}>Fechar</button>
                        <button type="submit" className={styles.submitButton}>Salvar tarefa</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TaskForm