'use client';

import { useState } from "react";

function StarwarsCard({listView, people, films, setIsOpen, setPeopleIdx, setCardType}) {

  // functions to set the index of the clicked card and set the info card type 
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
        // className changed based on list or grid view state 
    <div className={listView ? 'flex flex-col' : 'sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 md:gap-4 md:w-screen'}>
            {people.length > 0 && people.map((res, idx) => 
                <div key={idx} className='relative flex flex-col items-center space-y-4 p-2 m-12 text-center justify-center justify-self-center hover:scale-[1.02] rounded-md shadow-lg border-[0.2px] border-blue-400 w-52 h-64 lg:w-80 lg:h-80'>
                    <div className="w-full absolute top-0">
                      <h2 className='rounded-t-md bg-blue-400 w-full'> Character </h2>
                    </div>
                    <h1 className='text-xl font-bold'>{res.name}</h1>
                    <p>{res.birth_year}</p>
                    <button className='bg-blue-400 rounded-lg p-2 shadow-lg hover:scale-[1.02]' onClick={() => handlePeopleOpen(idx)}> See more </button>
                </div>
            )}
            {films.length > 0 && films.map((res, idx) => 
                <div key={idx} className='relative flex flex-col items-center space-y-4 p-2 m-12 justify-self-center text-center justify-center hover:scale-[1.02] rounded-md shadow-lg border-[0.2px] border-red-500 w-52 h-64 lg:w-80 lg:h-80'>
                    <div className="w-full absolute top-0">
                      <h2 className='rounded-t-md bg-red-500 w-full'> Film </h2>
                    </div>
                    <h1 className='text-xl font-bold'>{res.title}</h1>
                    <p>{res.episode_id}</p>
                    <button className='bg-red-500 rounded-lg p-2 shadow-sm hover:scale-[1.02] w-fit' onClick={() => handleFilmOpen(idx)}> See more </button>
                </div>
            )}
        </div>
  )
}

export default StarwarsCard