const botaoEntrar: any = document.getElementById("entrar");

const exampleModal: any = document.getElementById("exampleModal");
exampleModal.addEventListener("show.bs.modal", (event: any) => {
  const button = event.relatedTarget;
  const recipient = button.getAttribute("data-bs-whatever");
  const modalTitle = exampleModal.querySelector(".modal-title");
  const modalBodyInput = exampleModal.querySelector(".modal-body input");

  modalTitle.textContent = `Sobre a aplicação:`;
  modalBodyInput.value = recipient;
});

function entrarLista() {
  const nomeUsuario: any = document.getElementById("username");
  const senhaUsuario: any = document.getElementById("password");
  const usernameStorage: any = localStorage.getItem(nomeUsuario.value);
  const usernameObjeto: any = JSON.parse(usernameStorage);

  if (!nomeUsuario.value || !senhaUsuario.value) {
    alert("Todos os campos são de preenchimento obrigatório");
    return;
  }

  if (!usernameStorage || usernameObjeto.senha !== senhaUsuario.value) {
    alert("Usuário ou senha não cadastrado!");
    return;
  }

  if (
    usernameObjeto.senha === senhaUsuario.value ||
    usernameObjeto.nome === nomeUsuario.value
  ) {
    sessionStorage.setItem("usuarioLogado", usernameStorage);
    window.location.href = "listaRecados.html";
  }
}

botaoEntrar.addEventListener("click", entrarLista);
