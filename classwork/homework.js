const renderCountries = (countries) => {
    console.table(countries);
    let htmlTable = `<table class="table table-striped table-bordered">
    <thead>
        <tr><th>#</th>
            <th>Name</th>
            <th>Capital</th>
            <th>Population</th>
            <th>Flag</th>
        </tr>
    </thead>
    <tbody>`;

    let table = countries.reduce((acc, country, item) => {
        return acc + `<tr>
                    <td>${item}</td>
                    <td>${country.name}</td>
                    <td>${country.capital}</td>
                    <td>${country.population}</td>
                    <td><img src="${country.flag}" width="200px"></td>
                </tr>`;
    }, htmlTable);
    table += '</tbody></table>';
    document.body.innerHTML = table;
}

window.onload = () => {
    fetch('https://restcountries.com/v2/all').then(res => res.json()).then((data) => {
        let countries = data.map((country) => {
            return {
                alpha3Code: country.alpha3Code,
                name: country.name,
                capital: country.capital,
                population: country.population,
                flag: country.flag
            }
        })
        renderCountries(countries);
    });
}