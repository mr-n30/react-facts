import { createRoot } from "react-dom/client"
import "./index.css"

function Header() {
    return (
        <header className="header">
            <img src="src/assets/react.svg" alt="React Logo" className="nav-logo" />
            <nav>
                <ul className="nav-list">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Footer() {
    // OG Year Created = 2024
    return (
        <footer>
            <small>&copy; {new Date().getFullYear()} mr-n30 development. All rights reserved.</small>
        </footer>
    )
}

function Page() {
    return (
        <>
            <hr/>
            <main>
                <h1>Reasons I am excited to learn React</h1>
                    <ol className="react-reasons">
                        <li>I enjoy coding</li>
                        <li>I want to learn React as goal of mine</li>
                        <li>React would make me more employable</li>
                    </ol>
            </main>
        </>
    )
}

createRoot(document.getElementById("root")).render(
    <div className="content">
        <Header/>
        <Page/>
        <Footer/>
    </div>
)
