const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const err = urlParams.get('err');
const app = urlParams.get('app')

const apps = require('apps.json');

if (err) {
  alert('Error: ' + err);
} else if (app) {
  console.log(apps);
  const appUrl = JSON.parse(apps)[app]['url'];
  if (appUrl) {
    location.href = location.href.replace(location.search, '').replace('index.html', '') + 'html.html?url=' + appUrl;
  } else {
    alert('App with App ID "' + app + '" doesn\'t exist!');
  }
}

function html() {
  if (isValidHttpUrl(document.getElementById('url').value)) {
    location.href = location.href.replace(location.search, '').replace('index.html', '') + 'html.html?url=' + document.getElementById('url').value;
  } else {
    location.href = location.href.replace(location.search, '').replace('index.html', '') + 'html.html?user=' + document.getElementById('repo').value.split('/')[0] +'&repo=' + document.getElementById('repo').value.split('/')[1] +'&branch=' + document.getElementById('repo').value.split('/')[2] +'&file=' + document.getElementById('repo').value.split('/')[3];
  }
}

function isValidHttpUrl(string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;  
  }
  return url.protocol === "http:" || url.protocol === "https:";
}