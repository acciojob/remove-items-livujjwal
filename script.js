const selectElement = document.getElementById("colorSelect");
const btnElement = document.getElementsByTagName("input")[0];
const optionArray = document.getElementsByTagName("option");
btnElement.addEventListner("click", () => {
	const removeItem = optionArray.value;
	console.log(optionArray);
	console.log(removeItem);
});
