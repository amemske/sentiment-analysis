const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

const writeStream = fs.createWriteStream("post.csv");

request("http://localhost:3000", (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    // console.log(html);
    const heading = $(".pricing-header ");

    const output = heading.text();

    //TODO -- Output a list of items

    console.log(output);

    //write to csv file
    writeStream.write(`${output}`);
  }
});
