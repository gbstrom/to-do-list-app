function newItem(){

//1. original Javascript version - Adding a new item to the list of items:

/*
   let li = document.createElement("li");
   let inputValue = document.getElementById("input").value;
   let text = document.createTextNode(inputValue);
   li.appendChild(text);

   if (inputValue === '') {
     alert("You must write something!");
   } else {
     let list = document.querySelector('#list');
     list.appendChild(li);
   }
*/

//1. my jQuery version:

   let inputValue = $('#input').val();
   let li = $('<li></li>');
   li.append(inputValue);
   if (inputValue === ''){
     alert('You must write something!')
   } else {
     $('#list').append(li);
   }

 //2. original Javascript version - Crossing out an item from the list of items:

/*
   function crossOut() {
 		li.classList.toggle("strike");
 	}

 	li.addEventListener("dblclick",crossOut);
*/

//2. my jQuery version:

  li.on("dblclick", function() {
    li.toggleClass("strike");
  });


 //3(i). Original Javascript version - Adding the delete button "X":

/*
  let crossOutButton = document.createElement("button");
 	crossOutButton.appendChild(document.createTextNode("X"));
 	li.appendChild(crossOutButton);

 	crossOutButton.addEventListener("click", deleteListItem);


 //3(ii). Original Javascript version - Adding CLASS DELETE (DISPLAY: NONE) from the css:

  function deleteListItem(){
  	li.classList.add("delete")
  }
*/

//3(i) & (ii). my jQuery version:

  let crossOutButton = $('<button></button');
  li.append(crossOutButton);
  crossOutButton.append(document.createTextNode('X'));

  crossOutButton.on("click", function(){
  	crossOutButton.parent().addClass("delete")
  })

 // 4. Reordering the items:
   $('#list').sortable();

}
