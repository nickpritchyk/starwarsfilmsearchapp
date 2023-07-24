'use client';

import { useState } from "react";
import Modal from "./Modal";
import StarwarsCard from './StarwarsCard'

function Searchbar() {
    const [searchInput, setSearchInput] = useState('')
    // state arr for people and film data
    const [people, setPeople] = useState([])
    const [films, setFilms] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [listView, setListView] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const [peopleIdx, setPeopleIdx] = useState(0)
    // type signifying person or film 
    const [cardType, setCardType] = useState('')
    // empty results var
    const [error, setError] = useState('')

    // get function for recieving any characters using search input
    async function getPeople() {
        let peopleAPI = `https://swapi.dev/api/people/?search=${searchInput}`
        setPeople([])
        const res = await fetch(peopleAPI)
        if(!res.ok) {
            throw new Error('Data fetch failed')
        }
        const data = await res.json()
        return data
    }

    // get function for recieving any films using search input 
    async function getFilms() {
        let filmsAPI = `https://swapi.dev/api/films/?search=${searchInput}`
        setFilms([])
        const res = await fetch(filmsAPI)
        if(!res.ok) {
            throw new Error('Data fetch failed')
        }
        const data = await res.json()
        return data
    }

    // function to get data for either film or people 
    async function getData(e) {
        e.preventDefault()
        setError('')
        setIsLoading(true)
        const peopleData = await getPeople()
        const filmData = await getFilms()
        if(!peopleData.count && !filmData.count) 
            setError('No results found')   
        if(peopleData)
            setPeople(peopleData.results)
        if(filmData)
            setFilms(filmData.results)
        setIsLoading(false)
    }


    async function handleFilter() {
        return setListView((curr) => !curr)
    }

  return (
    <div className='flex flex-col justify-center items-center w-fit m-12'>
        <div className='flex flex-col items-center sm:flex-row'>
            <button className='invisible sm:visible rounded-md shadow-md p-1 w-[80px] h-[2rem] hover:text-red-400 text-sm border-[0.2px] border-black' onClick={handleFilter} type='button'> {listView ? 'List View' : 'Grid View'} </button>
            <div className='relative flex items-center'>
                <input className='h-[2rem] text-black border-[0.2px] border-black rounded-md shadow-sm m-2 p-4 w-[18rem] sm:w-[24rem]' type='text' value={searchInput} placeholder='Search for characters or films' onChange={(e) => {setSearchInput(e.target.value)}}></input>
                <button className='absolute right-6 font-bold text-lg' onClick={() => setSearchInput('')}> x </button>
            </div>
            <button className='rounded-md shadow-md p-1 w-[80px] h-[2rem] hover:text-red-400 text-sm border-[0.2px] border-black' type='button' onClick={(e) => getData(e)}> Search </button>
        </div>
        {isLoading && 
            <p className='text-lg mt-8'> Searching the stars... </p>
        }
        {error.length > 0 && <p className="mt-12">{error}</p>}

        {/* variables shared by lifting state into searchbar and down the children  */}
        <StarwarsCard setIsOpen={setIsOpen} listView={listView} people={people} films={films} setPeopleIdx={setPeopleIdx} setCardType={setCardType}/>
        {isOpen && 
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} people={people} peopleIdx={peopleIdx} cardType={cardType} films={films}/>
        }
      </div>
  )
}

export default Searchbar