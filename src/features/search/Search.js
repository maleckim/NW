import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { artFetch, selectCount } from "./searchSlice";
import Button from "@mui/material/Button";
import Card from "../../components/Card/Card.js";

import TextField from "@mui/material/TextField";
import styles from "./Search.module.css";

export function Search() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const handleChange = (event) => {
    setSearch(event.target.value);
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
      <div className={styles.searchResults}>
        <Card data={count} />
      </div>
    </div>
  );
}
