document.getElementById("form").addEventListener("submit", function (event) 
{
    event.preventDefault();

    const formData = 
    {
      nome: document.getElementById("text").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };

    console.log("Dados:", formData);

    fetch("http://localhost:3000/cadastro", 
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

      .then((response) => response.json())
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
//nesse caso o código vai sermpre dar erro graças ao fato de que não há um lugar para receber a solicitação post