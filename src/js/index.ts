let buttonElement: HTMLButtonElement = <HTMLButtonElement>document.getElementById("DoIt")
buttonElement.addEventListener("click", DoManipulation)

function DoManipulation(): void{
    console.log("Try to manipulate string")

    let inputValue: HTMLInputElement = <HTMLInputElement>document.getElementById("Input")
    let input = inputValue.value;

    let operationElement: HTMLSelectElement = <HTMLSelectElement>document.getElementById("Options")
    let operation: string = operationElement.value;

    let OutPutString = String(input)

    let outPutResult = casing(operation, OutPutString)

    let output: HTMLSpanElement = <HTMLSpanElement>document.getElementById("Output")
    output.innerHTML = String(outPutResult)
}

function casing(operation: string, a: string): string{
    console.log("Casing function.")
    
    let resulttemp;

    switch(operation){
      case "Uppercase":
        resulttemp = a.toUpperCase();
        break;

        case "Lowercase":
        resulttemp = a.toLowerCase();
        break;
   }
    return resulttemp;
}