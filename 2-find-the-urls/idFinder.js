const nodeFetch = require('node-fetch');
// for move
// for (let a = 1; a < 400; a++) {
// 	nodeFetch(`https://pokeapi.co/api/v2/move/${a}`).then((res) => res.json()).then((data) => {
// 		if (data.accuracy === 85 && data.pp === 40 && data.priority === 0 && data.power === null) {
// 			return console.log(data.id);
// 		}
// 	});
// }

// ...........................

// for (let a = 1; a < 400; a++) {
// 	nodeFetch(`https://pokeapi.co/api/v2/item/${a}`).then((res) => res.json()).then((data) => {
// 		if (
// 			data.cost === 3000 &&
// 			data.fling_power === 30 &&
// 			data.fling_effect === null &&
// 			data.baby_trigger_for === null
// 		) {
// 			return console.log(data.id);
// 		}
// 	});
// }

//..........................................

// for (let a = 1; a < 400; a++) {
//   nodeFetch(`https://pokeapi.co/api/v2/pokemon/${a}`).then((res) => res.json()).then((data) => {
//     if (
//       data.height === 13 &&
//       data.weight === 1 &&
//       data.base_experience === 62

//     ) {
//       return console.log(data.id);
//     }
//   });
// }
//................................

for (let a = 1; a < 19; a++) {
	nodeFetch(`https://pokeapi.co/api/v2/type/${a}`)
		.then((res) => res.json())
		.then((data) => {
			if (
				Object.keys(data.damage_relations).length === 6 &&
				data.pokemon.length === 44 &&
				data.moves.length === 25
			)
				return console.log(data.id);
		})
		.catch((err) => console.error(err));
}
