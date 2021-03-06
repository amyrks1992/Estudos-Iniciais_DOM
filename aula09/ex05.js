 //Exemplo de seleção por TagName ou Marca//
 var p1 = window.document.getElementsByTagName('p')[1]
 // Como temos dois parágrafos, o [0] indica que estamos pegando o primeiro.//
 document.write(p1.innerText)
 // irá mostrar na webpage o texto "interno" do segundo parágrafo sem formatação//
 document.write ("<br />")// quebra de linha em Javascript//
 document.write(p1.innerHTML)
 // irá mostrar na webpage o texto do parágrafo com formatação//

 //Exemplo de seleção por ID//
 var d = window.document.getElementById('msg')
 d.style.background = 'black'// Alteração da cor do background da div//
 d.innerText = 'Mudei o texto através de ID'// Alteração do texto da div//
 
 //Exemplo de seleção por Name//
 var h = window.document.getElementsByName('msg2')[0]
 /* Quando temos métodos com o Elements no plural, 
 precisamos informar um índice.*/
 h.style.background = 'green'

 //Exemplo de seleção por Classe//
 var t = window.document.getElementsByClassName('titulo')[0]
 t.innerText = 'Mudei o texto através de Classe'

 //Exemplo de seleção por Seletor//
 var f = window.document.querySelector('p#frase') 
 /* Para selecionar um ID, seu elemento de consulta é o #. 
 Se quisermos selecionar uma classe, temos que usar o ponto (.) 
 Ambos elementos de sintaxe em CSS*/
 f.style.color = 'orange'