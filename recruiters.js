const postBtn = document.getElementById('post')
const getBtn = document.getElementById('get')
var passedName = document.getElementById('name')
var passedEmail = document.getElementById('email')
var passedNumber = document.getElementById('number')
var passedEmployer = document.getElementById('employer')

const dbUrl = new URL('http://localhost:3000/recruiters')

postBtn.addEventListener('click', postInfo)
getBtn.addEventListener('click', getInfo)
passedName.addEventListener('change', () => passedName = passedName.value)
passedEmail.addEventListener('change', () => passedEmail = passedEmail.value)
passedNumber.addEventListener('change', () => passedNumber = passedNumber.value)
passedEmail.addEventListener('change', () => passedEmployer = passedEmployer.value)

async function getInfo(e) {
    e.preventDefault()
    const res = await fetch(dbUrl, {
        method: 'GET', 
    })
    const data = await res.json() 
    console.log(data)
}

const promise = (resObj) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(resObj) {
                resolve(resObj)
            }
            else {
                reject()
            }
        }, 60000) 
    })
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
        body: JSON.stringify({
            name: passedName,
            email: passedEmail,
            number: passedNumber,
            employer: passedEmployer
        })  
    })
    promise(res).then((obj) => {
        return obj.json()
    }).catch(() => {
        console.log("failed")
    })
}

