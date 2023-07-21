'use client';

import { useState } from "react";
import Modal from "./Modal";
import StarwarsCard from './StarwarsCard'

function Searchbar() {
    const [searchInput, setSearchInput] = useState('')
    const [people, setPeople] = useState([])
    const [films, setFilms] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [listView, setListView] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const [peopleIdx, setPeopleIdx] = useState(0)
    const [cardType, setCardType] = useState('')
    const [error, setError] = useState('')

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
            <button className='invisible sm:visible bg-white rounded-md shadow-md p-1 w-[80px] h-[2rem] hover:text-red-400 text-sm' onClick={handleFilter} type='button'> {listView ? 'List View' : 'Grid View'} </button>
            <input className='h-[2rem] text-black border-2 border-black rounded-md shadow-sm m-2 p-4 w-[18rem] sm:w-[24rem]' placeholder='Search for characters or films' onChange={(e) => {setSearchInput(e.target.value)}}></input>
            <button className='bg-white rounded-md shadow-md p-1 w-[80px] h-[2rem] hover:text-red-400 text-sm' type='button' onClick={(e) => getData(e)}> Search </button>
        </div>
        {isLoading && 
            <p className='text-lg mt-8 text-white'> Searching the stars... </p>
        }
        {error.length > 0 && <p className="text-white mt-12">{error}</p>}
        <StarwarsCard setIsOpen={setIsOpen} listView={listView} people={people} films={films} setPeopleIdx={setPeopleIdx} setCardType={setCardType}/>
        {isOpen && 
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} people={people} peopleIdx={peopleIdx} cardType={cardType} films={films}/>
        }
      </div>
  )
}

export default Searchbar