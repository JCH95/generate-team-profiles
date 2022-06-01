// function htmlGenerator(employees) {
//     const newHtml = 
//     `   <!DOCTYPE html>
//         <html lang="en-us">
    
//             <head>
//                 <meta charset="UTF-8">
//                 <meta http-equiv="X-UA-Compatible" content="IE=edge">
//                 <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
//                 <link rel="stylesheet" href="./style.css">
//                 <title>My Team</title>
//             </head>
//             <body>
//                 <header>
//                     <h1>My Team<h1>
//                 </header>
//                 <div class="container bg-red">
//                     <div class="row">
//     `;
// }

const employees = require('../index.js');

function htmlGenerator(employees) {
    for (var i = 0; i < employees.length; i++) {
        if (employees[i].role === "Manager") {
            return `
                <div class="card text-white bg " style="width: 18rem;">
                    <div class="card-body">
                        <h3 class="card-title bg-blue">${employees[i].name}</h5>
                        <h4 class="card-subtitle mb-2 text-muted">${employees[i].role}</h6>
                        <p class="card-text bg-grey border-dark">ID: ${employees[i].id}</p>
                        <p class="card-text bg-grey border-dark">Email: ${employees[i].email}</p>
                        <p class="card-text bg-grey border-dark">Office: ${employees[i].office}</p>
                    </div>
                </div>
            `
        } else if (employees[i].role === "Engineer") {
            return `
                <div class="card text-white" style="width: 18rem;">
                    <div class="card-body">
                        <h3 class="card-title bg-blue">${employees[i].name}</h5>
                        <h4 class="card-subtitle mb-2 text-muted">${employees[i].role}</h6>
                        <p class="card-text bg-grey border-dark">ID: ${employees[i].id}</p>
                        <p class="card-text bg-grey border-dark">Email: ${employees[i].email}</p>
                        <p class="card-text bg-grey border-dark">Office: ${employees[i].office}</p>
                    </div>
                </div>
            `
        } else if (employees[i].role === "Intern") {
            return `
                <div class="card text-white" style="width: 18rem;">
                    <div class="card-body">
                        <h3 class="card-title bg-blue">${employees[i].name}</h5>
                        <h4 class="card-subtitle mb-2 text-muted">${employees[i].role}</h6>
                        <p class="card-text bg-grey border-dark">ID: ${employees[i].id}</p>
                        <p class="card-text bg-grey border-dark">Email: ${employees[i].email}</p>
                        <p class="card-text bg-grey border-dark">Office: ${employees[i].office}</p>
                    </div>
                </div>
            `
        }
    }
}

module.exports = htmlGenerator => {
    console.log(htmlGenerator);

    return `
        <!DOCTYPE html>
        <html lang="en-us">

            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
                <link rel="stylesheet" href="./style.css">
                <title>My Team</title>
            </head>
            <body>
                <header class="bg-red">
                    <h1>My Team<h1>
                </header>
                <div class="container">
                    <div class="row">
                        ${htmlGenerator(employees)}
                    </div>
                </div>
            </body>
        </html>
    `
};