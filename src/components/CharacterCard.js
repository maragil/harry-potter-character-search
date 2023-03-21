import gryffindor from '../../src/images/logo-g.png'

function CharacterCard ({eachCharacter}){
    return(
        <li className="list">
            <a href="." className="link">
                <img className="card"
                src={eachCharacter.image !== '' ? eachCharacter.image : gryffindor}
                alt={`Imagen de ${eachCharacter.name}`}
                title={`Imagen de ${eachCharacter.name}`}/>
                <h3>{eachCharacter.name}</h3>
                <p>{eachCharacter.specie}</p>
            </a>
        </li>
    )
}
export default CharacterCard;