var Repos = {
	githubRepositories: function(response) {
		$("#repositories").append("<h2>Códigos/Idéias/Projetos/Repositórios</h2>");
		for (var index in response.data) {
			var repository = response.data[index];
			$("#repositories").append(
			    "<h3>" + repository.name + " (" + repository.language + ") - <a href='" + repository.html_url + "'>" + repository.html_url + "</a></h3><p>" + repository.description + "</p>"
			);
		}
	},

	populate: function(user) {
        $.getJSON("https://api.github.com/users/" + user + "/repos?callback=?", this.githubRepositories);
	}
}

var Gists = {
	githubGists: function(response) {
		$("#gists").append("<h2>Dicas/Exemplos/Testes/Tutoriais</h2>");
		for (var index in response.data) {
			var gist = response.data[index];
			$("#gists").append(
			    "<h3>" + gist.description + " - <a href='" + gist.html_url + "'>" + gist.html_url + "</a></h3>"
			);
		}
	},

	populate: function(user) {
        $.getJSON("https://api.github.com/users/" + user + "/gists?callback=?", this.githubGists);
	}
}
