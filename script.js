var counter =0;

function like() {
    counter = counter + 1;
    document.getElementById("likes").innerHTML = counter;   
}

var username ="مهدی بشری";

function share() {
    var postText = document.getElementById("postText").Value;

    var posts = document.getElementById("posts");
    posts.innerHTML = posts.innerHTML + "<br>";
    posts.innerHTML = posts.innerHTML + username + ": "+ postText;
}
