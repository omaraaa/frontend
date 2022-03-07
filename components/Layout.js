import Header from "./Header"

export default ({ children }) => {
    return <div className="bg-orange-100">
        <header>
            <Header></Header>
        </header>
        <main className="p-4 ">
            {children}
        </main>
        <footer className=" px-8 py-2">
            footer
        </footer>
    </div>
}