// Qual é a senha?
const MENSAGEM = "b6gyJNa2ZmDbio8s3OIHaw==:iyD9ShyjbVsGxkL7:1ae34pwjTh0T8jW68NE7nARwPaEOhcCGqyyr6CqtoPuAN3GsIhqpgK9JJHyfeEjUCUol5w==";

// Gera chave a partir da senha usando PBKDF2
async function gerarChave(senha, salt) {
    const chaveMaterial = await window.crypto.subtle.importKey(
        'raw',
        new TextEncoder().encode(senha),
        {name: 'PBKDF2'},
        false,
        ['deriveKey']
    );

    return window.crypto.subtle.deriveKey(
        {
            name: 'PBKDF2',
            salt: salt,
            iterations: 100000,
            hash: 'SHA-256'
        },
        chaveMaterial,
        { name: 'AES-GCM', length: 256 },
        true,
        ['encrypt', 'decrypt']
    );
}

// Criptografa a mensagem
async function encriptar() {
    const mensagemBody = document.getElementById('mensagemEncriptar').value;
    const senha = document.getElementById('senhaEncriptar').value;

    const salt = window.crypto.getRandomValues(new Uint8Array(16));
    const iv = window.crypto.getRandomValues(new Uint8Array(12)); // vetor de inicialização

    const chave = await gerarChave(senha, salt);
    const textoEncriptado = await window.crypto.subtle.encrypt(
        { name: 'AES-GCM', iv: iv },
        chave,
        new TextEncoder().encode(mensagemBody)
    );

    const arrayEncriptado = new Uint8Array(textoEncriptado);
    const mensagemEncriptada = btoa(String.fromCharCode(...salt)) + ":" +
                             btoa(String.fromCharCode(...iv)) + ":" +
                             btoa(String.fromCharCode(...arrayEncriptado));

    document.getElementById('resultadoEncriptado').value = mensagemEncriptada;
}

// Descriptografa a mensagem
async function decriptar() {
    const mensagemEncriptada = document.getElementById('mensagemDecriptografar').value;
    const senha = document.getElementById('senhaDecriptografar').value;

    const parts = mensagemEncriptada.split(':');
    const salt = new Uint8Array(atob(parts[0]).split('').map(c => c.charCodeAt(0)));
    const iv = new Uint8Array(atob(parts[1]).split('').map(c => c.charCodeAt(0)));
    const textoEncriptadoData = new Uint8Array(atob(parts[2]).split('').map(c => c.charCodeAt(0)));

    const chave = await gerarChave(senha, salt);
    try {
        const textoDecriptografado = await window.crypto.subtle.decrypt(
            { name: 'AES-GCM', iv: iv },
            chave,
            textoEncriptadoData
        );
        document.getElementById('resultadoDecriptografado').value = new TextDecoder().decode(textoDecriptografado);

    } catch (e) {
        alert("Senha incorreta ou mensagem corrompida.");
    }
}

// Criptografa a mensagem
async function decriptarMensagem() {
    const senha = document.getElementById('mensagemProntaDecriptografar').value;
    
    // Carrega o arquivo 'arquivo.txt' da pasta do projeto
    // const response = await fetch('./arquivo.txt');
    // if (!response.ok) {
    //     alert('Falha ao carregar o arquivo.');
    //     return;
    // }

    // const mensagem = await response.text(); // Conteúdo do arquivo .txt
    const parts = MENSAGEM.split(':');

    if (parts.length !== 3) {
        alert('Formato de mensagem inválido!');
        return;
    }

    const salt = new Uint8Array(atob(parts[0]).split('').map(c => c.charCodeAt(0)));
    const iv = new Uint8Array(atob(parts[1]).split('').map(c => c.charCodeAt(0)));
    const textoEncriptadoData = new Uint8Array(atob(parts[2]).split('').map(c => c.charCodeAt(0)));

    const chave = await gerarChave(senha, salt);
    try {
        const textoDecriptografado = await window.crypto.subtle.decrypt(
            { name: 'AES-GCM', iv: iv },
            chave,
            textoEncriptadoData
        );
        document.getElementById('resultadoProntoDecriptografado').value = new TextDecoder().decode(textoDecriptografado);
    } catch (e) {
        alert("Senha incorreta ou mensagem corrompida.");
    }
}