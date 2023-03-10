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
    data.description = `## ${data.description}`
  } else {
    data.description = ``
  }

  if (data.usage) {
    data.usage = `## ${data.usage}`
  } else {
    data.usage = ``
  }

  if (data.contributing) {
    data.contributing = `## This project was built by ${data.contributing}`
  } else {
    data.contributing = ``
  }

  if (data.tests) {
    data.tests = `## ${data.tests}`
  } else {
    data.tests = ``
  }

  if (data.questions) {
    data.questions = `## For any questions about this project, I can be reached through my Github account at https://github.com/${data.questions}`
  } else {
    data.questions = ``
  }


  return `# ${data.title}

  ${data.description}

  ${data.usage}

  ${data.tests}

  ## ${data.license}

  ${data.contributing}

  ${data.questions}

`;
}

module.exports = generateMarkdown;
