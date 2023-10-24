const form = document.getElementById('form-calcule')
let primeiro = document.getElementById('primeiroN')
let segundo = document.getElementById('segundoN')

form.addEventListener('submit', function(e) {
    let formEvalido = false;
    e.preventDefault();

    const valido = `O valor do campo B <b>${segundoN.valueAsNumber}</b> é maior do que o valor do campo A <b>${primeiroN.valueAsNumber}</b> ou seja esse formulario é valido`
    const invalido = `O valor do campo B <b>${segundoN.valueAsNumber}</b> é menor do que o valor do campo A <b>${primeiroN.valueAsNumber}</b> ou seja esse formulario é invalido`
    const mvalido =  document.querySelector(`.m-v`);

    if (segundoN.valueAsNumber > primeiroN.valueAsNumber) {
        mvalido.innerHTML = valido;
        mvalido.style.display = `block`;

        primeiroN.value = '';
        segundoN.value = '';


    } else {
        mvalido.innerHTML = invalido;
        mvalido.style.display = `block`;
        mvalido.style.background = `red`;
        

    }
})
