
const fetchCharacters = async(character) => {

    const emptyCharacter = 'https://rickandmortyapi.com/api/character';
    const populateCharacter = `https://rickandmortyapi.com/api/character?name=${encodeURI(character)}`;
    const url = character !== '' ? populateCharacter : emptyCharacter;
    const resp = await fetch(url);
    const {results} = await resp.json();
    // console.log('data :', results);

    const characters = results ? results.map(info => {
        return {
            id: info.id,
            gender: info.gender,
            image: info.image,
            name: info.name,
            species: info.species,
            status: info.status
        };
    }) : [];

    return characters;
};

export default fetchCharacters;