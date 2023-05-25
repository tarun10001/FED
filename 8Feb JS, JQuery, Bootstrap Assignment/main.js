const myModalE1 = document.getElementById("exampleModal");

myModalE1.addEventListener("hidden.bs.modal", (op) => {
  document.getElementById("ifr").setAttribute("src", "");
});

const century = [
  {
    video_url: "https://www.youtube.com/embed/DHjqpvDnNGE",
    image:
      "https://www.centurycommunities.com/contentassets/a67ea5125414443db9f52cc1137fae4d/main-home-system-shutoff.jpg",
  },
  {
    video_url: "https://www.youtube.com/embed/OEV8gMkCHXQ",
    image:
      "https://www.centurycommunities.com/contentassets/cefa80035ea94b978c9dbcc209f77bf4/cooktop_cleaning-and-maintenance.jpg",
  },
  {
    video_url: "https://www.youtube.com/embed/Tn6-PIqc4UM",
    image:
      "https://www.centurycommunities.com/contentassets/6d5624131141491b9eb11d279b2e41e4/pilot-light.jpg",
  },
  {
    video_url: "https://www.youtube.com/embed/OEV8gMkCHXQ",
    image:
      "https://www.centurycommunities.com/contentassets/c7dc22a391b244b596e12e5e4d0b7e60/gas-fireplace-cleaning-and-maintenance.jpg",
  },
  {
    video_url: "https://www.youtube.com/embed/OEV8gMkCHXQ",
    image:
      "https://www.centurycommunities.com/contentassets/be54b82c44c84752acc87f0b8b11fb10/pull-out-faucet-maintenance.jpg",
  },
  {
    video_url: "https://www.youtube.com/embed/OEV8gMkCHXQ",
    image:
      "https://www.centurycommunities.com/contentassets/d5b505fff2bd4a678266be114553fcba/gutter-and-downspout-maintenance.jpg",
  },
  {
    video_url: "https://www.youtube.com/embed/OEV8gMkCHXQ",
    image:
      "https://www.centurycommunities.com/contentassets/518c6e6421ee41b0b36c2e3f74b434e9/p-trap-unclogging-and-maintenance.jpg",
  },
  {
    video_url: "https://www.youtube.com/embed/OEV8gMkCHXQ",
    image:
      "https://www.centurycommunities.com/contentassets/9237b1b80fec47579df0f6b422525e68/refrigerator-coil-cleaning.jpg",
  },
  {
    video_url: "https://www.youtube.com/embed/OEV8gMkCHXQ",
    image:
      "https://www.centurycommunities.com/contentassets/40ceaa33102043e8b18323801a04327d/exterior-weather-caulking.jpg",
  },
];

const centuryComm = century
  .map(function (item) {
    return `
    <div class="container__card" data-video=${item.video_url} data-bs-toggle="modal" data-bs-target="#exampleModal">
    <img src=${item.image}
    alt="" />
    </div>   
    `;
  })
  .join("");

document.querySelector(".container").innerHTML = centuryComm;

myModalE1.addEventListener("show.bs.modal", (event) => {
  const target = event.relatedTarget;
  const url = target.getAttribute("data-video");
  const iframeUrl =
    url + "?autoplay=1&loop=0&autopause=0&cc_load_policy=1&cc_lang_pref=en";
  document.getElementById("ifr").setAttribute("src", iframeUrl);
});

//  ---**--- Script for DROPDOWN BUTTON ---**---

const stateData = [
  { stateName: "Alabama" },
  { stateName: "Alaska" },
  { stateName: "Arizona" },
  { stateName: "California" },
  { stateName: "Los Angeles" },
  { stateName: "New York" },
];

const cityListContainer = document.querySelector(".cityList-container");
const cityList = document.querySelector(".cityList");
const narrowBtn = document.querySelector(".narrow__btn");
const resetBtn = document.querySelector(".narrow__narrow-contain__narrow-reset");
narrowBtn.addEventListener("click", () => {
  cityListContainer.classList.add("show_list");
  cityListContainer.classList.remove("hide");
});
let stateLists = "";

stateData.map((item) => {
  stateLists += `
        <button class="stateList_btn">${item.stateName}</button>
        `;
});
cityList.innerHTML = stateLists;
const stateList_btn = cityListContainer.querySelectorAll(".stateList_btn");

stateList_btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    narrowBtn.textContent = e.target.textContent;
    cityListContainer.classList.add("hide");
    cityListContainer.classList.remove("show_list");
    resetBtn.classList.add('show_list');
  });
});

resetBtn.addEventListener("click", () => {
    narrowBtn.textContent = "narrow";
    resetBtn.classList.remove('show_list');
})