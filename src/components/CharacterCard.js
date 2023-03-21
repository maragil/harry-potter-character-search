import images from './Images.js'

function CharacterCard ({eachCharacter}){
    console.log(eachCharacter.house)

    return(
        <li className="list">
            <a href="." className="link">
                <img className="card"
                src={eachCharacter.image !== '' ? eachCharacter.image : images[eachCharacter.house]}
                alt={`Imagen de ${eachCharacter.name}`}
                title={`Imagen de ${eachCharacter.name}`}/>
                <h3>{eachCharacter.name}</h3>
                <p>{eachCharacter.specie}</p>
            </a>
        </li>
    )
}
export default CharacterCard;