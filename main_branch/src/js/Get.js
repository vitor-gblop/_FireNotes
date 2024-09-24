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