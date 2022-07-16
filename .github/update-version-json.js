const fs = require('fs');

if (!process.argv[2]) {
    console.log("::error file=prepare-package.js::a version number is needed");
    return
}

let versionNumber = process.argv[2];

var jsonFile = JSON.parse(fs.readFileSync('package.json'));

jsonFile.version = versionNumber;
jsonFile.url = "https://github.com/VRLabs/Contact-Tracker/releases/download/"+versionNumber +"/Contact_Tracker_"+versionNumber+".zip"

fs.writeFileSync('package.json', JSON.stringify(jsonFile, null, 2));