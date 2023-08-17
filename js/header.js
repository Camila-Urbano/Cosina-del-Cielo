const nav = document.querySelector('header');

window.addEventListener('scroll', function(){

    nav.classList.toggle('active', this.window.scrollY > 0)

})

document.getElementById("icon_menu").addEventListener("click", mostrar_menu);

function mostrar_menu()
{
    document.querySelector(".menu").classList.toggle("mostrar_menu");
}