fetch("./assets/pages/navbar.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("asdd").innerHTML = data;
  });

fetch("./footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });