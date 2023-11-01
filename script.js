let pgtAtual = 1;
let resCerta = 0;

function onFormDadosSubmit(evt) {
    evt.preventDefault();

    const formD = evt.target;
    const formData = new FormData(formD);

    console.log(formData.getAll('personagens'));

    const urlApi = "http://localhost:8080/user";
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

function onFormQuizSubmit(evt) {
    evt.preventDefault();

    const formQ = evt.target;
    const formDataQ = new FormData(formQ)

    const urlApi = "http://localhost:8080/quiz";
    const requestParams = {
        method: 'POST',
        headers: {
            'contenty-type': 'application/json'
        },
        body: JSON.stringify({
            p1: formDataQ.get(p1),
            p2: formDataQ.get(p2),
            p3: formDataQ.get(p3),
            p4: formDataQ.get(p4),
            p5: formDataQ.get(p5)
        })
    };

    for(const key of formDataQ.keys()) {
        const res = formDataQ.get(key);

        if (res === 'true') {
            resCerta++;
        }
    }

    console.log(resCerta);
}

function onInputChange(evt) {
    console.log(evt.target.value);
}

function salvarDadosForm() {

    document.querySelector('#quiz').style.display = 'block';
    document.querySelector('#dados').style.display = 'none';
}

function pgtAnterior(evt) {
    evt.preventDefault();
   
    document.querySelector('#p' + pgtAtual).style.display = 'none';
    pgtAtual--;
    document.querySelector('#p' + pgtAtual).style.display = 'block';   
}

function pgtPosterior(evt) {
    evt.preventDefault();

    document.querySelector('#p' + pgtAtual).style.display = 'none';
    pgtAtual++;
    document.querySelector('#p' + pgtAtual).style.display = 'block';
        
    if (pgtAtual !== 5) {
        
        document.querySelector('#btn-depois').style.display = 'inline-block';
        document.querySelector('#btn-antes').style.display = 'inline-block';
                     
    } else {

        document.querySelector('#btn-depois').style.display = 'none';
        document.querySelector('#btn-antes').style.display = 'none';
        document.querySelector('#btn-btn-salvar').style.display = 'block';
        
    }
    

}

function mostrarResultado(evt) {
    evt.preventDefault();
    
    const saudacaoResultado = document.querySelector('#saudacao'); 
    
    document.querySelector('#quiz').style.display = 'none';
    document.querySelector('#resultado').style.display = 'block';

}