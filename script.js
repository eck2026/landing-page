function toggleMenu(event){

    event.preventDefault();

    const menu = document.getElementById("pelatihan");
    const button = document.querySelector(".dropdown-btn");

    if(menu.style.display === "block"){

        menu.style.display = "none";
        button.innerHTML = "Program Pelatihan ▼";

    }else{

        menu.style.display = "block";
        button.innerHTML = "Program Pelatihan ▲";

    }

}
