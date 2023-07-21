'use client';

function Modal({setIsOpen, people, peopleIdx}) {

    function handleClose() {
        setIsOpen((curr) => !curr)
    }

  return (
    <div className='w-screen h-screen backdrop-blur-sm bg-white/30 fixed inset-0 flex justify-center items-center'>
        <div className='relative flex justify-center items-center text-black bg-gray-200 rounded-md p-12'>
            <div className='flex absolute right-0 top-0 m-2 text-black border-1 border-black h-10 w-10 text-center justify-center'>
                <button className='text-3xl' onClick={() => handleClose()}> x </button>
            </div>
            <div className="flex flex-col justify-center items-center text-black text-xl space-y-1">
                <h1 className='text-4xl font-extrabold'>{people[peopleIdx].name}</h1>
                <label className="font-bold">Birth year</label>
                <p>{people[peopleIdx].birth_year}</p>
                <label className="font-bold">Gender</label>
                <p>{people[peopleIdx].gender}</p>
                <label className="font-bold">Hair Color</label>
                <p>{people[peopleIdx].hair_color}</p>
                <label className="font-bold">Height</label>
                <p>{people[peopleIdx].height}</p>
                <label className="font-bold">Mass</label>
                <p>{people[peopleIdx].mass}</p>
            </div>
        </div>
    </div>
  )
}

export default Modal