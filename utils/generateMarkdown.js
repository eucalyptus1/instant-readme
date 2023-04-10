contentsArr = [];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  if (data.description) {
    desc = `# Description
    ## ${data.description}`;
    conDesc = `-Description`;
    contentsArr.push(conDesc);
  } else {
    desc = ``;
    conDesc = "";
  }

  if (data.usage) {
    use = `# Usage
     ## ${data.usage}`;
    contUse = `-Usage`;
    contentsArr.push(contUse);
  } else {
    use = ``;
    contUse = "";
  }

  if (data.contributing) {
    cont = `# How to contribute
    ## This project was built by ${data.contributing}`;
    conTrib = `-Contributing`;
    contentsArr.push(conTrib);
  } else {
    cont = ``;
    conTrib = "";
  }

  if (data.tests) {
    test = `# Tests
     ## ${data.tests}`;
    conTest = `-Testing`;
    contentsArr.push(conTest);
  } else {
    test = ``;
    conTest = "";
  }

  if (data.questions) {
    quest = `# Contact
     ## For any questions about this project, I can be reached through my Github account at https://github.com/${data.questions}`;
    conQuest = `-Contact`;
    contentsArr.push(conQuest);
  } else {
    quest = ``;
    conQuest = "";
  }

  let tableOfContents = `
  ## Contents
  ${contentsArr.map((data) => `${data}`).join("")}`;

  return `# ${data.title}

  ${desc}

  ${tableOfContents}

  ${use}

  ${test}

  ## ${data.license}

  ${cont}

  ${quest}

`;
}

module.exports = generateMarkdown;
