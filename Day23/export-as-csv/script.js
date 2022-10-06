const exportBtn = document.querySelector(".export-btn");

const tableData = [
  ["ID", "Name", "Gender"],
  ["1", "Danny", "Male"],
  ["2", "Mike", "Male"],
  ["3", "Cindy", "Female"],
];

const exportToCsv = () => {
  let csvString = "";
  tableData.forEach((rowItem) => {
    rowItem.forEach((colItem) => {
      csvString += colItem + ",";
    });
    csvString += "\r\n";
  });

  csvString = "data:application/csv," + encodeURIComponent(csvString);
  let anchor = document.createElement("a");
  anchor.setAttribute("href", csvString);
  anchor.setAttribute("download", "demo.csv");
  document.body.appendChild(anchor);
  anchor.click();
};

exportBtn.addEventListener("click", () => {
  exportToCsv();
});
