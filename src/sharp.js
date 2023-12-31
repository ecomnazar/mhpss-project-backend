const sharp = require("sharp");

exports.addText = (name) => {
  const width = 900;
  const height = 500;

  const svgText = `
  <svg width="${width}" height="${height}">
    <style>
      .title { fill: #5D604B; font-size: 35px}
    </style>
    <text x="45%" y="40%" text-anchor="middle" class="title">${name}</text>
  </svg>`;

  const svgBuffer = Buffer.from(svgText);
    const date = new Date().getTime();
  sharp("./images/certificate.jpg")
    .composite([{ input: svgBuffer, left: 50, top: 105 }])
    .toFile(__dirname + `/processed_images/${date}.jpg`);
};
