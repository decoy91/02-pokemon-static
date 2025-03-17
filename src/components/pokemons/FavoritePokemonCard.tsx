import type { FavoritePokemon } from "@interface/favorite-pokemon";
import { createSignal, Show, type Component } from "solid-js";




interface Props{
    pokemon: FavoritePokemon;
}

export const FavoritePokemonCard: Component<Props> = ({pokemon}) => {
    const [isVisible, setVisible] = createSignal(true);

    const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ pokemon.id }.png`
    
    const deleteFavorite = () => {
        const favorites = JSON.parse(
            localStorage.getItem('favorites') ?? '[]'
        ) as FavoritePokemon[];
    
        const newFavorites = favorites.filter((p) => p.id !== pokemon.id);

        localStorage.setItem('favorites', JSON.stringify(newFavorites));
        setVisible(false);
    
    };

    
    return(
        <Show when= {isVisible()}>
        <div class='flex flex-col justify-center items-center space-y-2'>
            <a href={`/pokemons/${pokemon.name}`}>
            <img 
            src ={imageSrc}
            alt={pokemon.name}
            width="96"
            height="96"
            />
            <p class='capitalize' >#{pokemon.id} {pokemon.name}</p>
            </a>
            <button onClick={ deleteFavorite } class='text-red-400'>
                Borrar
            </button>
        </div>
        </Show>
    );
}