var start = function(){

    var form = document.getElementById("movieForm");
    var todoInput = document.getElementById("todoInput");
    var list = document.getElementById("movieList");
    var movieNothing = document.getElementById("movieNothing");
    var deleteButtons = document.getElementsByClassName("delete");
    var completedButtons = document.getElementsByClassName("complete");
    var undoButton = document.getElementsByClassName("undo");

    console.log(completedButtons);
    function searchKeyPress(e){
        // look for window.event in case event isn't passed in
        if (typeof e == 'undefined' && window.event) { e = window.event; }
        if (e.keyCode == 13){
            form.submit();
        }
    }



    // Catch the event when the user clicks "Save".
    form.addEventListener("submit", function (event) {

        // Prevent the data from being sent to the server.
        // Also prevents the page from being refreshed.
        event.preventDefault();
        movieNothing.remove("");

        // this.title and this.good are available because of the
        // name="title" and name="good" attributes in index.html
        var title = this.title.value;

        // Make a new list item with document.createElement()
        var li = document.createElement("li");
        li.className += "task";


        // Set the contents of the li to be the movie title. Using
        // createTextNode() is the best solution we have.
        //
        var text = document.createElement("p");
        text.innerText = title;

        var deleteButtonText = "Delete";

        var deleteButton = document.createElement("span");

        deleteButton.className += "button delete";

        deleteButton.addEventListener("click", function(){
            deleteAction(this);

            console.log("delete the completed");


        });



        deleteButton.innerHTML = "<i class='fa fa-times'></i>";

        var completeButtonText = "complete";
        var completeButton = document.createElement("span");
        completeButton.className += " button complete";

        completeButton.innerHTML = "<i class='fa fa-check'></i>";

        // var removeButton = document.createElement("span");
        // removeButton.className += "remove";
        li.appendChild(text);
        li.appendChild(deleteButton);
        li.appendChild(completeButton);


        //li.appendChild(removeButton);


        // Merely creating the element does not add it to the page.
        // Make it visible on the page by using appendChild().
        list.appendChild(li);

        // //Add event listener
        // for (var i=0; i < deleteButtons.length; i++) {
        //     addELToRemoveButton(deleteButtons[i]);
        // }

        // //Add event listener for confirm buttons
        // for (var j=0; j < completedButtons.length; j++) {
        //     addELToCompletedButton(completedButtons[j]);

        // }

        // Clear out the previous title from the text field
        this.title.value = "";

        console.log("looped");

        // event listeners
        // completeButton.addEventListener("click", function(){

        //     this.parentNode.className += " completed";
        //     this.innerHTML = "<i class='fa fa-undo'></i>";
        //     this.className = "undo";
        //     console.log("init the completed");
        //     undoAction(this);

        // });
        completeAction(completeButton);


    });
};
var undoAction = function(a){
    console.log("undo button");
    a.addEventListener("click",function(){

        a.parentNode.className = "task";
        a.innerHTML = "<i class='fa fa-check'></i>";
        a.className = "button complete";
        console.log("doing undo");
        completeAction(a);
    });
};
var completeAction = function(a){
    console.log("complete button");

    a.addEventListener("click",function(){

        a.parentNode.className = "task completed";
        a.innerHTML = "<i class='fa fa-undo'></i>";
        a.className = "button undo";
        undoAction(a);

    });
};
var deleteAction = function (a){
    swal({
        title: "Are you sure?",
        text: "The task will be gone forever!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes, delete it!'
    },
    function(){
        a.parentNode.remove("");
    });
};
