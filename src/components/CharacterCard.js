import Gryffindor from '../../src/images/logo-g.png'

function CharacterCard ({eachCharacter}){
    console.log(eachCharacter.house)
    return(
        <li className="list">
            <a href="." className="link">
                <img className="card"
                src={eachCharacter.image !== '' ? eachCharacter.image : Gryffindor}
                alt={`Imagen de ${eachCharacter.name}`}
                title={`Imagen de ${eachCharacter.name}`}/>
                <h3>{eachCharacter.name}</h3>
                <p>{eachCharacter.specie}</p>
            </a>
        </li>
    )
}
export default CharacterCard;