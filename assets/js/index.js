
let active = false;
//Hide textinput boolean

const hideButton = document.getElementById("hideButton");
const unorderedList = document.getElementById("unorderedList");
const input = document.getElementById("input");
const li = document.getElementsByTagName("li");

input.style.visibility = "hidden";
//Text input visibility is set to "hidden" by default


//Adds new items to the ToDoList
input.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        var value = document.getElementById("input").value;

        var li = document.createElement("li");

        var deleteButton = document.createElement("button")
        deleteButton.className = "buttonDelete";
        
        li.appendChild(document.createTextNode(value));
        li.appendChild(deleteButton);
        //Add new li element and delete element
        //Append the delete button to the new li element

        deleteButton.addEventListener("click", function(){
            /* this.parentNode.remove(); */
            li.remove();
        })
        //Delete item 

        li.addEventListener("click", function(){
            li.classList.toggle("done");
        })
        //Toggle line-through

        if(value.trim() == ""){
            return;
        } else {
            unorderedList.appendChild(li);
            input.value = "";
        }
        //If value in input is none return;
    }
    
});

//Hides Text input
hideButton.addEventListener("click", function(){
    active = !active;

    if(active){
        hideButton.classList.remove("active");
        console.log("pois päältä");
        input.style.visibility = "visible";

    } else {
        hideButton.classList.add("active");
        console.log("päällä");
        input.style.visibility = "hidden";
    }
})













    


