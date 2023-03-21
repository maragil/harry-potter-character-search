import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";

function Filters ({handleNameFilter, handleHouseFilter}){
    return(
    <section>
            <form>
            <FilterName handleNameFilter={handleNameFilter}></FilterName>
            <FilterHouse handleHouseFilter={handleHouseFilter}></FilterHouse>
            </form>
        </section>
    )
};
export default Filters;