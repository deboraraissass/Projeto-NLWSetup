const form = document.querySelector('form');
//A função querySelector pede para o script fazer uma pesquisa pelo seletor do que vc colocar entre os paranteses.
const nlwSetup = new NLWSetup(form);
const button = document.querySelector('header button');

button.addEventListener('click', add); //adicione um "ouvidor de evento, o evento que ele deve ouvir é o click"
//se ele ouvir o click, a função add fará uma ação
form.addEventListener("change", save); //registrou na memoria uma alteração

function add(){
  
  const today = new Date().toLocaleDateString("pt-br").slice(0,-5);
  const dayExists = nlwSetup.dayExists(today);

  if(dayExists){
    alert('Dia já incluso ❌');
    return // toda funç que encontrar return para o código imediatamente
  }
  alert("Dia adicionado com sucesso ✅")
  nlwSetup.addDay(today);
}

function save(){
  //NLWSetup@habits é a chave e o Json é o dado convertido em string
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data));

  //pega os dados e guarda no localStorage
  
}
//const data = {
//  run: ["01-01", "01-02", "01-06", "01-07", "01-08"],
//study: ["01-03"],
//exercise: ["01-02"],
//}

//pegou os dados do localStorage, trasformou em obj e passou para const
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {} // caso não ache valor ele atribui o obj vazio. || = ou
nlwSetup.setData(data);
nlwSetup.load();
//para adicionar a data do sistema usamos
//new Date().toLocaledateString('pt-br');
//e para não aparecer o ano usamo
// (...).slice (0, -5), -5 que tira o /2023

//localStorage é um local que guarda dados na memória do navegador

/// ploblem no código: apartir de qual navegador ele está sendo aberto, celular ou computador por exemplo, ele terá dados diferentes, não irá retornar os mesmos dados salvos. Porque foi aberto em outro navegador e cada um terá seu localStorage