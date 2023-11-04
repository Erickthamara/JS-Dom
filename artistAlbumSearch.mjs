//This will be a simple script adding onto the spotify API that can show the albums for an artist.
//I require a q==Which is data concerningthe fetch request
//I also require an api token.


import { getApiToken } from "./common.mjs"

const q="remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis"
token=getApiToken();

async function artistAlbums(){
   
    data=await fetch("https://api.spotify.com/v1/me/shows?offset=0&limit=20",{
        method: 'GET',
        headers : {
            'Authorization':  'Bearer ' + token
        }

    })
    albums=await data.json()

    console.log(albums)
}

artistAlbums()