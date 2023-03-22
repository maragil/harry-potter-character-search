import images from './Images.js'
import { Link } from 'react-router-dom';

function CharacterCard ({eachCharacter}){

    return(
        <li className="list">
            <Link to={`/character/${eachCharacter.id}`} className="link">
                <img className="card"
                src={eachCharacter.image !== '' ? eachCharacter.image : images[eachCharacter.house]}
                alt={`Imagen de ${eachCharacter.name}`}
                title={`Imagen de ${eachCharacter.name}`}/>
                <h3>{eachCharacter.name}</h3>
                <p className='text'>{eachCharacter.specie}</p>
            </Link>
        </li>
    )
}
export default CharacterCard;