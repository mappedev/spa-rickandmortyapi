const resolveRoutes = (route) => {
  if (route.length <= 3) {
    let validRoute = route === "/" ? route : "/:id";

    return validRoute;
  }

  return route;
};

export default resolveRoutes;

// Lógica: si la ruta es menor o igual a tres, quiere decir que la ruta es / o /:id , en este caso verificamos, si es "/" es home, sino es "/:id".
// En caso de que el elemento sea mayor de 3, haremos que nos devuelva la ruta que él usuario puso...

// return `/${route}`; // /about/
