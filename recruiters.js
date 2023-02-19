const postBtn = document.getElementById('post')
const input = document.getElementById('inputName')

const dbUrl = 'http://localhost:3000/recruiters'

postBtn.addEventListener('click', postInfo)


async function postInfo(e) {
    e.preventDefault()
    const data = {
        name: "Genesis",
        email: "guerra@google.com",
        number: "9783257333",
        employer: "google"
    }
    const res = await fetch(dbUrl, {
        method: 'POST', 
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    console.log(res)
}