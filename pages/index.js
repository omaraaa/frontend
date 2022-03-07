
import { useState, useEffect } from 'react'
import EpisodeList from '../components/EpisodeList'
import Layout from '../components/Layout'

export default function Home() {
  const [seasons, setSeasons] = useState([])
  const [season, setSeason] = useState(0)
  const [showSeasons, setShowSeasons] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const r = await fetch("/episodes.json");
      const json_data = await r.json()
      const seasons = []

      let current_season = null
      for (const episode of json_data) {
        let episode_n = episode.number.split(" ");
        let last = episode_n[episode_n.length - 1];
        if (last == "1" && current_season != null) {
          seasons.push(current_season)
          current_season = []
        }

        if (current_season == null) {
          current_season = []
        }

        current_season.push(episode)
      }
      setSeasons(seasons)
    }

    fetchData().catch(console.error);
  }, [])


  return <Layout>
    <div className='py-2 flex flex-col sm:hidden items-center align-middle space-y-1'>
      <button className='text-xl font-bold p-8 bg-orange-200 hover:bg-orange-300 w-full' onClick={() => setShowSeasons(!showSeasons)}>Season {season + 1} </button>
      {showSeasons ?

        seasons.map((s, i) => {
          let selected = i == season ? " from-orange-400 bg-gradient-to-l to-red-500" : "";
          return (<button className={"text-xl  w-full p-8 font-bold rounded bg-white px-16 hover:from-orange-400 hover:bg-gradient-to-l hover:to-red-500 hover:text-white" + selected} onClick={(e) => {
            setSeason(i)
            setShowSeasons(false)
          }}>
            Season {i + 1}
          </button>)
        }
        ) : ""}
    </div>

    <div className='flex'>
      <div className='hidden sm:flex flex-col p-4 space-y-2'>
        {seasons.map((s, i) =>
          <button className="flex font-bold rounded bg-white px-16 hover:from-orange-400 hover:bg-gradient-to-l hover:to-red-500 hover:text-white" onClick={(e) => setSeason(i)}>
            Season {i + 1}
          </button>
        )}
      </div>
      <div>
        {seasons ? seasons[season] ? <EpisodeList episodes={seasons[season]}></EpisodeList> : "" : ""}
      </div>
    </div>

  </Layout >

}
