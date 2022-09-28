var items = ["groceries", "homework", "room cleaning"];

function addItem(newItem){
	items.push(newItem);
	 displayInfo();
}

function displayInfo(){
	$("#list").empty();
	for (var i = items.length - 1; i >= 0; i--) {
		items[i]
		 $("#list").append('<li>'+items[i]+' <button onclick="deleteItem('+i+')">delete</button></li>');
	}
}
displayInfo();


function deleteItem(id){
	items.splice(id,1);
	displayInfo();
}