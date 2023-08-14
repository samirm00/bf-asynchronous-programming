/*
Promise.all()
-------------
is a method in JavaScript that takes an array of promises and returns a single promise
that resolves when all of promises have resolved, 
or rejects as soon as one of the promises rejects.

*/

const getPokemonById = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

        if (!res.ok) {
            throw new Error(
                `An error has occurred while fetching pokemon with id : ${id} and status: ${res.status}`,
            );
        }

        const data = await res.json();
        return data;
    } catch (err) {
        console.error('There was an error fetching the Pokémon:', err);
        return null;
    }
};

const getPokemons = async (ids = []) => {
    const pokemonPromises = ids.map((id) => getPokemonById(id));
    const pokemons = await Promise.all(pokemonPromises);
    console.log(pokemons);
};

getPokemons([1, 23, 4, 5, 6, 7]);

/*
URI (Uniform Resource Identifier)
---------------------------------
URI is a broad term that includes both URLs and URNs.
1- URL (Uniform Resource Locator):  https://www.example.com/page
2- URN (Uniform Resource Name): urn:isbn:0451450523
*/

/*
encodeURI and encodeURIComponent
--------------------------------
1- encodeURI : it encodes a certain characters except some special characters :, /, ?, &, and #
2- encodeURIComponent : it encode a certain characters including :, /, ?, &, and #
Notes : 
- encodeURI  : you will use it most of the times if not always
- encodeURIComponent :  used only on a part of the URI
*/
const uri = 'https://www.example.com/query?name=John Doe';
const result1 = encodeURI(uri); // "https://www.example.com/query?name=John%20Doe"
console.log('encodeURI', result1);

const queryParam = 'name=John Doe&age=30';
const result2 = encodeURIComponent(queryParam); // "name%3DJohn%20Doe%26age%3D30"
console.log('encodeURIComponent', result2);
