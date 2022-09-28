function switchTheme() {
    const botao = document.querySelector("#flexSwitchCheckDefault")

    if(botao.checked){
        document.body.style.backgroundColor = '#1a1a1a'
        document.body.style.color = '#fff'
    } else {
        document.body.style.backgroundColor = '#fff'
        document.body.style.color = '#000'
    }
}