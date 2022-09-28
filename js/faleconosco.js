let formulario = {
    
    nome: localStorage.setItem(document.querySelector ("#nome")),
    email: document.querySelector("#email"),
    message: document.querySelector("#message"),
    btnEnviar: document.querySelector("#btn-enviar"),
}

formulario.btnEnviar.addEventListener("click", (e) => {
    e.preventDefault.prototype
    var nome = formulario.nome.value 
    if (nome.length >10){
        alert ("fui clicado")
    } 

})
