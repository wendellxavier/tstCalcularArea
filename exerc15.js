function calcularAreaTriangulo(){
    const base = prompt("informe a base do triangulo: ")
    const altura = prompt("informe a altura do triangulo: ")
    return base * altura  / 2
}
function calcularAreaRetangulo(){
    const base = prompt("informe a base do retangulo: ")
    const altura = prompt("informe a altura do retangulo: ")
    return base * altura  
}

function calcularAreaQuadrado(){
    const lado = prompt("informe o lado do quadrado: ")
    return lado * lado
}

function calcularAreaTrapezio(){
    const baseMaior = parseFloat(prompt("informe a base maior do trapezio: "))
    const baseMenor = parseFloat(prompt("informe a base menor do trapezio: "))
    const altura = prompt("informe a base maior do trapezio: ")
    return (baseMaior + baseMenor) * altura / 2
}

function calcularAreaCirculo(){
    const raio = prompt("informe o raio do circulo: ")
    return (3.14 * raio * raio)
}

function exibirMenu(){
    return prompt(
        "Caculadora Geometrica\n" +
        "1. calcular area do triangulo\n" +
        "2. calcular area do retangulo\n" +
        "3. calcular area do quadrado\n" +
        "4. calcular area do trapezio\n" +
        "5. calcular area do circulo\n" +
        "6. sair\n"
    )
}

function executar(){
    let opcao = ""

    do{
        opcao = exibirMenu()
        let resultado

        switch (opcao) {
            case "1":
                resultado = calcularAreaTriangulo()
                break
            case "2":
                resultado = calcularAreaRetangulo()
                break
            case "3":
                resultado = calcularAreaQuadrado()
                break
            case "4":
                resultado = calcularAreaTrapezio()
                break
            case "5":
                resultado = calcularAreaCirculo()
                break
            case "6":
                alert("saindo..")
                break
            default:
                alert("Opção invalida")

        }

        if (resultado){
            alert("resultado: " + resultado)
        }

    } while (opcao !== "6")

}

executar()