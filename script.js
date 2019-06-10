function searchSubmit() {
    $('form').submit(event => {
      event.preventDefault();
      findUserInfo();
    });
  }
  
  function findUserInfo() {
    let userName = $('.searchGit').val();
    console.log(userName);
    fetch(`https://api.github.com/users/${userName}/repos`)
      .then(response => response.json())
      .then(responseJson => displayUserRepos(responseJson));
  }
  
  function displayUserRepos(responseJson) {
    console.log(responseJson.length);
    console.log(responseJson);
    $('.results').empty();
    for (let i = 0; i < responseJson.length; i++) {
      $('.results').append(
        `<p>${responseJson[i].name}<p>
        <a href="${responseJson[i].html_url}">Repo Link</a>`
      )
    }
  
  }
  
  $(searchSubmit);