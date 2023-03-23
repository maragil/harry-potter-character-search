import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";
import "../styles/layout/Filters.scss";

function Filters ({handleNameFilter, handleHouseFilter, houseFilter,handleReset, nameFilter}){
    const handleSubmit = (ev) => {
        ev.preventDefault();
    };
    return(
    <section>
            <form className="form"
            onSubmit={handleSubmit}>
            <FilterName handleNameFilter={handleNameFilter} nameFilter={nameFilter} className='form__name'></FilterName>
            <FilterHouse handleHouseFilter={handleHouseFilter} houseFilter={houseFilter} className='form__house'></FilterHouse>
            <input className="form__reset" type='button' value='Reset'onClick={handleReset}></input>
            </form>
        </section>
    )
};
export default Filters;