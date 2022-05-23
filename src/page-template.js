function htmlGenerator(employees) {
    const newHtml = 
    `   <!DOCTYPE html>
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
                <header>
                    <h1>My Team<h1>
                </header>
                <div class="container">
                    <div class="row">
    `;
}

const generateCards = cardArr => {
    for (var i = 0; i < employees.length; i++) {
        if (employees[i].role === "Manager") {
            return `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>
            `
        }
    }
}

module.exports = htmlGenerator;