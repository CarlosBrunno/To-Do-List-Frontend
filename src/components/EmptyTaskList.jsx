import styles from '../styles/EmptyTask.module.css'


function EmptyTaskList(){
    return(
        <>
        <div className={styles.taskEmptyDiv}>
            <p className={styles.p1}>Você ainda não criou nenhuma tarefa</p>
            <p className={styles.p2}>Não se preocupe, suas novas tarefas irão aparecer aqui.</p>
        </div>
        </>
    )
}

export default EmptyTaskList