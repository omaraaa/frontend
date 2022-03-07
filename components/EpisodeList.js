import { useEffect, useState } from 'react'
import EpisodeItem from './EpisodeItem';


export default function EpisodeList() {
    const [episodes, setEpisodes] = useState([])

    useEffect(async () => {
        let r = await fetch("/episodes.json");
        let json_data = await r.json()
        setEpisodes(json_data)
    }, [])

    return (
        <div className="flex flex-col space-y-2">{episodes.map((v) => <EpisodeItem data={v}></EpisodeItem>)}</div>
    )
}
