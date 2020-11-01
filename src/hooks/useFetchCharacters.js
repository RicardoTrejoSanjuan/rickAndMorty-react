import { useState, useEffect } from 'react';
import fetchCharacters from '../helpers/fetchCharacters';

const useFetchCharacters = (character) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        fetchCharacters(character)
        .then(characters => 
            setState({
                data: characters,
                loading: false,
            })
        );
    }, [character]);

    return state;
};

export default useFetchCharacters;