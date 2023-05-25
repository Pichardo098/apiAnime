import axios from 'axios'
import './App.css'
import { useState } from 'react'
import Anime from './Components/Anime'

function App() {

  const [animes, setAnimes] = useState(null)
  

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.nameAnime.value

    if(name === ""){
    return setAnimes(null)
    }


    
    axios.get(`https://api.jikan.moe/v4/anime?q=${name}`)
      .then(res => setAnimes(res.data.data))
      .catch(err =>console.log(err))
  }

  const mappedAnimes = animes?.map(anime => (
    {
      images :anime?.images.webp.large_image_url,
      title: anime?.title,
      synopsis: anime?.synopsis
    }
  ))

  

  return (
    <>
      <main>
        <h2 className='text-center py-4 text-3xl'>Search Anime</h2>

        <form onSubmit={handleSubmit} className='max-w-max mx-auto'>
          <div className='flex rounded-md overflow-hidden'>
            <input id='nameAnime' type="text" className='text-black outline-none px-1' placeholder='Search your anime..'/>
            <button className='bg-red-500 p-2'>Search</button>
          </div>
        </form>
        
        <section className='p-4 py-6 flex flex-wrap justify-center gap-4 max-w-[1000px] mx-auto'>
          {animes && <Anime mappedAnimes={mappedAnimes}/>}


          

          {/* <article>
            <div>
              <img src={animes?.[0].images.webp.large_image_url} alt="" />
            </div>
            <section>
              <h3>{animes?.[0].title}</h3>
              <p>
              {animes?.[0].synopsis}
              </p>
             /section>
          </article> */}

            
        </section>
      </main>
    </>
  )
}

export default App
