const API = "https://rickandmortyapi.com/api/character/";

const getData = async (id) => {
  const apiURL = id ? `${API}${id}` : API;
  // Si id existe, trae la API con el ID, si no, regresame solo la API.

  try {
    // Llamado a fetch(apiURL)
    const response = await fetch(apiURL);
    // Convertimos la respuesta en un objeto JSON iterable.
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Fetch Error", error);
  }
};

export default getData;

// API: https://rickandmortyapi.com/
