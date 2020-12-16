function pageLoad() {

	let root = document.getElementById("root");
	let myObjects = [

		{
			tag: "h1",
			content: "Papp Szabina"
		},

		{
			tag: "p",
			content: "Frontend developer"
		}

	];

	// console.log(myObjects);

/* 	for (let index = 0; index < myObjects.length; index++) {
		
	} */

	for  (myObject of myObjects){
	
	// console.log(myObjects.tag);
		
		root.insertAdjacentHTML("beforeend", `
			<${myObject.tag}>${myObject.content}</${myObject.tag}>
	`);
};

root.addEventListener("click", function(){
	root.classList.toggle("clicked");
});
		

	


}

window.addEventListener("load", pageLoad);