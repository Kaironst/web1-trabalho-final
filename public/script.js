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

    fetch("http://localhost:3000/login", 
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