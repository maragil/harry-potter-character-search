function FilterHouse (){
    return
        <fieldset>
            <legend>Filtrar por personaje</legend>
                <select
                id="character">
                    <option value="Gryffindor">Gryffindor</option>
                    <option value="Hufflepuff">Hufflepuff</option>
                    <option value="Ravenclaw">Ravenclaw</option>
                    <option value="Slytherin">Slytherin</option>
                </select>
        </fieldset>
}
export default FilterHouse;