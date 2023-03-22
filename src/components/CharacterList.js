import CharacterCard from "./CharacterCard";
import Error from "./Error";
import '../styles/layout/CharacterList.scss';

function CharacterList ({listCharacter, nameFilter}) {
    if(listCharacter.length === 0 && nameFilter){
        return <Error nameFilter={nameFilter}/>
    };
    const dataHtml = listCharacter.map((eachCharacter) => {
        return <CharacterCard eachCharacter={eachCharacter} key={eachCharacter.id}/>;
    });
    return (
        <section>
            <ul className="character-list">
                {dataHtml}
            </ul>
        </section>
    );
}
export default CharacterList;