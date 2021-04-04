import Pokemon_characters from './pokemon_characters';
import Pokedex from './Pokedex';

const Pokegame = ({ Pokemon = Pokemon_characters }) => {
	const allPokemon = [ ...Pokemon ];
	const hand1 = [];
	const hand1num = Math.round(Pokemon.length / 2);
	let hand1total = 0;
	const hand2 = [];
	const hand2num = Pokemon.length - hand1num;
	let hand2total = 0;

	for (let h1 = 0; h1 < hand1num; h1++) {
		let pokeCardnum = Math.floor(Math.random() * allPokemon.length);
		let pokeCard = allPokemon.splice(pokeCardnum, 1)[0];
		hand1total += pokeCard['base_experience'];
		hand1.push(pokeCard);
	}

	for (let h2 = 0; h2 < hand2num; h2++) {
		let pokeCardnum = Math.floor(Math.random() * allPokemon.length);
		let pokeCard = allPokemon.splice(pokeCardnum, 1)[0];
		hand2total += pokeCard['base_experience'];
		hand2.push(pokeCard);
	}

	return (
		<div>
			<Pokedex key={1} Pokemon={hand1} total={hand1total} isWinner={hand1total > hand2total ? true : false} />
			<Pokedex key={2} Pokemon={hand2} total={hand2total} isWinner={hand2total > hand1total ? true : false} />
		</div>
	);
};

export default Pokegame;
