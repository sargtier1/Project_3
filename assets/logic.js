// dependencies
let portfolioCard =  $("#portfolio-insert")
// object holding the names, links, and pictures for each project. Will make it easier to dynamicall generate all the content on load
let projects = [
    { 
        name: "Pokedex",
        gitHubLink: "https://github.com/Crhodes92/PokedexRepo",
        appLink: "https://crhodes92.github.io/PokedexRepo/",
        picLink: ""
    },
    {
        name: "Pill Tracker",
        gitHubLink: "https://https://github.com/sargtier1/Pill_Trackergithub.com/Crhodes92/PokedexRepo",
        appLink: "https://protected-falls-89358.herokuapp.com/",
        picLink: ""
    }, 
    {
        name: "Train Scheduler",
        gitHubLink: "https://github.com/sargtier1/Train_schedule",
        appLink: "https://sargtier1.github.io/Train_schedule/",
        picLink: ""
    },
    {
        name: "Crystal Game",
        gitHubLink: "https://github.com/sargtier1/Crystal_game",
        appLink: "https://sargtier1.github.io/Crystal_game/",
        picLink: ""
    }
]

// arrayray holding all contact information 
let contacts = []


// Logic to display the portfolio page dynamically
// $(document).ready(function() {
//     // code to load each object to a card for the portfolio page
//     projects.forEach(function () {
//         // create larger card div
//         portfolioCard.append("<div>")
//         portfolioCard.addClass("card")
//         portfolioCard.attr("sytle", "width: 100%")
//         // create image div
//         portfolioCard.append("<img>")
//         portfolioCard.addClass("card-img-top")
//         portfolioCard.attr("src = " + projects.picLink + "'")
//         //create card body
//         portfolioCard.append("<div>")
//         portfolioCard.addClass("card-body")
//         // header
//         portfolioCard.append("<h5>")
//         portfolioCard.addClass("card-title")
//         portfolioCard.text(projects.name)
//         // description
//         portfolioCard.append("<p>")
//         portfolioCard.addClass("card-text")
//         // button
//         portfolioCard.append("<button>")
//         portfolioCard.addClass("btn btn-info")

//     });
// });

// Button clicks 


// Submit button
$("#submit-btn").on("click", function(){
    // takes contact data, and puts into an object which will be pushed into the contacts array
    name: $("#name").val().trim()
    email: $("#email").val().trim()
    comments: $("#comments").val().trim()

});

$(document).ready(function(){

    $("#portfolio-btn").on("click", function (event) {
        console.log("portfolio button acitivated")
        event.preventDefault();
        // console.log($("#landing-zone").clear(""));

        $("#landing-zone").html("");
        $("#portfolio-page").css("visibility", "visible")
        $("#landing-zone").append($("#profile-page"))

      
        $("#about-me-page").css("visibility", "hidden")
        $("#contact-page").css("visibility", "hidden")
    });

    $("#about-btn").on("click", function (event) {
        console.log("about button acitivated")
        event.preventDefault();
        // console.log($("#landing-zone").html(""));

        $("#landing-zone").html("");

        $("#about-me-page").css("visibility", "visible")
        $("#landing-zone").append($("#about-me-page"))

      
        $("#contact-page").css("visibility", "hidden")
        $("#portfolio-page").css("visibility", "hidden")
    });


    $("#contact-btn").on("click", function (event) {
        console.log("contact button acitivated")
        event.preventDefault();
        // console.log($("#landing-zone").html(""));

        $("#landing-zone").html("");
        $("#contact-page").css("visibility", "visible")
        $("#landing-zone").append($("#contact-page"))

        $("#contact-page").css("visibility", "visible")
        $("#portfolio-page").css("visibility", "hidden")
        $("#about-me-page").css("visibility", "hidden")
    });
})









