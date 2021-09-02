function filterMovies(movies, req, isShortMovies) {
  let filterMovies = [];

  if (movies) {
    filterMovies = movies.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(req.toLowerCase());
    });
  }
  if (isShortMovies) {
    filterMovies = filterMovies.filter((movie) => movie.duration <= 40);
  }
  return filterMovies;
}

export default filterMovies;
