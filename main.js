// Selecionando as pontuações
const pontPlay1 = document.querySelector('#pontPlay1');
const pontPlay2 = document.querySelector('#pontPlay2');

// Selecionando os botões
const btnPlay1 = document.querySelector('#marcPlay1');
const btnPlay2 = document.querySelector('#marcPlay2');
const menosPlay1 = document.querySelector('#decrPlay1');
const menosPlay2 = document.querySelector('#decrPlay2');
const trucoPlay1 = document.querySelector('#trucoPlay1');
const trucoPlay2 = document.querySelector('#trucoPlay2');

//Selecionando a mensagem do vencedor
const msgVencedor = document.querySelector('#msg-vitoria');

let ponto1 = 0;
let ponto2 = 0;

// Inicializa o estado do botão no início
atualizarEstadoBotaoMenos1();
atualizarEstadoBotaoMenos2();

btnPlay1.addEventListener('click', () => {
    ponto1++;
    pontPlay1.innerText = `${ponto1}`;
    atualizarEstadoBotaoMenos1();
    verificaVitoriaPlay1();
})

menosPlay1.addEventListener('click', () => {
    ponto1--;
    pontPlay1.innerText = `${ponto1}`;
    atualizarEstadoBotaoMenos1(); 
})

btnPlay2.addEventListener('click', () => {
    ponto2++;
    pontPlay2.innerText = `${ponto2}`;
    atualizarEstadoBotaoMenos2();
    verificaVitoriaPlay2();
})

menosPlay2.addEventListener('click', () => {
    ponto2--;
    pontPlay2.innerText = `${ponto2}`;
    atualizarEstadoBotaoMenos2();
})

trucoPlay1.addEventListener('click', () => {
    ponto1 += 3;
    pontPlay1.innerText = `${ponto1}`;
    atualizarEstadoBotaoMenos1();
    verificaVitoriaPlay1();
})

trucoPlay2.addEventListener('click', () => {
    ponto2 += 3;
    pontPlay2.innerText = `${ponto2}`;
    atualizarEstadoBotaoMenos2();
    verificaVitoriaPlay2();
})







// Função para atualizar o estado do botão de decrementar
function atualizarEstadoBotaoMenos1() {
    if (ponto1 === 0) {
        menosPlay1.disabled = true;
    } else {
        menosPlay1.disabled = false;
    }
}

function atualizarEstadoBotaoMenos2() {
    if (ponto2 === 0) {
        menosPlay2.disabled = true;
    } else {
        menosPlay2.disabled = false;
    }
}

const verificaVitoriaPlay1 = () => {
    if (ponto1 >= 12) {
        msgVencedor.innerText = `Azul ganhou de ${ponto1} a ${ponto2}`;
        btnPlay1.disabled = true;
        menosPlay1.disabled = true;
        trucoPlay1.disabled = true;
        setTimeout(() => {
            alert('Azul ganhou! O jogo será reiniciado.');
            location.reload();
        }, 500); 
    }
}

const verificaVitoriaPlay2 = () => {
    if (ponto2 >= 12) {
        msgVencedor.innerText = `Vermelho ganhou de ${ponto2} a ${ponto1}`;
        btnPlay2.disabled = true;
        menosPlay2.disabled = true;
        trucoPlay2.disabled = true;
        setTimeout(() => {
            alert('Vermelho ganhou! O jogo será reiniciado.');
            location.reload();
        }, 500); 
    }
}
