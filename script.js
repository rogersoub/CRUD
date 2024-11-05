const nameInp = document.getElementById('nameInput');//pega a parte da lista
class Name{
    constructor(){
        this.names = []//atributo array 
    }

//MÉTODO QUE ADICIONA
    add(){
        const name = nameInp.value.trim();//trim tira os espaços fora do digitado
        if(name){
            this.names.push(name);
            nameInp.value = "";//limpa o input
            this.reading();
            console.log(this.names.push(name));
        }else{
            alert('Colocar o modal');
        }
}

//MÉTODO QUE LISTA
    reading(){
        const table = document.getElementById('nameList');//ul
        table.innerHTML="";//limpa a lista

        this.names.forEach((nameF,i)=>{//função anonima para cada item do array, onde pega/usa de calback o nome e o indice
            const li = document.createElement('li');//criando cada lu
            li.textContent = nameF;//texto de cada li vai ser o nome

            //btn de atualizar
            const updateBTN = document.createElement('button');
            updateBTN.textContent="Atualizar";
            updateBTN.onclick= () => this.update(i);//função anonima ao clicar. Pega o tal indice 

            //btn de deletar
            const deletBTN = document.createElement('button');
            deletBTN.textContent = "Deletar";
            deletBTN.onclick = () => this.delete(i);

            li.appendChild(updateBTN);//colocando o botoes na li 
            li.appendChild(deletBTN);

            table.appendChild(li)//colonando li na ul

        })

    }

//MÉTODO QUE ATUALIZA
    update(i){
        const newName = prompt("Digite o novo nome");//pega o novo nome
        if(newName){
            this.names[i] = newName.trim();//muda o 
            this.reading();//vai listar o novo
        }
    }

//MÉTODO DE DELETAR
    delete(i){
        this.names.splice(i,1);//deleta o 1 do índice 
        this.reading()//lista novamente
    }


}

//instanciação
const crud = new Name();

