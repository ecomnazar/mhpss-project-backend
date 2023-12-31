const sharp = require("sharp");

exports.addText = (name) => {
  const width = 900;
  const height = 500;

  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDay();
  const currentDate = `${year}-${month}-${day}`

  const svgText = `
  <svg width="${width}" height="${height}">
    <style>
      .title { fill: #5D604B; font-size: 35px}
    </style>
    <text x="45%" y="40%" text-anchor="middle" class="title">${name}</text>
  </svg>`;

  const dateText = `<svg width="${width}" height="${height}">
  <style>
    .title { fill: #5D604B; font-size: 35px}
  </style>
  <text x="45%" y="40%" text-anchor="middle" class="title">${currentDate}</text>
</svg>`

  const svgBuffer = Buffer.from(svgText);
  const dateBuffer = Buffer.from(dateText);

    const date = new Date().getTime();
  sharp("./images/certificate.jpg")
    .composite([
      { input: svgBuffer, left: 50, top: 105 },
      { input: dateBuffer, left: -155, top: 325 }
    ])
    // .composite([{ input: dateBuffer, left: 20, top: 450 }])
    .toFile(__dirname + `/processed_images/${date}.jpg`);
};
