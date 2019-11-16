import axios from "axios";

export async function gatherLocations(val) {
  const url =
    "http://przyjaznekielce.cktech.eu/api/app/locations/category/" + "basen";

  const data = await axios.get(url).then(({ data }) => {
    return data;
  });

  return data;
}
