fetch("https://api.pexels.com/v1/search?query=lifestyle", {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Doguu2nH5bVr1YOsFZLNrAqEOmlXGvEy3FqzkL5ryeTxIxahnq0glxlN",
  },
})
  .then((resp) => {
    console.log("ok ", resp);
    if (resp.ok) {
      return resp.json();
    } else {
      throw new err("errore: ", resp);
    }
  })
  .then((lifestyle) => {
    console.log(lifestyle);
  })
  .catch((err) => {
    console.log("errore: ", err);
  });
