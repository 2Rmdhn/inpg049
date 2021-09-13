let buttons = document.getElementsByTagName('button')
let button_latar = buttons[0]
let button_text = buttons[1]

// let button_latar = document.getElementById('button-latar')
// let button_text = document.getElementById('button-text')

// console.log(button_latar) // document.button yang id nya button-latar

let list_warna = ['bisque', 'aliceblue', '#EDD2CC', '#FFA034', 'white', 'black']
let index_bg = 0
let index_text = 0

button_latar.style.backgroundColor = list_warna[index_bg]
button_latar.style.height = '24px'
button_latar.style.width = '100px'
button_latar.style.padding = '3px'

button_text.style.backgroundColor = list_warna[index_text]
button_text.style.height = '24px'
button_text.style.width = '100px'
button_text.style.padding = '3px'

let body = document.getElementsByTagName('body')[0]
let list_ul = document.getElementsByTagName('ul')[0]
nambahKombinasi()

function ubahLatar() {
    // mau ubah background color si DOM body
    body.style.backgroundColor = button_latar.style.backgroundColor

    index_bg++
    if (index_bg >= list_warna.length) {
        index_bg = 0
    }
    button_latar.style.backgroundColor = list_warna[index_bg]
    nambahKombinasi()
}

function ubahText() {
    // mau ubah warna text di body
    body.style.color = button_text.style.backgroundColor

    index_text++
    if (index_text >= list_warna.length) {
        index_text = 0
    }
    button_text.style.backgroundColor = list_warna[index_text]
    nambahKombinasi()
}

let paragraphs = document.getElementsByClassName('text')

// ubah style semua yg punya class text
for (let element of paragraphs) {
    element.style.fontSize = '32px'
    element.style.fontFamily = 'Impact,Charcoal,sans-serif';
}


function nambahKombinasi() {
    let bg_color = body.style.backgroundColor
    let text_color = body.style.color

    if (bg_color == '') {
        bg_color = 'white'
    }
    if (text_color == '') {
        text_color = 'black'
    }
    let li = document.createElement('li') //<li></li>
    li.innerText = `BG: ${bg_color}, Text: ${text_color}`
    li.style.marginBottom = '12px'
    li.style.cursor = 'pointer'
    
    li.addEventListener('mouseenter', function(){
        this.style.backgroundColor = 'red'
    })
    li.addEventListener('mouseleave', function(){
        this.style.backgroundColor = ''
    })

    li.addEventListener('click', function(){
        this.remove()
    })
    list_ul.appendChild(li)
}