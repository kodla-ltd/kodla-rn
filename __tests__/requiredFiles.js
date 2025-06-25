const fs = require("fs");

const DOTFILES = [
  ".eslintignore",
  ".eslintrc",
  ".gitignore",
  ".prettierrc",
  ".watchmanconfig",
  ".bundle",
  ".husky",
];

const SUBMODULES = [];

function testRequiredFiles() {
  const workingDir = process.cwd();
  const allTestProjectFiles = fs.readdirSync(workingDir);

  const filterMissingFiles = (dotFileName) =>
    !allTestProjectFiles.find((filePath) => {
      if (filePath.endsWith(dotFileName)) {
        console.log(filePath);
        return true;
      }

      return false;
    });

  const missingDotfiles = DOTFILES.filter(filterMissingFiles);
  const missingSubmodules = SUBMODULES.filter(filterMissingFiles);

  if (missingDotfiles.length || missingSubmodules.length) {
    let errorMessage =
      "Not all required files are in place after initialisation!\n";
    if (missingDotfiles.length) {
      errorMessage += "Missing dotfiles:\n";
      missingDotfiles.forEach((filePath) => {
        errorMessage += filePath.replace(workingDir, "") + "\n";
      });
    }
    if (missingSubmodules.length) {
      errorMessage += "Missing submodules:\n";
      missingSubmodules.forEach((filePath) => {
        errorMessage += filePath.replace(workingDir, "") + "\n";
      });
    }
    throw new Error(errorMessage);
  }
}

module.exports = {
  testRequiredFiles,
};
