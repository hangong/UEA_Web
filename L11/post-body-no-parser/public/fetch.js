function onTextReady(text) {
  console.log(text);
}

function onResponse(response) {
  return response.text();
}

const message = {
  name: 'CMP',
  email: 'cmp@uea.ac.uk'
};
const fetchOptions = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(message)
};
fetch('/helloemail', fetchOptions)
  .then(onResponse)
  .then(onTextReady);
