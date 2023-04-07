
fetch("projects.json")
.then(function(response){
	return response.json();
})
.then(function(projects){
	let placeholder = document.querySelector("#data-output");
	let out = "";
	let i=1;
	for(let project of projects){
		out += `
		<a href="${project.url}">
		<div class="list"><p> ${i} &nbsp${project.name}</p></div>
		</a>
		`;
		i+=1;
	}

	placeholder.innerHTML = out;
});