import '../styles/layout/FilterHouse.scss';

function FilterHouse ({handleHouseFilter, houseFilter}){
    const handleChange = (ev) => {
        handleHouseFilter(ev.target.value);
    }
    return (
        <>
            <legend className='filter'>Elije una casa</legend>
                <select
                className='filter__input'
                id="character" onChange={handleChange} value={houseFilter}>
                    <option className='filter__select--option' value="Gryffindor">Gryffindor</option>
                    <option className='filter__select--option' value="Hufflepuff">Hufflepuff</option>
                    <option className='filter__select--option' value="Ravenclaw">Ravenclaw</option>
                    <option className='filter__select--option' value="Slytherin">Slytherin</option>
                </select>
        </>
    );
}
export default FilterHouse;