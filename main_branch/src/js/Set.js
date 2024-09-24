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
        // sugestão: mudar nota para content ou conteudo
    })

    location.reload()
}

function setNoteName(tag = document) 
{
    let parent = tag.parentElement;
    parent = parent.parentElement;
    parent = parent.parentElement;
    // console.log(parent);

    _KEYS_ = parent.id;

    let textArea = parent.children[0].querySelector('.content').innerHTML
    // textArea = textArea.querySelector('.content').innerHTML
    // console.log(textArea);    
    
    let newTitle = prompt("Novo nome da nota: ");
    if (newTitle != "")
    {
        firebase.database().ref("notes/" + _KEYS_).set({
            "nota" : textArea,
            "titulo" : newTitle
        })
    }

    location.reload()
}