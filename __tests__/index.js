const { testRequiredFiles } = require("./requiredFiles");

const PROJECT_PATH = process.argv[2] || "/project";

function runTests() {
  process.chdir(PROJECT_PATH);

  testRequiredFiles();
}

runTests();
