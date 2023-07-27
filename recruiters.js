const postBtn = document.getElementById('post')
var passedName = document.getElementById('name')
var passedEmail = document.getElementById('email')
var passedNumber = document.getElementById('number')
var passedEmployer = document.getElementById('employer')

const dbUrl = new URL('http://localhost:3001/recruiters')
const pgsqlDB = new URL('https://node-postgres-portfolio.herokuapp.com/')

postBtn.addEventListener('click', serverPosted)
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
        if(res.status == 200) {
            var response = document.getElementById('response')
            response.innerHTML = '<h3> Successfully sbmitted!</h3>'
        }  else {
            response.innerHTML = '<h3> Unsuccessfully Submission.</h3>'
        }
    } catch (error) {
        console.log("Error")
    }
}

async function serverPosted(e) {
    e.preventDefault()
    try {
        const req = await fetch(pgsqlDB, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                name: passedName,
                email: passedEmail,
                number: passedNumber,
                employer: passedEmployer
            })  
        })
        if(req.status == 200) {
            var response = document.getElementById('response')
            response.innerHTML = '<h3> Successfully submitted!</h3>'
        }  else {
            response.innerHTML = '<h3> Unsuccessfully Submission.</h3>'
        }
    } catch (error) {
        console.log("Server is not up.")
    }
}