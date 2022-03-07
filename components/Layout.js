import Header from "./Header"

export default ({ children }) => {
    return <div className="bg-orange-100">
        <header>
            <Header></Header>
        </header>
        <main className="">
            {children}
        </main>
        <footer>
        </footer>
    </div>
}