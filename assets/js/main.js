
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

//--------------------------------------------------
fetch("/assets/pages/search.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("searchbar").innerHTML = data;
  });
//--------------------------------------------------
fetch("/assets/pages/search1.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("searchbar1").innerHTML = data;
  });
//--------------------------------------------------



// Pages