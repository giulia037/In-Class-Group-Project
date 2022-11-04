fetch(https://api.github.com/emojis)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
