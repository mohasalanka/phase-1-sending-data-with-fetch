// Add your code here
const { headersArrayToObject } = require("nock/lib/common");

// Add your code here
function submitData(name, email) {
    const data = {
        name: mohamed,
        email : email
    };
// Use JSON.stringify() to convert the object to a JSON string.
const configObj = {
    method: 'POST'
    headers: {
        "Content-type": "application/json",
         "Accept": "application-json"
    },
    body: JSON.stringify(data)
};
return fetch('http://http://localhost:3000/users',configObj)
    .then(response => response.json())
    .then(data => {
        const id = data.id;
        const p = document.createElement('p');
        p.textContent = id;
        document.body.appendChild(p);
    })
    .catch(err => {
        const p = document.createElement('p');
        p.textContent = err.message;
        document.body.appendChild(p);
}   );
}