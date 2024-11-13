let numItens = 0

function getData()
{
    let db = firebase.database().ref('notes/');
    let obj = {"notes":[], "key":[]}

    db.on('value', (e)=>
    {
        e.forEach(i => {
            // console.log(i.key);
            obj.notes.push(i.val());
            obj.key.push(i.key);
            numItens += 1; 
        });
        localStorage.setItem("notes_data", JSON.stringify(obj));
    });
    let x = JSON.parse(localStorage.getItem("notes_data"));

    localStorage.removeItem("notes_data");
    return x;
}

function getVal(token = "")
{
    let db = firebase.database().ref('notes/'+token+'/nota');

    db.on('value', (e)=>
    {
        localStorage.setItem("notes_data", JSON.stringify(obj));
    });
    let x = JSON.parse(localStorage.getItem("notes_data"));

    localStorage.removeItem("notes_data");
    return x;
}

let getNumItens = ()=>{
    return numItens;
}

 // baixa apenas um projeto salvo
 function downloadNote(tag = document)
 {
    let parent = tag.parentElement;
    parent = parent.parentElement;
    parent = parent.parentElement;

    let content = parent.children[0].querySelector('.content').innerHTML;
    let title = parent.children[0].querySelector('.title').innerHTML;

    // transforma em string e baixa
    let file_to_save = new File([content], title + ".txt")
    const blobUrl = URL.createObjectURL(file_to_save);

    tag.setAttribute("href" , blobUrl);
    tag.setAttribute("download", file_to_save.name);
 }