const URL = "https://rickandmortyapi.com/api/character";

const getCharacters = async () => {
  const response = await fetch(URL);
  const { results } = await response.json();
  return results
};


export default getCharacters