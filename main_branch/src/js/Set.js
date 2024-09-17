let gn = new General

function adicionarNota()
{
    let textArea = document.getElementsByTagName("textarea")[0].value;
    let noteTitle = prompt("Digite um titulo para o texto: ", "Texto...");

    let code = gn.randomString(5)

    firebase.database().ref("notes/" + code).set({
        "nota" : textArea,
        "titulo" : noteTitle
    })
}

function salvarNota()
{
    let textArea = document.getElementsByTagName("textarea")[0].value;
    firebase.database().ref("notes/" + _KEYS_).set({
        "nota" : textArea,
        "titulo" : _TITLE_
    })

    location.reload()
}