const postBtn = document.getElementById('post')
const getBtn = document.getElementById('get')
const textName = document.getElementById('inputName')
const textEmail = document.getElementById('inputEmail')
const textNumber = document.getElementById('inputNumber')
const textEmployer = document.getElementById('inputEmployer')

const dbUrl = 'http://localhost:3000/recruiters'

postBtn.addEventListener('click', postInfo)
getBtn.addEventListener('click', getInfo)

async function getInfo(e) {
    e.preventDefault()
    const res = await fetch(dbUrl, {
        method: 'GET', 
    })
    const data = await res.json()
    console.log(data)
}

async function postInfo(e) {
    e.preventDefault()
    const res = await fetch(dbUrl, {
        method: 'POST', 
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: {
            name: textName,
            email: textEmail,
            number: textNumber,
            employer: textEmployer
        }
    })
}