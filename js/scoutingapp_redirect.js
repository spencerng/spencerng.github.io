function callGitHubAPI(){
	var request = new XMLHttpRequest();
	
	request.onreadystatechange = function(){
		var response = JSON.parse(request.responseText);
	 	
	 	window.location.href = response[0].html_url;

	}
	request.open('get', 'https://api.github.com/repos/spencerng/scouting-app/releases', true)
	request.send()
}

callGitHubAPI();