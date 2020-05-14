import getData from "../utils/getData";

const Home = async () => {
  // Traemos todos los personajes de la API:
  const characters = await getData();
  const view = `
    <div class="characters">
      <!-- Recorremos cada personaje: -->
      ${characters.results.map((character) => `
        <article class="character-item">
          <a href="#/${character.id}">
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
          </a>
        </article>
      `).join("")}
    </div>
  `;

  return view;
};

export default Home;

// .join(separador) sirve para convertir un array a una cadena de caracteres y separarlo por algún caracter indicado en sus argumentos ().
