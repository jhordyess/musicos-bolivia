import Papa from "papaparse";
export default async function (setData) {
  try {
    const request = await fetch(
      "https://raw.githubusercontent.com/leanguardia/bolivian-music/master/data/artists.csv"
    );
    const text = await request.text();
    let data = Papa.parse(text).data;
    data.shift();
    data = data.filter((row) => row[0]);
    data = data.map((row) =>
      row.map((element) => (element === "" ? "-" : element))
    );
    setData(data);
  } catch (error) {
    console.error(error);
  }
}
