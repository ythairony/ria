const tabela = document.getElementById('cliente')

fetch('http://3.128.249.166:8000/api/clients/')
.then(response => response.json())
.then(dados => {
    dados.forEach(element => {
        const linha = document.createElement("tr")
        linha.innerHTML =  `<td>${element.id}</td>
                            <td>${element.name}</td>
                            <td>${element.email}</td>`
        tabela.appendChild(linha)
    });
})


