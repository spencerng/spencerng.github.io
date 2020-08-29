function callGitHubAPI(){
	var request = new XMLHttpRequest();
	
	request.onreadystatechange = function(){
		var response = JSON.parse(request.responseText);
	 	var type = response.assets[0].content_type
	 	window.location.href = response.assets[0].browser_download_url;
	 	setTimeout(function(){window.close()}, 500);

	}
	request.open('get', 'https://api.github.com/repos/RaiderRobotix/scouting-app/releases/latest', true)
	request.send()
}

callGitHubAPI();