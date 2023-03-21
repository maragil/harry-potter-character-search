function FilterName ({handleNameFilter, nameFilter}) {
    const handleInput = (ev) => {
        handleNameFilter(ev.target.value);
    }
    return(
        <fieldset>
        <legend>Filtrar por nombre</legend>
        <input
            name="search"
            placeholder="Introduce un nombre"
            onInput={handleInput}
            value={nameFilter}
        />
    </fieldset>
    )
};
export default FilterName;