const getHash = () =>
  location.hash.slice(1).toLocaleLowerCase().split("/")[1] || "/";

export default getHash;

// location: ruta donde está.
// .hash: se obtiene el hash donde se encuentre. O sea la ruta en un string a partir de donde esté el #. // #/1/
// Hacemos un slice para eliminar el primer elemento, osea "#" // /1/
// toLocaleLowerCase(): para que siempre nos regrese la ruta en minúscula. // /1/
// split(): convierte la cadena en un arreglo y elimina los "/". // ["", "1", ""]
// [1] para seleccionar el elemento necesario, en este caso el id.
// Si no, que vaya a la raíz del proyecto "/" .

// .split() se usa para dividir una cadena en un arreglo de subcadenas y devuelve el nuevo arreglo.
// .split("/") lo que hace es que cada vez que encuentre un caracter "/", elimmina tal caracter y lo divide en subcadenas.
// DATO EXTRA: si haces .split("") el arreglo se dividirá entre cada carácter que encuentre.
