window.onload = function() {
  var searchButtonEs = document.getElementById("search-button-es");
  var searchButtonEn = document.getElementById("search-button-en");
  searchButtonEs.addEventListener("click", performSearchEs);
  searchButtonEn.addEventListener("click", performSearchEn);

};

function performSearchEs() {
  var searchInput = document.getElementById("search-input").value;
  var searchResults = document.getElementById("search-results");
  searchResults.innerHTML = ""; // Limpiar los resultados anteriores

  // Dividir el texto de búsqueda en palabras separadas
  var searchTerms = searchInput.split(" ");

  // Construir la cadena de consulta con los términos de búsqueda

  var searchURLs = [
    "https://elcomercio.pe/buscar/" + encodeURIComponent(searchInput) + "/todas/descendiente/?query=" + encodeURIComponent(searchInput),
    "http://elperuano.pe/portal/buscador?q=" + encodeURIComponent(searchInput),
    "https://larepublica.pe/buscador?buscando=" + encodeURIComponent(searchInput),
    "https://andina.pe/agencia/busqueda.aspx?search=" + encodeURIComponent(searchInput),
    "https://cnnespanol.cnn.com/?s=" + encodeURIComponent(searchInput),
    'https://ariadna.elmundo.es/buscador/archivo.html?q=' + encodeURIComponent(searchInput),
    "https://elpais.com/buscador/?q=" + encodeURIComponent(searchInput),
    "https://www.abc.es/hemeroteca/" + encodeURIComponent(searchInput),
  ];

  for (var i = 0; i < searchURLs.length; i++) {
    var iframe = document.createElement("iframe");
    iframe.src = searchURLs[i];
    iframe.style.width = "calc(50% - 10px)";
    iframe.style.height = "400px";
    iframe.style.margin = "50px";
    iframe.style.display = "block";
    iframe.style.marginLeft = "auto";
    iframe.style.marginRight = "auto";
    iframe.style.float = "center"

    searchResults.appendChild(iframe);
  }
  searchResults.appendChild(container);
}

function performSearchEn() {
  var searchInput = document.getElementById("search-input").value;
  var searchResults = document.getElementById("search-results");
  searchResults.innerHTML = ""; // Limpiar los resultados anteriores

  // Dividir el texto de búsqueda en palabras separadas
  var searchTerms = searchInput.split(" ");

  // Construir la cadena de consulta con los términos de búsqueda

  var searchURLs = [
    "https://www.wsj.com/search?query=" + encodeURIComponent(searchInput) +"&mod=searchresults_viewallresults",
    "https://www.economist.com/search?q=" + encodeURIComponent(searchInput),
    "https://www.theatlantic.com/search/?q="+ encodeURIComponent(searchInput) +"&search-sort=newestToOldest",
    "https://apnews.com/search?q="+ encodeURIComponent(searchInput),

  ]

  for (var i = 0; i < searchURLs.length; i++) {
    var iframe = document.createElement("iframe");
    iframe.src = searchURLs[i];
    iframe.style.width = "calc(50% - 10px)";
    iframe.style.height = "400px";
    iframe.style.margin = "50px";
    iframe.style.display = "block";
    iframe.style.marginLeft = "auto";
    iframe.style.marginRight = "auto";
    iframe.style.float = "center"

    searchResults.appendChild(iframe);
  }
  searchResults.appendChild(container);
}
