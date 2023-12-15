import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getDatabase ,set,get,ref } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyDz4EXt3l7EOpopuhhlNZ6ZsI0J5k0sTbk",
    authDomain: "tela-de-login--2.firebaseapp.com",
    databaseURL: "https://tela-de-login--2-default-rtdb.firebaseio.com",
    projectId: "tela-de-login--2",
    storageBucket: "tela-de-login--2.appspot.com",
    messagingSenderId: "224401762261",
    appId: "1:224401762261:web:c4cd0fd0017b4ba5a07f5c"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app)



// Manipulação de dados

//imports
import { usuario } from './script.js';
export { iniciarBG } // Gatilho para iniciar procedimentod no banco de dados

function iniciarBG() {
    console.log('banco de dados iniciado')
}

const usersRef = ref(db, 'users'); // Usando a referência correta






//Leitura de dados dos nos


// Lê os dados do nó 'users'
get(usersRef)


.then(snapshot => {
    // Obtém os dados do snapshot
    const dados = snapshot.val();

    // Exibe os dados no console
    console.log('Dados do nó "users":', dados);
})


.catch(error => {
console.error("Erro ao ler dados do nó 'users':", error);
});

function writeUserData(userID, name, email) {
set(ref(db, 'users/' + userID), {
name: name,
email: email
});
}

writeUserData(1, "Douglas", "dg.7@gmail.com");

function readData() {
const userRef = ref(db, 'users');

// Usando a função on para ouvir alterações nos dados
onValue(userRef, (snapshot) => {
snapshot.forEach((childSnapshot) => {
    console.log(childSnapshot.val());
});
});
}

readData();


























/*
const usersRef = firebase.database().ref('users') // Referência para o nó 'users'

// Lê os dados do nó 'users'

usersRef.once('value')

.then(snapshot => {
    // Obtém os dados do snapshot
    const dados = snapshot.val();

    // Exibe os dados no console
    console.log('Dados do nó "users":', dados);
})

    .catch(error => {
    console.error("Erro ao ler dados do nó 'users':", error);
});











function writeUserData(userID,name,email){
    set(ref(db, 'users/' + userID),{
        name:name,
        email:email
    })
}

writeUserData(1,"Douglas","dg.7@gmail.com")

function readData() {
    const userRef = ref(db, 'users')
    get(userRef).then((snapshot)=>{
        snapshot.forEach((chilsdnapShot)=>{
            console.log(chilsdnapShot.val())
        })
    })
}
readData()


*/



/*
// Função para obter a quantidade de cadastros

//const usersRef = firebase.database().ref('users') // Referência para o nó 'users'
//console.log (usersRef)


function obterQuantidadeDeCadastros() {
    usersRef.once('value')
    .then(snapshot => {
        const quantidade = snapshot.numChildren();
        console.log(`Quantidade de cadastros: ${quantidade}`);
        criarNovoUsuario(quantidade + 1); // Chama a função para adicionar novo usuário com o ID incrementado
    })
    .catch(error => {
        console.error("Erro ao obter quantidade de cadastros:", error);
    });
}

// Função para criar um novo usuário
function criarNovoUsuario(novoId) {
    const novoUsuario = {
        email: "novo.email@example.com",
        name: "Novo Usuário"
    };
    
    // Adiciona o novo usuário com o ID incrementado
    usersRef.child(String(novoId).padStart(6, '0')).set(novoUsuario)
    .then(() => {
        console.log("Novo usuário criado com sucesso!");
    })
    .catch(error => {
        console.error("Erro ao criar novo usuário:", error);
    });
}

// Chama a função para obter a quantidade de cadastros
obterQuantidadeDeCadastros();

*/







/* Ideia de referencia do projet0

1 - receber o objeto usuario com as 3 informações q precisão ser salvas no BD

2 - puxar a quantidade de userID que contem no no Users e adicionar + 1 para gerar um ID para o novo usuario.

3 - Salvar o ID que contem o objeto usuario novo dentro no no Users com o ID referente
*/