
//Pages
//--------------------------------------------------
fetch("/assets/pages/navbar.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
  });
//--------------------------------------------------
fetch("/assets/pages/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });
//--------------------------------------------------
fetch("/assets/pages/script.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("jsa").innerHTML = data;
  });
//--------------------------------------------------
fetch("/assets/pages/search.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("search").innerHTML = data;
  });
//--------------------------------------------------
// Pages