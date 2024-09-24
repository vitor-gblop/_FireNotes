
function deleteNote(tag = document) 
{
    let parent = tag.parentElement
    console.log(parent.id);

    let confirmation = prompt("Tem certeza que deseja apagar a nota? \n" +
    "Se sim escreva 'sim'.", "nao");
    if (confirmation == 'sim')
    {
        // aqui apaga de fato a nota
        firebase.database().ref("notes/" + parent.id).set({
            "nota" : null,
            "titulo" : null
        })

        alert("Nota Apagada.")
        location.reload()
    }
}