// let button = document.getElementsByTagName(`button`)
// let button_latar = button[0]
// let button_text = button[1]
// let list_color = [`bisque`, `red`, `black`, `aqua`, `darkorchid`, `chartreuse`]
// let index = 0
// let body = document.getElementsByTagName(`body`)[0]

// button_latar.style.backgroundColor = list_color[index]
// button_latar.style.height = `20px`
// button_latar.style.width = `100px`

// button_text.style.backgroundColor = list_color[index]
// button_text.style.height = `20px`
// button_text.style.width = `100px`


// function ubahWarnaLatar(){
//     body.style.backgroundColor = button_latar.style.backgroundColor
//     index++
//     if( index >= list_color.length){
//         index = 0
//     }
//     button_latar.style.backgroundColor = list_color[index]
// }

// function ubahWarnaTeks(){
//     body.style.color = button_text.style.backgroundColor
//     index++
//     if(index >= list_color.length){
//         index = 0
//     }
//     button_text.style.backgroundColor = list_color[index]
// }


let btn = document.getElementsByTagName(`button`)
let body = document.getElementsByTagName('body')[0]
let h2 = document.getElementsByTagName(`h2`)[0]
let btn_bg = btn[0]
let btn_txt = btn[1]
let li_cl = [`bisque`, `red`, `black`, `aqua`, `darkorchid`, `chartreuse`]
let i_bg = 0
let i_txt = 0

btn_bg.style.backgroundColor = li_cl[i_bg]
btn_bg.style.height = `20px`
btn_bg.style.width = `100px`

btn_txt.style.backgroundColor = li_cl[i_txt]
btn_txt.style.height = `20px`
btn_txt.style.width = `100px`

function ubahBg(){
    body.style.backgroundColor = btn_bg.style.backgroundColor
    i_bg++
    if(i_bg>=li_cl.length){
        i_bg = 0
    }
    btn_bg.style.backgroundColor = li_cl[i_bg]
}

function ubahTxt(){
    body.style.color = btn_txt.style.backgroundColor
    i_txt++
    if(i_txt>=li_cl.length){
        i_txt = 0
    }
    btn_txt.style.backgroundColor = li_cl[i_txt]
}

h2.innerHTML = `Hallo ini paragraf tambahan dari DOM`