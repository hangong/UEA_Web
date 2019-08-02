function onTextReady(text) {
  console.log(text);
}

function onResponse(response) {
  return response.text();
}

fetch('/hello?name=UEA')
  .then(onResponse)
  .then(onTextReady);

fetch('/hello?name=UEA', { method: 'POST'} )
  .then(onResponse)
  .then(onTextReady);
