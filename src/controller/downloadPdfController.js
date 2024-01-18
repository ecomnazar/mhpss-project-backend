const fs = require("fs");

exports.downloadPdfController = async (req, res) => {
  //   if (!fs.existsSync(filePath)) {
  //     const notFoundError = new CustomError(404, "PDF file not found");
  //     return next(notFoundError);
  //   }
  res.download("./2.pdf", (err) => {
    if (err) {
      const downloadError = new CustomError(
        500,
        "Error: Unable to download the PDF file"
      );
      return next(downloadError);
    }
    console.log("success");
  });
};
