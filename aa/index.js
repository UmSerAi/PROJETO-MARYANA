const button = document.getElementById("botao");
const resultado = document.getElementById("resultado");
const resultado1 = document.getElementById("resultado1");
const resultado2 = document.getElementById("resultado2");
const resultado3 = document.getElementById("resultado3");

button.addEventListener("click", clicar);

function clicar(event) {
  event.preventDefault();

  const email = document.getElementById("email");
  const senha = document.getElementById("senha");
  const botao = document.getElementById("botao");
  email.className="normal";
  senha.className="normal";
  resultado1.style.display="none"; 
  resultado2.style.display="none";  
  resultado3.style.display="none";  
  email.style.width="100%"
  senha.style.width="100%"
  botao.style.width="100%"

  if (email.value == "biagimaryana@gmail.com" && senha.value == "Maryana9/") 
  {
    window.location.href = "index2.htm";
  } else { if (email.value == "" && senha.value == "")
  {
      senha.className="incorrect";
      resultado2.style.display="flex";
      resultado2.style.marginTop="-0.4rem";
      resultado2.style.marginBottom="0.8rem";
      resultado2.innerHTML="A senha deve ter entre 4 e 60 caracteres."
      email.className="incorrect";
      resultado1.style.display="flex";
      resultado1.style.marginTop="-0.4rem";
      resultado1.style.marginBottom="0.8rem";
      resultado1.innerHTML="Informe um email ou número de telefone válido."
      email.style.width="115.5%"
      senha.style.width="115.5%"
      botao.style.width="115.5%"

    } else {
    if (email.value == "" && senha.value != "Maryana9/")
    {
        email.className="incorrect";
        resultado1.style.display="flex";
        resultado1.style.marginTop="-0.4rem";
        resultado1.style.marginBottom="0.8rem";
        resultado1.innerHTML="Informe um email ou número de telefone válido."
        email.style.width="103%"
        senha.style.width="103%"
        botao.style.width="103%"

    } else {
        if (email.value == "" && senha.value == "Maryana9/")
        {
            email.className="incorrect";
            resultado1.style.display="flex";
            resultado1.style.marginTop="-0.4rem";
            resultado1.style.marginBottom="0.8rem";
            resultado1.innerHTML="Informe um email ou número de telefone válido."
            email.style.width="103%"
            senha.style.width="103%"
            botao.style.width="103%"

        }else {
            if (email.value != "biagimaryana@gmail.com" && senha.value == "")
            {
                senha.className="incorrect";
                resultado2.style.display="flex";
                resultado2.style.marginTop="-0.4rem";
                resultado2.style.marginBottom="0.8rem";
                resultado2.innerHTML="A senha deve ter entre 4 e 60 caracteres."
            } else {
            if (email.value == "biagimaryana@gmail.com" && senha.value == "")
            {
                senha.className="incorrect";
                resultado2.style.display="flex";
                resultado2.style.marginTop="-0.4rem";
                resultado2.style.marginBottom="0.8rem";
                resultado2.innerHTML="A senha deve ter entre 4 e 60 caracteres."
            } else {
                if (email.value != "biagimaryana@gmail.com" && senha.value == "Maryana9/")
            {
                resultado3.style.display="flex"
                resultado3.innerHTML="Desculpe, não encontramos uma conta com esse endereço de email. Tente novamente."
                senha.className="incorrect";
                email.className="incorrect";
            } else {
                if (email.value != "biagimaryana@gmail.com" && senha.value != "Maryana9/")
            {
                resultado3.style.display="flex"
                resultado3.innerHTML="Desculpe, não encontramos uma conta com esse endereço de email. Tente novamente."
                senha.className="incorrect";
                email.className="incorrect";
            } else {
                if (email.value == "biagimaryana@gmail.com" && senha.value != "Maryana9/")
            {
                resultado3.style.display="flex"
                resultado3.innerHTML="<b>Senha incorreta.</b>  Tente novamente"
                senha.className="incorrect";
                resultado3.style.height="10px"
                resultado3.style.paddingBottom="15px"
            } 
            }
            }
        }
    }
}
}
}
}
}