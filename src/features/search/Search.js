import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { artFetch, selectCount } from "./searchSlice";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styles from "./Search.module.css";

export function Search() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const Item = () => {
    const { primaryImage, artistDisplayName, title, creditLine } = count;

    return (
      <div className={styles.mainDisplay}>
        <h1>
          {title} {artistDisplayName ? `by ${artistDisplayName}` : ""}
        </h1>
        <img height="300px" src={primaryImage} />
        <h4>{creditLine}</h4>
      </div>
    );
  };

  return (
    <div>
      <div className={styles.inputGroup}>
        <div className={styles.searchBar}>
          <TextField
            fullWidth
            label="What do you want to see?"
            id="fullWidth"
            value={search}
            onChange={handleChange}
          />
        </div>
        <div className={styles.searchButton}>
          <Button onClick={() => dispatch(artFetch(search))} variant="outlined">
            Search
          </Button>
        </div>
      </div>
      <div>
        <Item />
      </div>
    </div>
  );
}
