import CharacterCard from "./CharacterCard";

function CharacterList ({listCharacter}) {
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