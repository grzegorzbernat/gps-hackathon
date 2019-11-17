import axios from "axios";

export async function gatherLocations(val, loc) {
  console.log(loc);
  const url = `http://przyjaznekielce.cktech.eu/api/app/locations/category/${loc}`;

  const data = await axios.get(url).then(({ data }) => {
    return data;
  });

  return data;
}

export function voteOnLocation(id, voteObj) {
  console.log(voteObj);
  const url = `http://przyjaznekielce.cktech.eu/api/app/locations/${id}/vote`;
  axios.post(url, voteObj);
}
