import { Link } from "react-router-dom";
import images from './Images.js'
import '../styles/layout/CharacterDetail.scss';

function CharacterDetail ({characterFind}) {
    return(
        <>
            <h2 className='detail__title'>Detalles del personaje</h2>

                <section className='detail__card'>
                    <img
                        className='detail__img'
                        src={characterFind.image !== '' ? characterFind.image : images[characterFind.house]}
                        alt= {`Imagen de ${characterFind.name}`}
                        title= {`Imagen de ${characterFind.name}`}
                    />

                    <article className="article">
                        <h3 className='detail__desc'>Nombre: </h3>
                        <p className='text'>{characterFind.name}</p>

                        <h3 className='detail__desc'>Casa:</h3>
                        <img className="detail__shield" src={images[characterFind.house]}></img>

                        <h3 className='detail__desc'>Estado:</h3>
                        <p className='text'>{characterFind.alive ? '🤍' : '💀' }</p>


                        <h3 className='detail__desc'>Género:</h3>
                        <p className='text_gender'>{characterFind.gender === 'female' ? '♀️'  : '♂️' }</p>


                        <h3 className='detail__desc'>Especie:</h3>
                        <p className='text'>{characterFind.specie}</p>

                        <h3 className='detail__desc'>Nombres alternativos:</h3>
                        <p className='text'>{characterFind.alternatename}</p>
                    </article>
                </section>
            <Link className="back" to='/'>Volver</Link>
        </>
    );
}
export default CharacterDetail;