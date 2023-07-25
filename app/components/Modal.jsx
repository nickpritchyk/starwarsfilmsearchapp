'use client';

function Modal({setIsOpen, people, peopleIdx, cardType, films}) {

    // close the modal 
    function handleClose() {
        setIsOpen((curr) => !curr)
    }

  return (
    <div className='w-screen h-screen backdrop-blur-sm fixed inset-0 flex justify-center items-center'>
        <div className='relative flex text-black bg-white rounded-md p-12 w-1/2 h-1/2 overflow-scroll border-[0.2px] border-black '>
            <div className='m-auto'>
            <div className='flex absolute right-0 top-0 m-2 text-black border-1 border-black h-10 w-10 text-center justify-center'>
                <button className='text-3xl' onClick={() => handleClose()}> x </button>
            </div>
            {/* conditionally rendering the modal details depending on the cardType (people or film)  */}
            <div className="flex flex-col justify-center items-center sm:text-2xl space-y-2 w-full h-full">
                <h1 className='text-md sm:text-2xl md:text-4xl font-extrabold'>{cardType == 'film' ?  films[(peopleIdx)].title : people[(peopleIdx)].name}</h1>
                <label className="font-bold">{cardType == 'film' ? 'Title' :'Birth year'}</label>
                <p>{cardType == 'film' ?  films[(peopleIdx)].title : people[(peopleIdx)].birth_year}</p>
                <label className="font-bold">{cardType == 'film' ? 'Director' :'Gender'}</label>
                <p>{cardType == 'film' ?  films[(peopleIdx)].director : people[(peopleIdx)].gender}</p>
                <label className="font-bold">{cardType == 'film' ? 'Producer' :'Hair Color'}</label>
                <p>{cardType == 'film' ?  films[(peopleIdx)].producer : people[(peopleIdx)].hair_color}</p>
                <label className="font-bold">{cardType == 'film' ? 'Release' :'Height'}</label>
                <p>{cardType == 'film' ?  films[(peopleIdx)].release_date : people[(peopleIdx)].height}</p>
                <label className="font-bold">{cardType == 'film' ? 'Opening Crawl' :'Mass'}</label>
                <p className={cardType=='film' ? 'text-sm' :undefined}>{cardType == 'film' ?  films[(peopleIdx)].opening_crawl : people[(peopleIdx)].mass}</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Modal