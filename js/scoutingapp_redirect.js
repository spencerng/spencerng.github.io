function callGitHubAPI(){
	var request = new XMLHttpRequest();
	
	request.onreadystatechange = function(){
		var response = JSON.parse(request.responseText);
	 	
	 	window.location.href = response.assets[0].browser_download_url;
	 	setTimeout(function(){window.close()}, 200);

	}
	request.open('get', 'https://api.github.com/repos/RaiderRobotix/scouting-app/releases/latest', true)
	request.send()
}

callGitHubAPI();