import { SavedTrack } from "spotify-types";

const apiToken = 'BQB5ctmqjfEtlbGI53rQfAAOeMwWjG3aY9iUMMk-NQDkTxlFXAcJHTPCgfsVJn1rWqiBj_3P59rrRC7ySXRz-iGdXeX_JzvyMxqJI2bd0wakOlRbuDEUqa4LAzv6fDlXIO66jsdEsYPksXZrn1kwaVzdHnd6pQrE3kH0mhDXl-v2LlYk0nn9UAowkCPqcJDiDSGE3tGA';

export const fetchTracks = async ():Promise<SavedTrack[]> => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
     throw new Error(`Fetching tracks failed with status ${response.status}`)
   }
  const data = await response.json() as { items: Promise<SavedTrack[]> };

  return data.items;
};