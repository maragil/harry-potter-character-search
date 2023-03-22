import '../styles/layout/Error.scss';

function Error ({nameFilter}) {
    return(
        <p className="error">{`No se han encontrado personajes que coincidan con ${nameFilter}`}</p>

    )
}
export default Error;
