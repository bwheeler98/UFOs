// import the data from data.js
const tableData = data;

// reference the HTML table using d3
var tbody = d3.select("tbody")

// build table function
function buildTable(data) {
    // clear any existing data
    tbody.html("");
    // loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // append a row to the table body
        let row = tbody.append("tr");
        //loop through each field in the dataRow and add
        // each value as a tbale cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

// add filters
function handleClick() {
    // grab datetime value from the filter
    let date = d3.select ("#datetime").property("value");
    let filteredData = tableData;
    //check to see if a date was entered & filter the data using that date
    if (date) {
        //apply 'filter' to table data to only keep 
        //rows where the 'datetime' value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    //rebuild the table using the filtered data
    //NOTE: if no date was entered then the filteredData will
    //just be the original
    buildTable(filteredData);
}
// attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// build the table when the page loads
buildTable(tableData);
