
const Bar = ({ selGen }) => {

    const generations = [
        { id: 1, title: '1° Gen' },
        { id: 2, title: '2° Gen' },
        { id: 3, title: '3° Gen' },
        { id: 4, title: '4° Gen' },
        { id: 5, title: '5° Gen' },
        { id: 6, title: '6° Gen' },
        { id: 7, title: '7° Gen' },
        { id: 8, title: '8° Gen' },
        { id: 9, title: '9° Gen' },
    ]

    return (
        <div className="mt-2 fixed z-30 flex bg-white rounded-full bg-opacity-30">
            {generations.map(generation => (
                <button key={generation.id} id={generation.id} onClick={selGen} className="genButton">{generation.title}</button>
            ))}
        </div>
    )
}

export default Bar;