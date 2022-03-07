export default ({ data }) => {
    return <div className="flex flex-col rounded border p-4 bg-white hover:from-orange-400 hover:bg-gradient-to-l hover:to-red-500 hover:text-white  cursor-pointer space-y-2 max-h-80">
        <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 text-xl font-bold">
            <div>Episode {data.number}</div><h1>{data.title}</h1>
        </div>
        <div className="text-sm">Writer(s): {data.writers} - Airing Date: {data.originalAirDate}</div>
        <p className="overflow-auto">
            {data.desc}
        </p>
    </div>
}