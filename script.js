// Declaração de variáveis globais

let pgtAtual = 1;
let resCerta = 0;
let dados = {
    nome: "",
    genero: "",
    personagens: []
};
let quiz = {
    p1: "",
    p2: "",
    p3: "",
    p4: "",
    p5: ""
};

// Formulário de Dados

function onFormDadosSubmit(evt) {
    evt.preventDefault();

    const formD = evt.target;
    const formData = new FormData(formD);

    dados = {
        nome: formData.get('nome'),
        genero: formData.get('genero'),
        personagens: formData.get('personagens')
    };

    document.querySelector('#quiz').style.display = 'block';
    document.querySelector('#dados').style.display = 'none';

    console.log(dados);
}

// Formulário do Quiz

function onFormQuizSubmit(evt) {
    evt.preventDefault();

    const formQ = evt.target;
    const formDataQ = new FormData(formQ);

    quiz = {
        p1: formDataQ.get('p1'),
        p2: formDataQ.get('p2'),
        p3: formDataQ.get('p3'),
        p4: formDataQ.get('p4'),
        p5: formDataQ.get('p5')
    };

    for(const key of formDataQ.keys()) {
        const res = formDataQ.get(key);

        if (res === 'true') {
            resCerta++;
        }
    }

    console.log(resCerta);
    console.log(quiz);

    document.querySelector('#quiz').style.display = 'none';
    document.querySelector('#resultado').style.display = 'block';


    // Página de resultado final
          
    if (resCerta >= 3) {
        document.querySelector('#saudacao').innerHTML = `Parabéns, ${dados.nome}! Você é realmente fã!`;
    } else {
        document.querySelector('#saudacao').innerHTML = `Foi por pouco, ${dados.nome}! Tente novamente!`;
    }

    document.querySelector('#acertos').innerHTML = `Você teve ${resCerta / 5 * 100}% de acerto.`;   
        
}

// Botão para página anterior

function pgtAnterior(evt) {
    evt.preventDefault();
   
    document.querySelector('#p' + pgtAtual).style.display = 'none';
    pgtAtual--;
    document.querySelector('#p' + pgtAtual).style.display = 'block';   
    
}

// Botão para página posterior

function pgtPosterior(evt) {
   
    document.querySelector('#p' + pgtAtual).style.display = 'none';
    pgtAtual++;
    document.querySelector('#p' + pgtAtual).style.display = 'block';
        
    if (pgtAtual !== 5) {
        
        document.querySelector('#btn-depois').style.display = 'inline-block';
        document.querySelector('#btn-antes').style.display = 'inline-block';
                     
    } else {

        document.querySelector('#btn-depois').style.display = 'none';
        document.querySelector('#btn-antes').style.display = 'none';
        document.querySelector('#btn-btn-salvar').style.display = 'inline-block';
        
    }
    
}

