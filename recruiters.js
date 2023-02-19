const postBtn = document.getElementById('post')
const getBtn = document.getElementById('get')

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
    const data = {
        name: "Genesis",
        email: "gurra@google.com",
        number: "9784296264",
        employer: "Google"
    }
    const res = await fetch(dbUrl, {
        method: 'POST', 
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    })
}