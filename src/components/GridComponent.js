import React from 'react';
import PropTypes from 'prop-types';
import ItemComponent from './ItemComponent';
import useFetchCharacters from '../hooks/useFetchCharacters';

const GridComponent = ({character}) => {

    const { data, loading } = useFetchCharacters(character);

    return (
        <div>
            { character !== '' && <h3 className="animate__animated animate__bounce animate__delay">"{character}"</h3>}
            

            { loading && <p>Loading...</p> }

            <div className="card-grid">
                {
                    data.length > 0 ? data.map(char => (
                        <ItemComponent key={char.id} character={char} />
                    )) : <h5 className="text-danger">There is nothing here...</h5>
                }
            </div>
            
        </div>
    );
};


GridComponent.propTypes = {
    character: PropTypes.string.isRequired
}

export default GridComponent;