const dbRefBanner = firebase.database().ref().child("banner");
const bannerPera = document.querySelector("#bannerPera");
const bannerTypingtext = document.querySelector("#bannerTypingtext");
const listInlineItem = document.querySelector("#listInlineItem");

dbRefBanner.once("value", (value) => {
  const val = value.val();
  bannerPera.innerHTML = val.pera;

  // getVal.listInlineItem.map((item) => {
  //   listInlineItem.innerHTML += `<li class="list-inline-item">${item}</li>`
  // });
  // console.log("listInlineItem:  ", listInlineItem)
});
