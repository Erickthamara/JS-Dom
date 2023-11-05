import { getApiToken } from "./common.mjs";

//Sauti Sol unique address
//https://open.spotify.com/artist/4Rj9lQm9oSiMlirgpsM6eo?si=MXreUfzMRRKQZGsrUSgd1g

//Diamond Platnumz
//https://open.spotify.com/artist/3cAisWS37sGCCtRgWfvrod?si=arSxkGERR02toPhBWjqZwA
const token = await getApiToken();

const artistData = async () => {
  const artist_data = await fetch(
    "https://api.spotify.com/v1/artists/3cAisWS37sGCCtRgWfvrod?si=arSxkGERR02toPhBWjqZwA",
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  const info = await artist_data.json();
  console.log(info.name);
  console.log(info.genres);
};

artistData();
