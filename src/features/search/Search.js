import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { artFetch, selectCount } from "./searchSlice";

import Card from "../../components/Card/Card.js";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Search.module.css";

export function Search() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const placeHolder = () => {
    const failedSearch = () => {
      return (
        <Paper
          sx={{
            p: "10px 15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "45%",
            height: "fit-content",
            fontSize: "2vmin",
          }}
        >
          <h1>
            Sorry We Had an Issue with that search, try being less specific or
            checking for spelling errors
          </h1>
        </Paper>
      );
    };

    const placeHolderText = () => {
      return (
        <Paper
          sx={{
            p: "10px 15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "45%",
            height: "fit-content",
            fontSize: "2vmin",
          }}
        >
          <h1>
            Get started by searching the galleries database with either a phrase
            or keyword
          </h1>
        </Paper>
      );
    };

    const checkForFail = count === false ? failedSearch() : placeHolderText();

    return count ? <Card data={count} /> : checkForFail;
  };

  return (
    <div className={styles.searchMain}>
      <div className={styles.inputGroup}>
        <div className={styles.searchBar}>
          <Paper
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search for art by keyword"
              inputProps={{ "aria-label": "Search for art by keyword" }}
              value={search}
              onChange={(e) => handleChange(e)}
            />
            <IconButton
              type="submit"
              onClick={() => dispatch(artFetch(search))}
              sx={{ p: "10px" }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
      </div>
      <div className={styles.searchResults}>{placeHolder()}</div>
    </div>
  );
}

{
  /* <TextField
            fullWidth
            label="What do you want to see?"
            className={styles.searchBox}
            value={search}
            onChange={handleChange}
          /> */
}
