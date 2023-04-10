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
    contDesc = `* Description`;
  } else {
    data.description = ``;
  }

  if (data.usage) {
    use = `# Usage
     ## ${data.usage}`;
    contUse = `* Usage`;
  } else {
    data.usage = ``;
  }

  if (data.contributing) {
    cont = `# How to contribute
    ## This project was built by ${data.contributing}`;
    conTrib = `* Contributing`;
  } else {
    data.contributing = ``;
  }

  if (data.tests) {
    test = `# Tests
     ## ${data.tests}`;
    conTest = `* Testing`;
  } else {
    data.tests = ``;
  }

  if (data.questions) {
    quest = `# Contact
     ## For any questions about this project, I can be reached through my Github account at https://github.com/${data.questions}`;
    conQuest = `* Contact`;
  } else {
    data.questions = ``;
  }

  let tableOfContents = `
  ${contDesc}
  ${contUse}
  ${conTrib}
  ${conTest}
  ${conQuest}
  `;

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
