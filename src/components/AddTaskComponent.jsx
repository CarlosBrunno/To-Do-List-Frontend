import styles from '../styles/AddTaskComponent.module.css'

function AddTaskComponent({onAddTaskClick}) {
    return (
        <div className={styles.addTaskDiv}>
            <button className={styles.addTaskButton} onClick={onAddTaskClick}>+ Adicionar tarefa</button>
        </div>
    )
}

export default AddTaskComponent