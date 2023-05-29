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
