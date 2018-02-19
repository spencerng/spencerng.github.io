function callGitHubAPI(){
	var request = new XMLHttpRequest();
	
	request.onreadystatechange = function(){
		var response = JSON.parse(request.responseText);
	 	
	 	window.location.href = response.assets[0].browser_download_url;

	}
	request.open('get', 'https://api.github.com/repos/spencerng/scouting-app/releases/latest', true)
	request.send()
}

callGitHubAPI();