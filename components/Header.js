export default function Header() {
    return <>
        <div className="flex bg-orange-400 from-orange-400 bg-gradient-to-l to-red-500 py-4 px-8 text-white items-center">
            <h1 className="text-4xl font-bold">Futurama</h1>
            <div className="flex-grow"></div>
            <input className="hidden sm:block rounded-xl text-black border p-2" placeholder="Search..."></input>
        </div>
    </>
}