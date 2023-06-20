window.addEventListener('DOMContentLoaded', async () => {
    const filmList = document.getElementById('film-list');
    const loader = document.getElementById('loader');
    const error = document.getElementById('error');
  
    try {
      loader.classList.remove('hidden');
      const response = await fetch('https://swapi.dev/api/films/');
      const data = await response.json();
      const films = data.results;
  
      films.forEach(film => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <h3>Episode ${film.episode_id}: ${film.title}</h3>
          <p><strong>Opening Crawl:</strong> ${film.opening_crawl}</p>
          <p><strong>Director:</strong> ${film.director}</p>
          <p><strong>Producer:</strong> ${film.producer}</p>
          <p><strong>Release Date:</strong> ${film.release_date}</p>
        `;
        filmList.appendChild(listItem);
      });
    } catch (error) {
      console.error(error);
      error.classList.remove('hidden');
    } finally {
      loader.classList.add('hidden');
    }
  });