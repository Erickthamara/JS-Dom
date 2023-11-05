export const api_Token_url = "https://accounts.spotify.com/api/token";
export const client_id = "";
export const secret_key = "";

export async function getApiToken() {
  const data = await fetch(api_Token_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(client_id + ":" + secret_key),
    },
    body: "grant_type=client_credentials",
  });
  const info = await data.json();
  //console.log(info.access_token);
  return info.access_token;
}
