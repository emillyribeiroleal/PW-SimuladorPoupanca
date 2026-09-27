function calcular(){
    let depositoTxt = document.getElementById("deposito").value;
    let mesesTxt = document.getElementById("meses").value;

    if (depositoTxt === ""){
        alert("O quantidade guardada não pode ser vazia.");
        return;
    }

    let deposito = parseFloat(depositoTxt);
    
    if (deposito <= 0 || isNaN(deposito)){
        alert("O quantidade guardada não pode ser igual a 0 ou negativo.");
        return;
    }

    if (mesesTxt === ""){
        alert("O mês não pode ser vazio.");
        return;
    }

    let meses = parseInt(mesesTxt);
    
    if (meses <= 0 || isNaN(meses)){
        alert("O meses não podem ser negativos ou igual a zero");
        return;
    }

    let total = deposito*meses;
    document.getElementById("resultado").value = total;
}

function limpar(){
    document.getElementById("resultado").value =""
}