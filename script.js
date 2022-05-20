var posicaoatual = 0
var liberado = false
var liberado2 = false
var liberado3 = false
var validacaoID = true
var qtdprodutos = 0
var arrCod = [-1]
var vetorcadastro = [] //usar p excluir

function salvarnoarray(){
    if (document.getElementById("txtcod").value.length == 0){
        document.getElementById('txtcod').focus()
        window.alert("Por favor, insira o código do produto")
        liberado = false
    }else{
        codigoVerificado=document.getElementById("txtcod").value
        for(i=0; i<arrCod.length; i++){
            if(codigoVerificado == arrCod[i]){
                validacaoID = false
                liberado = false
                window.alert("Código já existente")
            }
        }
        if(validacaoID == true) {
            arrCod.push(codigoVerificado)
            liberado = true
        }
    }
    if (document.getElementById("txtdesc").value.length < 20){
        document.getElementById('txtdesc').focus()
        window.alert("Por favor, insira uma descrição válida para o produto")
        liberado2 = false
    }else{liberado2 = true}
    if (document.getElementById("txtval").value.length == 0 || document.getElementById("txtval").value < 0){
        document.getElementById('txtval').focus()
        window.alert("Por favor, insira o valor do produto")
        liberado3 = false
    }else{liberado3 = true}
    if(liberado == true && liberado2 == true && liberado3 == true){
        vetorcadastro[posicaoatual] = String((posicaoatual) + ' - ' + window.document.getElementById("txtcod").value) + ' - ' + String(window.document.getElementById("txtdesc").value) + ' - R$' + String(window.document.getElementById("txtval").value)
        posicaoatual++
        qtdprodutos++
        document.getElementById('txtcod').value=''
        document.getElementById('txtdesc').value=''
        document.getElementById('txtval').value=''
        }else{window.alert("Informações incompatíveis")}
    }
    function imprimirarray(){
        document.getElementById('impressao').innerHTML = vetorcadastro.join('<br>')
    }
    function produtoscadastrados(){
        document.getElementById('qtdcadastro').innerHTML = "A quantidade de produtos cadastrados é igual a: " + qtdprodutos
    }