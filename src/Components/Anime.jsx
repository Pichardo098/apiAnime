const Anime = ({mappedAnimes}) => {

  const hastAnimes = mappedAnimes?.length > 0


  return (
    <>
    {
      hastAnimes ?
        mappedAnimes?.map(anime => (
          <article className="bg-amber-50 text-black rounded-md overflow-scroll overscroll-y-auto w-[280px] ">
            <div className="max-w-full h-[400px]">
              <img className="w-full h-full object-cover " src={anime.images} alt={anime.title} />
            </div>
            <section className="p-2 ">
              <h3 className="text-2xl font-bold my-2 ">{anime.title}</h3>
              <p className="text-sm h-[40px] ">
                {anime.synopsis}
              </p>
            </section>
          </article>
        ))
        : 
        <h2>No results exist </h2>
      }
    </>
  )
}

export default Anime