const dropdowns = document.querySelectorAll(".dropdown-btn");

dropdowns.forEach(function(button){

    button.addEventListener("click", function(event){

        event.preventDefault();

        const menu = this.nextElementSibling;

        if(menu.style.display === "block"){

            menu.style.display = "none";

            this.innerHTML = this.innerHTML.replace("▲","▼");

        }else{

            menu.style.display = "block";

            this.innerHTML = this.innerHTML.replace("▼","▲");

        }

    });

});
