import styles from '../scss/Header.module.scss';

function Header() {
    const handleGithubRedirect = () => {
        open("https://github.com/pawelkgith/reactportfolio", "_blank");
    }

    return (
        <div className={styles.header}>
            <h1>Email Builder</h1>
            <button className={styles.projectsBtn} onClick={handleGithubRedirect}>Projects</button>
        </div>
    )
}

export default Header;