import Pokecard from './Pokecard';
import './Pokedex.css';

const Pokedex = ({ Pokemon, total, isWinner }) => {
	return (
		<div className="Pokedex">
			<h1 className="Pokedex-title">Pokedex (total: {total})</h1>
			<div className="Pokedex-cards">
				{Pokemon.map(p => (
					<Pokecard key={p.id} id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />
				))}
			</div>
			{isWinner ? <p className="Pokedex-winner">You win!</p> : ''}
		</div>
	);
};

export default Pokedex;
