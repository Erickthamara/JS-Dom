import { api_Token_url, client_id, secret_key } from './common.mjs';


async function getApiToken(){
    const data= await fetch(api_Token_url,{
        method:'POST',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(client_id + ':' + secret_key)
        },
        body: 'grant_type=client_credentials'

    });
    const info= await data.json();
    //console.log(info.access_token);
    return info.access_token;
    
}
//getApiToken();

//Sauti Sol unique address
//https://open.spotify.com/artist/4Rj9lQm9oSiMlirgpsM6eo?si=MXreUfzMRRKQZGsrUSgd1g


//Diamond Platnumz
//https://open.spotify.com/artist/3cAisWS37sGCCtRgWfvrod?si=arSxkGERR02toPhBWjqZwA


const artistData=async()=>{
    const token= await getApiToken()
    const artist_data=await fetch("https://api.spotify.com/v1/artists/3cAisWS37sGCCtRgWfvrod?si=arSxkGERR02toPhBWjqZwA",{
        method : 'GET',
        headers : {
            'Authorization':  'Bearer ' + token
        }
        }
    );
    const info=await artist_data.json()
    console.log(info.name);
    console.log(info.genres);
}

artistData()