import headerStyles from './header.module.css'

export default function Header() {
    return (
        <>
            <header className={headerStyles.header}>
                <h1 className={headerStyles.tagline}>Matlock | Doors Open</h1>
            </header>
        </>
    )
}