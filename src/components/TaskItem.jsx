import styles from '../styles/TaskItem.module.css'
import trashIcon from '../assets/trash.png'
import editIcon from '../assets/edit.png'

function TaskItem({item, onEditTaskClick, deleteTask, checkTask}){
    
    return(
        <div className={styles.taskItem}> 
        <input type="checkbox" id={item.id} className={styles.taskItemCheckBox} checked={item.isChecked} onChange={(e) => checkTask(item.id, e.target.checked)}></input>
        <div className={styles.taskText}>
            <label form="task" className={styles.taskTitle}>{item.title}</label>
            <p className={styles.taskDesc}>{item.description}</p>
        </div>
        <button className={styles.editTask} aria-label="Editar tarefa" task-id={item.id} ><img src={editIcon} alt="Editar tarefa" onClick={() => onEditTaskClick(item.id)} ></img></button> 
        <button className={styles.deleteTask} aria-label="Deletar tarefa" task-id={item.id} ><img src={trashIcon} alt="Deletar tarefa" onClick={() => deleteTask(item.id)} ></img></button> 
        </div>
    )
}

export default TaskItem 