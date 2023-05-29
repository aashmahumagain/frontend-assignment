export async function Latestrelease() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "68c523cb3emshd26cc73672f3131p14cfe4jsneb36da7c54d4",
      "X-RapidAPI-Host": "shazam.p.rapidapi.com",
    },
  };

  return fetch(
    "https://shazam.p.rapidapi.com/songs/list-recommendations?key=484129036&locale=en-US",
    options
  )
    .then((response) => response.json())
    .then((response) => response.tracks)
    .catch((err) => console.error(err));
}

export async function DetailsRelease() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "68c523cb3emshd26cc73672f3131p14cfe4jsneb36da7c54d4",
      "X-RapidAPI-Host": "spotify117.p.rapidapi.com",
    },
  };

  fetch(
    "https://spotify117.p.rapidapi.com/spotify_playlist/?url=https%3A%2F%2Fopen.spotify.com%2Fplaylist%2F3nS8d7ekVjFLM4jVyqbDGY",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response.track_details))
    .catch((err) => console.error(err));
}
