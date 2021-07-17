const btn =document.querySelector(".btn-success") // btn0succes = classe botao enviar

btn.addEventListener("click", function(e){
    e.preventDefault();
    const vimg = document.querySelector("#urlI"); // id input Url da imagem
    const vtitle = document.querySelector("#urlT"); // id input Titulo do filme
    
    const figure =document.createElement("figure");
    const img = document.createElement("img");
    const title =document.createElement("figcaption");

    const list = document.querySelector(".list-banner"); 
       
    img.src = vimg.value;
    img.alt ="Banner";
    img.classList.add("banner"); 
    
    img.classList.add("banner");
    title.classList.add("caption");
    title.textContent=vtitle.value;
    figure.classList.add("warpper-banner")
   
    list.insertAdjacentElement("beforeend",figure);
    figure.insertAdjacentElement("beforeend",img);
    figure.insertAdjacentElement("beforeend",title);
    
}  
)
