import './Pokecard.css';

const Pokecard = ({ id, name, type, base_experience }) => {
	const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
	return (
		<div className="Pokecard">
			<h1 className="Pokecard-name">{name}</h1>
			<img className="Pokecard-img" src={img} alt={name} />
			<p className="Pokecard-type">Type: {type}</p>
			<p className="Pokecard-exp">EXP: {base_experience}</p>
		</div>
	);
};

export default Pokecard;
