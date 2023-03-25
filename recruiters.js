const postBtn = document.getElementById('post')
var passedName = document.getElementById('name')
var passedEmail = document.getElementById('email')
var passedNumber = document.getElementById('number')
var passedEmployer = document.getElementById('employer')

const dbUrl = new URL('http://localhost:3000/recruiters')

postBtn.addEventListener('click', postInfo)
passedName.addEventListener('change', () => passedName = passedName.value)
passedEmail.addEventListener('change', () => passedEmail = passedEmail.value)
passedNumber.addEventListener('change', () => passedNumber = passedNumber.value)
passedEmployer.addEventListener('change', () => passedEmployer = passedEmployer.value)

async function postInfo(e) {
    e.preventDefault()
    try {
        const res = await fetch(dbUrl, {
            method: 'POST', 
            mode: 'cors',
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
    } catch (error) {
        console.log("Error")
    }
}

