import '../styles/layout/FilterName.scss';

function FilterName ({handleNameFilter, nameFilter}) {
    const handleInput = (ev) => {
        handleNameFilter(ev.target.value);
    }
    return(
        <>
            <legend className='filter'>Busca un personaje</legend>
            <input className='filter__input'
                name="search"
                placeholder="Introduce un nombre"
                onInput={handleInput}
                value={nameFilter}
            />
        </>
    )
};
export default FilterName;