let pgtAtual = 1;

function onFormDadosSubmit(evt) {
    evt.preventDefault();

    const form = evt.target;
    const formData = new FormData(form);

    console.log(formData.getAll('personagens'));

    const urlApi = "http://localhost:8080/player";
    const requestParams = {
        method: 'POST',
        headers: {
            'contenty-type': 'application/json'
        },
        body: JSON.stringify({
            nome: formData.get('nome'),
            genero: formData.get('genero')
        })
    };
}

function onInputChange(evt) {
    console.log(evt.target.value);
}

function passarParaFormQuiz() {
    document.getElementById('dados').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
}

function pgtAnterior(evt) {
    evt.preventDefault();
    document.getElementById('p' + pgtAtual).style.display = 'none';
    pgtAtual--;
    document.getElementById('p' + pgtAtual).style.display = 'block';
}

function pgtPosterior(evt) {
    evt.preventDefault();
    document.getElementById('p' + pgtAtual).style.display = 'none';
    pgtAtual++;
    document.getElementById('p' + pgtAtual).style.display = 'block';
}