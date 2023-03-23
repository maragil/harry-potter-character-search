import { Link } from "react-router-dom";
import images from './Images.js'
import '../styles/layout/CharacterDetail.scss';

function CharacterDetail ({characterFind}) {
    return(
        <>
            <h2 className='detail'>Detalles del personaje</h2>

            <section className='detail__card'>

                <article className="detail__card--img">
                    <div className="detail__card--div">
                        <img
                            className='detail__img'
                            src={characterFind.image !== '' ? characterFind.image : images[characterFind.house]}
                            alt= {`Imagen de ${characterFind.name}`}
                            title= {`Imagen de ${characterFind.name}`}/>
                    </div>
                    <div>
                        <h3 className='detail__desc'>Nombre: </h3>
                        <p className='detail__desc--text'>{characterFind.name}</p>
                    </div>
                </article>

                <article className="detail__card--desc">

                        <h3 className='detail__desc'>Casa:</h3>
                        <img className="detail__desc--shield" alt='Escudo de la casa' src={images[characterFind.house]}></img>

                        <h3 className='detail__desc'>Estado:</h3>
                        <p className='detail__desc--text'>{characterFind.alive ? '🤍' : '💀' }</p>


                        <h3 className='detail__desc'>Género:</h3>
                        <p className='detail__desc--gender'>{characterFind.gender === 'female' ? '♀️'  : '♂️' }</p>


                        <h3 className='detail__desc'>Especie:</h3>
                        <p className='detail__desc--text'>{characterFind.specie}</p>

                        <h3 className='detail__desc'>Nombres alternativos:</h3>
                        <p className='detail__desc--text'>{characterFind.alternatename}</p>
                    </article>
                </section>
            <div className="back">
            <Link className='back__link'to='/'>Volver</Link>
            </div>
        </>
    );
}
export default CharacterDetail;