const path = require("path");
const fs = require("fs");
const os = require("os");
const EventEmitter = require("events");

// ===================== 1 =====================
function logFileInfo() {
  return {
    File: __filename,
    Dir: __dirname,
  };
}

console.log("1:", logFileInfo());

// ===================== 2 =====================
function getFileName(filePath) {
  return path.basename(filePath);
}

console.log("2:", getFileName("/user/files/report.pdf"));
// Output: report.pdf

// ===================== 3 =====================
function buildPath(obj) {
  return path.join(obj.dir, obj.name + obj.ext);
}

console.log("3:", buildPath({ dir: "/folder", name: "app", ext: ".js" }));
// Output: /folder/app.js

// ===================== 4 =====================
function getExtension(filePath) {
  return path.extname(filePath);
}

console.log("4:", getExtension("/docs/readme.md"));
// Output: .md

// ===================== 5 =====================
function parsePath(filePath) {
  return {
    Name: path.parse(filePath).name,
    Ext: path.extname(filePath),
  };
}

console.log("5:", parsePath("/home/app/main.js"));
// Output: { Name: 'main', Ext: '.js' }

// ===================== 6 =====================
function isAbsolute(filePath) {
  return path.isAbsolute(filePath);
}

console.log("6:", isAbsolute("/home/user/file.txt"));
// Output: true

// ===================== 7 =====================
function joinSegments(...segments) {
  return path.join(...segments);
}

console.log("7:", joinSegments("src", "components", "App.js"));
// Output: src/components/App.js

// ===================== 8 =====================
function resolvePath(filePath) {
  return path.resolve(filePath);
}

console.log("8:", resolvePath("./index.js"));
// Output depends on your system

// ===================== 9 =====================
function joinTwo(p1, p2) {
  return path.join(p1, p2);
}

console.log("9:", joinTwo("/folder1", "folder2/file.txt"));
// Output: /folder1/folder2/file.txt

// ===================== 10 =====================
async function deleteFile(filePath) {
  try {
    await fs.promises.unlink(filePath);
    console.log(`The ${path.basename(filePath)} is deleted.`);
  } catch (err) {
    console.log("File not found (simulation safe run)");
  }
}

// Example (commented to avoid crash):
// deleteFile("/path/to/file.txt");

// ===================== 11 =====================
function createFolder(folderPath) {
  try {
    fs.mkdirSync(folderPath, { recursive: true });
    return "Success";
  } catch (err) {
    return err.message;
  }
}

console.log("11:", createFolder("./testFolder"));

// ===================== 12 =====================
const emitter = new EventEmitter();

emitter.on("start", () => {
  console.log("Welcome event triggered!");
});

emitter.emit("start");

// ===================== 13 =====================
emitter.on("login", (username) => {
  console.log(`User logged in: ${username}`);
});

emitter.emit("login", "Ahmed");

// ===================== 14 =====================
function readFileSyncExample(filePath) {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    console.log("14:", `the file content => “${data}”`);
  } catch (err) {
    console.log("14: File not found (create notes.txt to test)");
  }
}

// Example:
// readFileSyncExample("./notes.txt");

// ===================== 15 =====================
async function writeAsync(filePath, content) {
  await fs.promises.writeFile(filePath, content);
  console.log("15: File written");
}

// Example:
// writeAsync("./async.txt", "Async save");

// ===================== 16 =====================
function checkExists(dirPath) {
  return fs.existsSync(dirPath);
}

console.log("16:", checkExists("./notes.txt"));

// ===================== 17 =====================
function getOSInfo() {
  return {
    Platform: os.platform(),
    Arch: os.arch(),
  };
}

console.log("17:", getOSInfo());