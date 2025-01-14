fetch('./countries.json') // Henter ut data far json-fil
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to load JSON file: " + response.statusText);
    }
    return response.json(); // Parse JSON
  })
  .then(data => {
    console.log(data); 

    // Undersøk "Append() method" og "innerHTML method". Velg hvilken metode du selv ønsker for å hente ut dataen til HTML
    // Bruk gjerne chatGPT som hjelpemiddel


    //Ex: Viser 'countries' i console
    data.countries.forEach(country => {
      console.log(`Country: ${country.name}, Capital: ${country.capital}`);
    });
  })
  .catch(error => {
    console.error("Error loading JSON file:", error);
  });
