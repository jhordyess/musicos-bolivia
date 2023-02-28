import React from "react";
import MUIDataTable from "mui-datatables";
import fetchData from "@utils/fetchData";
import { spanish } from "./textLabels";
import columns from "./columns";

export default function () {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetchData(setData);
  }, []);

  const options = {
    filterType: "checkbox",
    responsive: "standard",
    textLabels: spanish,
    selectableRows: "none",
    sortOrder: {
      name: "followers",
      direction: "desc",
    },
  };

  return (
    <div className="container">
      <h2>Músicos de bolivia</h2>
      <p>
        Información consultada gracias a&nbsp;
        <a
          href="https://github.com/leanguardia"
          rel="noreferrer"
          target="_blank"
        >
          @leanguardia
        </a>
        &nbsp; y su repositorio:&nbsp;
        <a
          href="https://github.com/leanguardia/bolivian-music"
          rel="noreferrer"
          target="_blank"
          id="repo_url"
        >
          bolivian-music
          <img
            src="https://frinkiac.com/meme/S12E07/141767.jpg?b64lines=U2kgbm8gYWN0dWFsaXphIGVsIHJlcG8KbWUgbXVlcm8="
            alt="meme"
          />
        </a>
        .
      </p>
      <div>
        <MUIDataTable
          title="Música de Bolivia"
          data={data}
          columns={columns}
          options={options}
        />
      </div>
      <footer>
        Hecho con 💪 por&nbsp;
        <a href="https://jhordyess.com" target="_blank" rel="noreferrer">
          Jhordyess
        </a>
      </footer>
    </div>
  );
}
