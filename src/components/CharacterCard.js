import images from './Images.js'
import { Link } from 'react-router-dom';
import '../styles/layout/CharacterCard.scss';

function CharacterCard ({eachCharacter}){

    return(
        <li className="list">
            <Link to={`/character/${eachCharacter.id}`} className="list__link">
                <img className="list__card"
                src={eachCharacter.image !== '' ? eachCharacter.image : images[eachCharacter.house]}
                alt={`Imagen de ${eachCharacter.name}`}
                title={`Imagen de ${eachCharacter.name}`}/>
                <h3 className='list__card--name'>{eachCharacter.name}</h3>
                <p className='list__card--text'>{eachCharacter.specie}</p>
            </Link>
        </li>
    )
}
export default CharacterCard;