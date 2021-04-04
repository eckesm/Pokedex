import Pokemon_characters from './pokemon_characters';
import Pokecard from './Pokecard';
import './Pokedex.css';

const Pokedex = ({ Pokemon = Pokemon_characters }) => {
	return (
		<div className="Pokedex">
			<h1 className="Pokedex-title">Pokedex</h1>
			<div className="Pokedex-cards">
				{Pokemon.map(p => (
					<Pokecard key={p.id} id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />
				))}
			</div>
		</div>
	);
};

export default Pokedex;
