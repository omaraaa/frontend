import { useEffect, useState } from 'react'
import EpisodeItem from './EpisodeItem';


export default function EpisodeList({ episodes }) {
    return (
        <div className="flex flex-col space-y-2 p-2 h-screen overflow-y-scroll">{episodes.map((v) => <EpisodeItem data={v}></EpisodeItem>)}</div>
    )
}
