'use client';

import { useState } from "react";

function StarwarsCard({listView, people, films, setIsOpen, setPeopleIdx, setCardType}) {

  function handlePeopleOpen(idx) {
    setCardType('people')
    setPeopleIdx(idx)
    setIsOpen((curr) => !curr)
  }
  function handleFilmOpen(idx) {
    setCardType('film')
    setPeopleIdx(idx)
    setIsOpen((curr) => !curr)
  }

  return (
    <div className={listView ? 'flex flex-col' : 'md:grid md:grid-cols-3 md:gap-4 md:w-screen'}>
            {people.length > 0 && people.map((res, idx) => 
                <div key={idx} className='flex flex-col items-center space-y-4 p-2 m-12 text-center justify-self-center hover:scale-[1.02] rounded-md shadow-lg bg-white w-52 h-64 lg:w-80 lg:h-80'>
                    <div className="h-[1rem] w-full">
                      <h2 className='rounded-md text-white bg-blue-400 w-full'> Character </h2>
                    </div>
                    <h1>{res.name}</h1>
                    <p>{res.birth_year}</p>
                    <button className='bg-blue-400 rounded-lg p-2 shadow-sm hover:scale-[1.02]' onClick={() => handlePeopleOpen(idx)}> See more </button>
                </div>
            )}
            {films.length > 0 && films.map((res, idx) => 
                <div key={idx} className='flex flex-col items-center space-y-4 p-2 m-12 justify-self-center text-center hover:scale-[1.02] rounded-md shadow-lg bg-white w-52 h-64 lg:w-80 lg:h-80'>
                    <div className="h-[1rem] w-full">
                      <h2 className='rounded-md text-white bg-red-500 w-full'> Film </h2>
                    </div>
                    <h1>{res.title}</h1>
                    <p>{res.episode_id}</p>
                    <button className='bg-red-500 rounded-lg p-2 shadow-sm hover:scale-[1.02] w-fit' onClick={() => handleFilmOpen(idx)}> See more </button>
                </div>
            )}
        </div>
  )
}

export default StarwarsCard