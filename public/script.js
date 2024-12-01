document.getElementById("form").addEventListener("submit", function (event) 
{
    event.preventDefault();

    const formData = 
    {
      usuario: document.getElementById("text").value,
      email: document.getElementById("email").value,
      senha: document.getElementById("password").value,
    };

    console.log("Dados:", formData);

    fetch("http://localhost:3000/login", //login é o acesso a database
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

      .then((response) => {
        if (response.status===400){
          alert("o usuário já existe")
          throw new Error('o usuário já existe');
          //a única ocasião em q o programa vai retornar o cód 400 e caso o usuário seja o mesmo ent acho e isso está ok.
        }
        return response.json()})
      .then((data) => 
      {
        console.log("Success:", data);
        alert("Cadastro realizado com sucesso!");
      })

      .catch((error) => 
      {
        console.error("Error:", error);
        alert("Ocorreu um erro ao realizar o cadastro.");
      });

});