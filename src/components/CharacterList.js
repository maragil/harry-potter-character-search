import CharacterCard from "./CharacterCard";
import Error from "./Error";

function CharacterList ({listCharacter, nameFilter}) {
    if(listCharacter.length === 0 && nameFilter){
        return <Error nameFilter={nameFilter}/>
    };
    const dataHtml = listCharacter.map((eachCharacter) => {
        return <CharacterCard eachCharacter={eachCharacter} key={eachCharacter.id}/>;
    });
    return (
        <section>
            <ul className="ul">
                {dataHtml}
            </ul>
        </section>
    );
}
export default CharacterList;