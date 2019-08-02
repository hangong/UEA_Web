function onTextReady(text) {
  console.log(text);
}

function onResponse(response) {
  return response.text();
}

fetch('/hello/UEA')
  .then(onResponse)
  .then(onTextReady);

fetch('/flights/NWI-AMS')
  .then(onResponse)
  .then(onTextReady);
