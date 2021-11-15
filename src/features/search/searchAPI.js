function fetchObjectID(objectID = "") {
  
  const url =
    "https://collectionapi.metmuseum.org/public/collection/v1/objects/" +
    objectID;
  return fetch(url, { method: "GET" }).then((res) => res.json());

  
}

export function fetchResults(amount = "") {
  const url =
    "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&isHighlight=true&q=" +
    amount;
  return (
    fetch(url, { method: "GET" })
      .then((res) => res.json())
      
      .then((resJSON) => fetchObjectID(resJSON.objectIDs[0]))
      .then((single) => ({ data: single }))
  );
}
