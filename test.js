while (true) {
    let opcao = prompt("Escolha uma opção:\n1. Colocar item\n2. Tirar item\n3. Mostrar estoque\n4. Sair");
    
    switch (opcao) {
      case "1":
        adicionarItem();
        break;
      case "2":
        removerItem();
        break;
      case "3":
        exibirEstoque();
        break;
      case "4":
        alert("Saindo do programa.");
        exit(0);
      default:
        alert("Opção inválida.");
    }
  }


  
switch(colocarItem('1')) {
    case '1':
        push.prompt('Digite o item')
        alert("Adicionar novo item:" + itens (itens.leght - 1))
       break ;
       

}

switch(tirarItem) {
    case '2':
        alert.prompt("Item Removido")
        break;
        
            
}

switch(mostrarEstoque) {
    case '3':
        alert.prompt("Mostrar Estoque")
        break;
                 
}


