import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';

const PokemonApi = () => {
  const dispatch = useDispatch();
  const { isLoading, pokemons, page } = useSelector( state => state.pokemons );

  useEffect( () => {
    dispatch( getPokemons() );

  }, []);

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span> Loading: { isLoading ? 'true' : 'false' }</span>
      
      <ul>
        {
          pokemons.map( ({ name }) => (
            <li key={ name }>{ name }</li>
          ))
        }
      </ul>

      <button
        disabled={ isLoading }
        onClick={ () => dispatch( getPokemons( page ) ) }
      >
        Next
      </button>
    </>
  );
}

export default PokemonApi;
