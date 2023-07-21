'use client';

function StarwarsCard({listView, people, setIsOpen, setPeopleIdx}) {

  function handleCardOpen(idx) {
    setPeopleIdx(idx)
    setIsOpen((curr) => !curr)
  }

  return (
    <div className={listView ? 'flex flex-col' : 'grid grid-cols-3 gap-4 w-screen'}>
            {people.length > 0 && people.map((res, idx) => 
                <div key={idx} className='m-12 p-6 text-center hover:scale-[1.02] rounded-md shadow-lg bg-white'>
                    <h1>{res.name}</h1>
                    <p>{res.birth_year}</p>
                    <button className='bg-blue-400 rounded-lg p-2 shadow-sm hover:scale-[1.02]' onClick={() => handleCardOpen(idx)}> See more </button>
                </div>
            )}
        </div>
  )
}

export default StarwarsCard