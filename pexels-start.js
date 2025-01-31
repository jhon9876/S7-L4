const loadSecondButtonElement = document.getElementById("loadSecondaryButton");
// console.log(loadSecondButtonElement);
const ricercaImmagini = document.getElementsByTagName("form")[0];
console.log(ricercaImmagini);

ricercaImmagini.addEventListener("submit", (event) => {
  const querySearch = document.getElementById("querySearch");
  const query = querySearch.value;

  fetch(`https://api.pexels.com/v1/search?query=${query}`, {
    headers: {
      "Content-Type": "application/json",
      authorization: "Doguu2nH5bVr1YOsFZLNrAqEOmlXGvEy3FqzkL5ryeTxIxahnq0glxlN",
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
      console.log(lifestyle.photos);
      const selectElement = document.querySelector(".album .container .row");
      console.log(selectElement);
      selectElement.innerHTML = "";
      lifestyle.photos.forEach((element) => {
        console.log(element);
        const colElement = document.createElement("div");
        colElement.classList.add("col-4");

        const divCardElement = document.createElement("div");
        divCardElement.classList.add("card");

        const imgElement = document.createElement("img");
        imgElement.className = "card-img-top";
        imgElement.setAttribute("src", element.src.small);

        const divBodyElement = document.createElement("div");
        divBodyElement.className = "card-body";

        const h5Element = document.createElement("h5");
        h5Element.innerText = element.alt;
        h5Element.className = "card-title";

        const pElement = document.createElement("p");
        pElement.className = "card-text";
        pElement.innerText = "Descirizione";

        const linkElement = document.createElement("a");
        linkElement.classList.add("btn", "btn-primary");
        linkElement.innerText = "Hide";

        const divLinkAndId = document.createElement("div");
        divLinkAndId.classList.add(
          "card-body",
          "d-flex",
          "justify-content-between",
          "align-items-center",
          "w-100"
        );

        const pIdElement = document.createElement("p");
        pIdElement.classList.add("card-text");
        pIdElement.innerText = element.id;

        selectElement.appendChild(colElement);
        colElement.appendChild(divCardElement);
        divCardElement.appendChild(imgElement);
        divCardElement.appendChild(divBodyElement);
        divBodyElement.appendChild(h5Element);
        // divBodyElement.appendChild(pElement);
        // divBodyElement.appendChild(linkElement);
        divBodyElement.appendChild(divLinkAndId);
        divLinkAndId.appendChild(linkElement);
        divLinkAndId.appendChild(pIdElement);
        hideCard(linkElement);
      });
    })
    .catch((err) => {
      console.log("errore: ", err);
    });
});

loadSecondButtonElement.addEventListener("click", (event) => {
  fetch("https://api.pexels.com/v1/search?query=sport", {
    headers: {
      "Content-Type": "application/json",
      authorization: "Doguu2nH5bVr1YOsFZLNrAqEOmlXGvEy3FqzkL5ryeTxIxahnq0glxlN",
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
      console.log(lifestyle.photos);
      const selectElement = document.querySelector(".album .container .row");
      console.log(selectElement);
      selectElement.innerHTML = "";
      lifestyle.photos.forEach((element) => {
        const colElement = document.createElement("div");
        colElement.classList.add("col-4");

        const divCardElement = document.createElement("div");
        divCardElement.classList.add("card");

        const imgElement = document.createElement("img");
        imgElement.className = "card-img-top";
        imgElement.setAttribute("src", element.src.small);

        const divBodyElement = document.createElement("div");
        divBodyElement.className = "card-body";

        const h5Element = document.createElement("h5");
        h5Element.innerText = element.alt;
        h5Element.className = "card-title";

        const pElement = document.createElement("p");
        pElement.className = "card-text";
        pElement.innerText = "Descirizione";

        const linkElement = document.createElement("a");
        linkElement.classList.add("btn", "btn-primary");
        linkElement.innerText = "Hide";

        const divLinkAndId = document.createElement("div");
        divLinkAndId.classList.add(
          "card-body",
          "d-flex",
          "justify-content-between",
          "align-items-center",
          "w-100"
        );

        const pIdElement = document.createElement("p");
        pIdElement.classList.add("card-text");
        pIdElement.innerText = element.id;

        selectElement.appendChild(colElement);
        colElement.appendChild(divCardElement);
        divCardElement.appendChild(imgElement);
        divCardElement.appendChild(divBodyElement);
        divBodyElement.appendChild(h5Element);
        // divBodyElement.appendChild(pElement);
        // divBodyElement.appendChild(linkElement);
        divBodyElement.appendChild(divLinkAndId);
        divLinkAndId.appendChild(linkElement);
        divLinkAndId.appendChild(pIdElement);
        hideCard(linkElement);
      });
    })
    .catch((err) => {
      console.log("errore: ", err);
    });
});

const loadButtonElement = document.getElementById("loadButton");
// console.log(loadButtonElement);

loadButtonElement.addEventListener("click", (event) => {
  fetch("https://api.pexels.com/v1/search?query=music", {
    headers: {
      "Content-Type": "application/json",
      authorization: "Doguu2nH5bVr1YOsFZLNrAqEOmlXGvEy3FqzkL5ryeTxIxahnq0glxlN",
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
      // console.log(lifestyle.photos);
      const selectElement = document.querySelector(".album .container .row");
      // console.log(selectElement);
      selectElement.innerHTML = "";
      lifestyle.photos.forEach((element) => {
        const colElement = document.createElement("div");
        colElement.classList.add("col-4");

        const divCardElement = document.createElement("div");
        divCardElement.classList.add("card");

        const imgElement = document.createElement("img");
        imgElement.className = "card-img-top";
        imgElement.setAttribute("src", element.src.small);

        const divBodyElement = document.createElement("div");
        divBodyElement.className = "card-body";

        const h5Element = document.createElement("h5");
        h5Element.innerText = element.alt;
        h5Element.className = "card-title";

        const pElement = document.createElement("p");
        pElement.className = "card-text";
        pElement.innerText = "Descirizione";

        const linkElement = document.createElement("button");
        linkElement.classList.add("btn", "btn-danger");
        linkElement.innerText = "Hide";

        selectElement.appendChild(colElement);
        colElement.appendChild(divCardElement);
        divCardElement.appendChild(imgElement);
        divCardElement.appendChild(divBodyElement);
        divBodyElement.appendChild(h5Element);
        divBodyElement.appendChild(pElement);
        divBodyElement.appendChild(linkElement);

        hideCard(linkElement);
      });
    })
    .catch((err) => {
      console.log("errore: ", err);
    });
});

const hideCard = (elementButton) => {
  elementButton.addEventListener("click", (event) => {
    elementButton.closest(".col-4").remove();
  });
};
