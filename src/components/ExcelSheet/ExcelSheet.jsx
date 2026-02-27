// import React from "react";
// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";

// const generateExcel = (dropdownOptions) => {
//   const ws = XLSX.utils.aoa_to_sheet([["Dropdown"]]); // Create a worksheet
//   const dataValidation = {
//     type: "list",
//     formula1: `"${dropdownOptions.join(",")}"`,
//     sqref: "A2:A2",
//   };
//   ws["A2"] = { v: "", t: "s", dv: dataValidation }; // Create a dropdown cell
//   const wb = XLSX.utils.book_new();
//   XLSX.utils.book_append_sheet(wb, ws, "Sheet1"); // Add the worksheet to the workbook
//   const excelBlob = new Blob(
//     [XLSX.write(wb, { bookType: "xlsx", type: "array" })],
//     {
//       type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//     }
//   );
//   return excelBlob;
// };

// const ExcelSheet = () => {
//   const dropdownOptions = ["Option 1", "Option 2", "Option 3"];

//   const handleDownload = () => {
//     const excelBlob = generateExcel(dropdownOptions);
//     saveAs(excelBlob, "dynamic_dropdown_rjs.xlsx");
//   };

//   return (
//     <div>
//       <button
//         style={{
//           background: "green",
//           color: "white",
//           border: "1px solid black",
//           marginLeft: "400px",
//           height: "50px",
//           width: "90px",
//           marginTop: "50px",
//         }}
//         onClick={handleDownload}
//       >
//         Download Excel
//       </button>
//     </div>
//   );
// };

// export default ExcelSheet;

import React, { useState } from "react";
import ExcelJS from "exceljs";
import { Button, Snackbar } from "@mui/material";

const generateExcel = async (dropdownOptions) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Sheet1");

  // Add data validation for dropdown
  const dataValidation = {
    type: "list",
    formula1: `${dropdownOptions.join(",")}`,
    showDropDown: true,
  };
  worksheet.getCell("A1").dataValidation = {
    type: "list",
    allowBlank: true,
    formulae: ['"Sports,Science,News,Education"'],
  };

  worksheet.getCell("A2").dataValidation = dataValidation;
  // worksheet.getCell("A2").value = "Dropdown";

  const excelBlob = await workbook.xlsx.writeBuffer();
  return excelBlob;
};

const ExcelSheet = () => {
  let [open, setOpen] = useState(false);
  const dropdownOptions = ["Option 1", "Option 2", "Option 3"];

  const handleDownload = async () => {
    const excelBlob = await generateExcel(dropdownOptions);
    const url = URL.createObjectURL(
      new Blob([excelBlob], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      })
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = "dynamic_dropdown_exceljs.xlsx";
    a.click();
    URL.revokeObjectURL(url);
  };
  let greet = () => {
    setOpen(true);
  };
  let handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      {/* Material UI Components */}
      <Button
        disableElevation
        centerRipple
        variant="contained"
        color="success"
        onClick={greet}
        style={{ marginLeft: "200px" }}
      >
        Click
      </Button>

      <Snackbar
        onClose={handleClose}
        open={open}
        message="MUI Snackbar opened."
        autoHideDuration={2000}
      />
      <button
        style={{
          background: "green",
          color: "white",
          border: "1px solid black",
          marginLeft: "400px",
          height: "50px",
          width: "150px",
        }}
        onClick={handleDownload}
      >
        Download Excel with Dropdown
      </button>
      <div>
        <iframe
          width="560"
          height="330"
          style={{ marginTop: "150px", marginLeft: "450px" }}
          src="https://www.youtube.com/embed/1F3hm6MfR1k"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;mu"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default ExcelSheet;
