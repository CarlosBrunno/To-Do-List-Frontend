import styles from '../styles/TaskList.module.css'
import TaskItem from "./TaskItem"

function TaskList({items, onEditTaskClick, deleteTask, checkTask}){

    return(
        items.map((item) => 
        <div className={styles.taskList}>
            <TaskItem item={item} onEditTaskClick={onEditTaskClick} deleteTask={deleteTask} checkTask={checkTask}></TaskItem>
        </div>
        )
    )
}

export default TaskList