
function createElements(_title = "", _text = "", key)
{
    let div = document.createElement("div");
    let span = document.createElement("span");
    let title = document.createElement("span");
    let br = document.createElement("br");
    let str = document.createElement("strong");

    // let conf_drop = document.createElement("div");
    let nav = document.createElement("nav");
    let item_1 = document.createElement("a");
    let item_2 = document.createElement("a");
    let item_3 = document.createElement("a");
    let itens_div = document.createElement("div")

    nav.className = 'config_nav';
    nav.id = key;
    let itens = [item_1, item_2, item_3];
    itens.forEach(item => {
        item.href = "#";
        item.className = "opt";
    });

    let ico_span = document.createElement('span');
    ico_span.className = "material-symbols-outlined";
    ico_span.innerHTML = 'edit';
    item_1.setAttribute("onclick", "setNoteName(this)");
    item_1.appendChild(ico_span);

    let ico_span_2 = document.createElement('span');
    ico_span_2.className = "material-symbols-outlined";
    ico_span_2.innerHTML = 'delete';
    item_2.setAttribute("onclick", "deleteNote(this)");
    item_2.appendChild(ico_span_2);

    let ico_span_3 = document.createElement('span');
    ico_span_3.className = "material-symbols-outlined";
    ico_span_3.innerHTML = 'download';
    item_3.setAttribute("onclick", "downloadNote(this)");
    item_3.appendChild(ico_span_3);

    div.className = "note";
    div.id = key
    title.className = 'title';
    title.innerHTML = _title;
    span.className = 'content';
    span.innerHTML = _text;

    itens.forEach(item => {
        nav.appendChild(item);
    });
    itens_div.appendChild(nav);

    let div_ax = document.createElement("div");
    
    str.appendChild(title)
    div_ax.appendChild(str);
    div_ax.appendChild(br);
    div_ax.appendChild(span);
    div.appendChild(div_ax);
    

    let root = document.getElementById("notes_list");
    root.appendChild(div);
    div.appendChild(itens_div);
}

let conf_aux = 1;
function activeConfigurations()
{
    if (conf_aux == 0)
    {
        let x = document.getElementsByClassName('config_nav');
        Array.from(x).forEach(item=>{
            console.log(item)
            item.style.display = 'none';
        })
        conf_aux = 1;
    }
    else
    {
        let x = document.getElementsByClassName('config_nav');
        Array.from(x).forEach(item=>{
            item.style.display = 'flex';
        })
        conf_aux = 0;
    }
}

function activeModal(_content)
{
    document.getElementById("top_modal").style.display = 'flex';
    document.getElementById('edit_note_area').value = _content
}
function closeModal()
{
    document.getElementById("top_modal").style.display = 'none';
}

(function ()
{
    // arr.forEach(item => {
    //     createElements(item);
    // })

    
    let notes = getData();

    if (notes.notes.length > 0)
    {
        let i = 0;
        notes.notes.forEach(item => {
            createElements(item.titulo, item.nota, notes.key[i])
            i++
            // document.getElementsByTagName('textarea')[0].value = item.nota
        });
    }
    else
    {
        document.getElementById("no_notes").style.display = 'block';
    }
    
})();


let ev = document.getElementsByClassName('note')
Array.from(ev).forEach(item =>{
    item.addEventListener("click", (e)=>{
        let content = e.currentTarget.querySelector('.content');
        let title = e.currentTarget.querySelector('.title')

        _TITLE_ = title.innerHTML;
        _KEYS_ = item.id;
        // console.log(item.id);
        
        

        if (conf_aux != 0) 
        {
            activeModal(content.innerHTML);
        }
    })
}) 

// adicionar eventListener para notes abrindo uma textarea para ver os dados