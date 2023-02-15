import React from "react";
import MUIDataTable from "mui-datatables";
import fetchData from "@utils/fetchData";

const spanish = {
  body: {
    noMatch: "No se obtuvieron resultados",
    toolTip: "Ordenar",
  },
  pagination: {
    next: "Página siguiente",
    previous: "Página previa",
    rowsPerPage: "Filas por página:",
    displayRows: "de",
  },
  toolbar: {
    search: "Buscar",
    downloadCsv: "Exportar CSV",
    print: "Imprimir",
    viewColumns: "Ver Columnas",
    filterTable: "Filtros",
  },
  filter: {
    title: "Filtros",
    reset: "Restablecer",
  },
  viewColumns: {
    title: "Mostrar Columnas",
    titleAria: "Mostrar/Ocultar Columnas de tabla",
  },
};

const columns = [
  {
    name: "artist_id",
    label: "id",
    options: {
      filter: false,
      sort: false,
      searchable: false,
      display: "excluded",
    },
  },
  {
    name: "name",
    label: "Nombre",
    options: {
      filter: false,
    },
  },
  {
    name: "popularity",
    label: "Popularidad",
    options: {
      filter: false,
      searchable: false,
    },
  },
  {
    name: "followers",
    label: "Seguidores",
    options: {
      filter: false,
      searchable: false,
    },
  },
  {
    name: "genres",
    label: "Generos",
    options: {
      filter: false,
      sort: false,
      customBodyRender: (val) => <span>{String(val)}</span>,
    },
  },
  {
    name: "img_url",
    label: "avatar",
    options: {
      filter: false,
      sort: false,
      searchable: false,
      display: "excluded",
      customBodyRender: (val) => <span>{String(val)}</span>,
    },
  },
];
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
        >
          bolivian-music
        </a>
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
