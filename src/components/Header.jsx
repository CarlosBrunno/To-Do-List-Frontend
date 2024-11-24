import styles from '../styles/Header.module.css'


function Header(){
    return (
    <>
    <img className={styles.headerLogo} id="logo" alt="to-do-list" src="logo.png"></img>
    <h2 className={styles.h2}>Tarefas</h2>
    </>
    )
}

export default Header