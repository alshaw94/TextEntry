$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    submitText();
  });            
});            

function submitText() {
	var text = $("#textinput").val();
	alert(text);
	var key = "xbox";
	storeValue(key,text);
}

function storeValue(key, value) {
	//add some code to store the key-value pair in persistant storage 
	window.localStorage.setItem( key, value );
	var answer = window.localStorage.getItem(key);
	console.log(answer);
}