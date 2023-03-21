const getDataApi= (house) => {
    return fetch (`https://hp-api.onrender.com/api/characters/house/${house}`)
        .then((response) => response.json())
        .then((data) => {
        const cleanData = data.map(eachCharacter => {
            return {
                image: eachCharacter.image,
                name: eachCharacter.name,
                house: eachCharacter.house,
                alive: eachCharacter.alive,
                gender: eachCharacter.gender,
                specie: eachCharacter.species,
                alternatename: eachCharacter.alternate_names,
                id: eachCharacter.id,
            };
        });
        return cleanData;
    });
};
export default getDataApi;