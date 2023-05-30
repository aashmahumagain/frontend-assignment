export async function Latestrelease() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "37adca14a7mshc30f834107bb1aep1252fcjsnd65c723f49c4",
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
