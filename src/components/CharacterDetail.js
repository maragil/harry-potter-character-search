function CharacterDetail ({characterFind}) {
    return(
        <>
            <section className='detail__page'>
                <h2 className='detail title'>Detalles del personaje</h2>
                <img
                className='detail__img'
                src={characterFind.image}
                alt= {`Imagen de ${characterFind.name}`}
                title= {`Imagen de ${characterFind.name}`}
                />
                <h3 className='detail name'>Nombre</h3>
                <p className='text'>{characterFind.name}</p>
                <h3 className='detail house'>Casa</h3>
                <p className='text'>{characterFind.house}</p>
                <h3 className='detail status'>Estado</h3>
                <p className='text'>{characterFind.alive ? 'Viv@' : 'Muert@' }</p>
                <h3 className='detail gender'>Género</h3>
                <p className='text'>{characterFind.gender}</p>
                <h3 className='detail specie'>Especie</h3>
                <p className='text'>{characterFind.specie}</p>
                <h3 className='detail othersnames'>Nombres alternativos</h3>
                <p className='text'>{characterFind.alternatename}</p>
            </section>
        </>
    );
}
export default CharacterDetail;