//your JS code here. If required.
const bi = document.getElementById("browser-info");

const browserName = navigator.appName;
const browserName1 = navigator.appVersion;
const browserName2 = navigator.userAgent;


bi.innerHTML = `You are using ${browserName} version ${browserName1} `