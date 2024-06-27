const loadButtonElement = document.getElementById("loadButton");
console.log(loadButtonElement);

loadButtonElement.addEventListener("click", (event) => {
  fetch("https://api.pexels.com/v1/curated?page=2&per_page=40", {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Doguu2nH5bVr1YOsFZLNrAqEOmlXGvEy3FqzkL5ryeTxIxahnq0glxlN",
    },
  })
    .then((resp) => {
      //   console.log("ok ", resp);
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("errore: ", resp);
      }
    })
    .then((lifestyle) => {
      lifestyle.forEach((element) => {
        console.log(lifestyle.img);
      });
    })
    .catch((err) => {
      console.log("errore: ", err);
    });
});
