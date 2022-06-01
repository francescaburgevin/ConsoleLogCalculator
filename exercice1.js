const firstNum = window.prompt(`Merci d'entrer un numéro.`);
while(isNaN(firstNum)){window.prompt(`Vous n'avez pas entré un numéro valide. Merci de réessayer!`);}

const operator = window.prompt(`Sélectionnez maintenant un opérateur.`);
while((operator != "+") && (operator != "-") && (operator != "*") && (operator != "/")){window.prompt(`Vous n'avez pas entré un opérateur valide. Merci de réessayer!`);}

const secondNum = window.prompt(`Finalement, entrez un deuxième numéro.`);
while(isNaN(secondNum)){window.prompt(`Vous n'avez pas entré un numéro valide. Merci de réessayer!`);}

console.log(`${firstNum} ${operator} ${secondNum}`);
let total = 0;

switch (operator) {
    case "+":
        total = Number(firstNum)+Number(secondNum);        
        break;

        case "-":
            total = Number(firstNum)-Number(secondNum);        
            break;

            case "*":
                total = Number(firstNum)*Number(secondNum);        
                break;

                case "/":
                    total = Number(firstNum)/Number(secondNum);        
                    break;

        default: console.log(`erreur`);
        break;
}

console.log(total);
