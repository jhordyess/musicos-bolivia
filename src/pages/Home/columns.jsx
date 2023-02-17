import React from "react";
import {
  Stack,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
} from "@mui/material";

const filterValues = [
  "andean",
  "andean flute",
  "bolero",
  "bolivian metal",
  "bolivian rock",
  "chamame",
  "charango",
  "cumbia boliviana",
  "folklore boliviano",
  "hip hop boliviano",
  "huayno",
  "indie boliviano",
  "latin metal",
  "latin pop",
  "latintronica",
  "pop reggaeton",
  "reggae en espanol",
  "salay",
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const ArrayParse = (val) => JSON.parse(String(val.replaceAll(`'`, `"`)));

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
      sortCompare: (order) => (obj1, obj2) =>
        (parseInt(obj1.data, 10) - parseInt(obj2.data, 10)) *
        (order === "asc" ? 1 : -1),
    },
  },
  {
    name: "followers",
    label: "Seguidores",
    options: {
      filter: false,
      searchable: false,
      sortCompare: (order) => (obj1, obj2) =>
        (parseInt(obj1.data, 10) - parseInt(obj2.data, 10)) *
        (order === "asc" ? 1 : -1),
    },
  },
  {
    name: "genres",
    label: "Generos",
    options: {
      filter: true,
      sort: false,
      customBodyRender: (val) => (
        <Stack direction="row" spacing={1}>
          {ArrayParse(val).map((genre, index) => (
            <Chip key={"" + genre + index} label={genre} />
          ))}
        </Stack>
      ),
      filterType: "custom",
      filterOptions: {
        logic: (location, filters, row) => {
          let sw = false;
          const genres = ArrayParse(location);
          genres.forEach((genre) => {
            filters.forEach((filter) => {
              sw = sw || genre === filter;
            });
          });
          if (filters.length) return !sw;
          else return false;
        },
        display: (filterList, onChange, index, column) => (
          <FormControl fullWidth variant="standard" sx={{ m: 1, width: 300 }}>
            <InputLabel>Generos</InputLabel>
            <Select
              fullWidth
              multiple
              variant="standard"
              value={filterList[index]}
              renderValue={(selected) => selected.join(", ")}
              onChange={(event) => {
                filterList[index] = event.target?.value;
                onChange(filterList[index], index, column);
              }}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                    width: 250,
                  },
                },
              }}
            >
              {filterValues.map((item, _index) => (
                <MenuItem key={"gen-f-" + _index} value={item}>
                  <Checkbox
                    color="primary"
                    checked={filterList[index].indexOf(item) > -1}
                  />
                  <ListItemText primary={item} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ),
      },
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
export default columns;
