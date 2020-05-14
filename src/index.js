import router from "./routes";

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
// Lo que vaya en este archivo, va directamente a la carpeta dist/main.js que es donde se encuentra el bundle.js que nos genera webpack.
