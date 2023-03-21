function FilterHouse ({handleHouseFilter}){
    const handleChange = (ev) => {
        handleHouseFilter(ev.target.value);
    }
    return (
        <fieldset>
            <legend>Filtrar por casa</legend>
                <select
                id="character" onChange={handleChange}>
                    <option value="Gryffindor">Gryffindor</option>
                    <option value="Hufflepuff">Hufflepuff</option>
                    <option value="Ravenclaw">Ravenclaw</option>
                    <option value="Slytherin">Slytherin</option>
                </select>
        </fieldset>
    );
}
export default FilterHouse;