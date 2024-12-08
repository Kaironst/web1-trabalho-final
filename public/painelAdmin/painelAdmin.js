const delay = ms => new Promise(res => setTimeout(res, ms));

// mostra a sidebar
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.querySelector(".openbtn").style.display = "none";
}

//fecha a sidebar
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.querySelector(".openbtn").style.display = "inline";
} 

//esconde tudo
 function hideAll() {
  document.getElementById("initial").style.display = "none";
  document.getElementById("cadastrar").style.display = "none";
  document.getElementById("editar").style.display = "none";
  document.getElementById("deletar").style.display = "none";
  document.getElementById("encontrar").style.display = "none";
  document.getElementById("response").style.display = "none";
}

//mostra apenas o forumulário de cadastro
function showCadastrar() {
  hideAll();
  document.getElementById("cadastrar").style.display = "inline";
}

//mostra apenas o formulário de edição
function showEditar() {
  hideAll();
  document.getElementById("editar").style.display = "inline";
}

//mostra apenas o formulário de deleção
function showDeletar() {
  hideAll();
  document.getElementById("deletar").style.display = "inline";
}
async function deleteConfirmation() {
  document.getElementById("submitDeletar").style.display = "none";
  document.getElementById("confirmDeletar").style.display = "inline";
  await delay(2000);
  document.getElementById("submitDeletar").style.display = "inline";
  document.getElementById("confirmDeletar").style.display = "none";
}

function showEncontrar() {
  hideAll();
  document.getElementById("encontrar").style.display = "inline";
}

const requestData = {
  port: "3000",
  url: "localhost",
  encontrarTodos() {
    event.preventDefault
    fetch(`http://${this.url}:${this.port}/login`,{
      method: "GET",
    })
    .then(response => response.json())
    .then(data => {console.log(data);
    document.getElementById("response").innerText = JSON.stringify(data);
    document.getElementById("response").style.display = "inline";})
  },
  encontrarPorId() {
    event.preventDefault
    const id = document.querySelector("#formEncontrar #id").value
    fetch(`http://${this.url}:${this.port}/login/${id}`,{
      method: "GET",
    })
    .then(response => response.json())
    .then(data => {console.log(data);
    document.getElementById("response").innerText = JSON.stringify(data);
    document.getElementById("response").style.display = "inline";})
  },
  cadastrar() {
    event.preventDefault
    const formData = {
      usuario: document.querySelector("#formCadastrar #usuario").value,
      email: document.querySelector("#formCadastrar #email").value,
      senha: document.querySelector("#formCadastrar #senha").value,
    }
    fetch(`http://${this.url}:${this.port}/login`,{
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {console.log(data);
    document.getElementById("response").innerText = JSON.stringify(data);
    document.getElementById("response").style.display = "inline";
  })
  },
  editar() {
    event.preventDefault
    const id = document.querySelector("#formEditar #id").value
    const formData = {
      usuario: document.querySelector("#formEditar #usuario").value,
      email: document.querySelector("#formEditar #email").value,
      senha: document.querySelector("#formEditar #senha").value,
    }
    fetch(`http://${this.url}:${this.port}/login/${id}`,{
      method: "PUT",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {console.log(data);
    document.getElementById("response").innerText = JSON.stringify(data);
    document.getElementById("response").style.display = "inline";
  })
  },
  deletar() {
    event.preventDefault
    const id = document.querySelector("#formDeletar #id").value
    fetch(`http://${this.url}:${this.port}/login/${id}`,{
      method: "DELETE",
    })
    .then(data => {
    document.getElementById("response").innerText = `${id} removido com sucesso`;
    document.getElementById("response").style.display = "inline";
    console.log(data);
    })

  }
}