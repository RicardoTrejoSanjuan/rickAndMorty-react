import React, {useState} from 'react';
import SearchComponent from '../components/SearchComponent';
import GridComponent from '../components/GridComponent';

const HomeScreen = () => {

    const [character, setCharacter] = useState('');

    return (
        <>
            <div className="container p-4">
                <h1>React - App</h1>
                <SearchComponent setCharacter={ setCharacter } />
                <hr />

                <ol>
                    {
                        <GridComponent
                            key={character}
                            character={character}
                        />
                    }
                </ol>
            </div>
        </>
    );
};

export default HomeScreen;