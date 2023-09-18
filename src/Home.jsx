import { useEffect, useState } from 'react'
import MUIDataTable from 'mui-datatables'
import fetchData from '@/utils/fetchData'
import { spanish } from '@/utils/textLabels'
import columns from '@/utils/columns'

export default function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData(setData)
  }, [])

  const options = {
    filterType: 'checkbox',
    responsive: 'standard',
    textLabels: spanish,
    selectableRows: 'none',
    sortOrder: {
      name: 'followers',
      direction: 'desc'
    }
  }

  return (
    <div className="container">
      <h2>Músicos de bolivia</h2>
      <p>
        Información consultada gracias a&nbsp;
        <a href="https://github.com/leanguardia" rel="noreferrer" target="_blank">
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
        <MUIDataTable title="Música de Bolivia" data={data} columns={columns} options={options} />
      </div>
      <footer>
        Hecho con 💪 por&nbsp;
        <a href="https://www.jhordyess.com" target="_blank" rel="noreferrer">
          Jhordyess
        </a>
        <br />
        <a href="https://github.com/jhordyess/musicos-bolivia" target="_blank" rel="noreferrer">
          👉 Ver en GitHub
        </a>
      </footer>
    </div>
  )
}
