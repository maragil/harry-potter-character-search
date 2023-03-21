import FilterName from "./FilterName";

function Filters ({handleNameFilter}){
    return(
    <section>
            <form>
            <FilterName handleNameFilter={handleNameFilter}></FilterName>
            </form>
        </section>
    )
};
export default Filters;