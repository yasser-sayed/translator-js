document.querySelector(".btn").addEventListener("click", () => {
  let frstInp = document.querySelector(".firInp").value;
  let frstSel = document.querySelector(".sel1");
  let secSel = document.querySelector(".sel2");

  fetch(`https://api.mymemory.translated.net/get?q=${frstInp}&langpair=${
    frstSel[frstSel.selectedIndex].value
  }|${secSel[secSel.selectedIndex].value}
  `)
    .then((res) => res.json())
    .then((data) => {
      let SecInp = document.querySelector(".secInp");
      if (
        data.responseDetails ==
        "NO QUERY SPECIFIED. EXAMPLE REQUEST: GET?Q=HELLO&LANGPAIR=EN|IT"
      ) {
        SecInp.value = "PLEASE ENTER TEXT TO TRANSELATE IT";
      } else {
        SecInp.value = data.responseData.translatedText;
      }
    });
});
