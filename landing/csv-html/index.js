fetch("fetch-data.csv")
  .then((response) => response.text())
  .then((data) => {
    const rows = data.split("\n");
    const table = rows.map((row) => row.split(","));
    const tableElement = document.getElementById("csv-table");
    table.forEach((row) => {
      const tr = document.createElement("tr");
      row.forEach((cell) => {
        const td = document.createElement("td");
        td.textContent = cell;
        tr.appendChild(td);
      });
      tableElement.appendChild(tr);
    });
  });
