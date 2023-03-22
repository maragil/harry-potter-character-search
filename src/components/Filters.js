import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";

function Filters ({handleNameFilter, handleHouseFilter, houseFilter, nameFilter}){
    const handleSubmit = (ev) => {
        ev.preventDefault();
    };
    return(
    <section>
            <form
            onSubmit={handleSubmit}>
            <FilterName handleNameFilter={handleNameFilter} nameFilter={nameFilter}></FilterName>
            <FilterHouse handleHouseFilter={handleHouseFilter} houseFilter={houseFilter}></FilterHouse>
            </form>
        </section>
    )
};
export default Filters;