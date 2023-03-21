const getDataApi= () => {
    return fetch ('https://hp-api.onrender.com/api/characters/house/gryffindor')
    .then((response) => response.json())
    .then((data) => {
        const cleanData = data.map(eachCharacter => {
            return {
                photo: eachCharacter.image,
                name: eachCharacter.name,
                specie: eachCharacter.species,
                id: eachCharacter.id,
            };
        });
        return cleanData;
    });
};
export default getDataApi;