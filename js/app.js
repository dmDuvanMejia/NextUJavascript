//Variable global que define la pantalla de la calculadora
var pantalla = document.getElementById("display");

var calculadora = {

    //Inicialización variables
    //Funcion que inicializa los eventos para aplicar tipo de evento tecla, instancia array de caracteres digitados y el ultimo 
    //numero ingresado

    init: (function(){
        this.eventosteclas();
        this.operacionMatematica = [];
        this.ultimoNumero = ''
    }),

    //Función que verifica los eventos en cada tecla requerida para la operación
    eventosteclas: function(){
        //Tecla 0 
        document.getElementById("0").addEventListener("click", function() { 
           calculadora.asignarNumeroEnPantalla(0, pantalla.innerHTML.length) 
        });
        
        //Tecla 1
        document.getElementById("1").addEventListener("click", function() { 
            calculadora.asignarNumeroEnPantalla(1, pantalla.innerHTML.length)
        });

        //Tecla 2
        document.getElementById("2").addEventListener("click", function() { 
            calculadora.asignarNumeroEnPantalla(2, pantalla.innerHTML.length)
        });

        //Tecla 3
        document.getElementById("3").addEventListener("click", function() { 
            calculadora.asignarNumeroEnPantalla(3, pantalla.innerHTML.length)
        });

        //Tecla 4
        document.getElementById("4").addEventListener("click", function() { 
            calculadora.asignarNumeroEnPantalla(4, pantalla.innerHTML.length)
        });

        //Tecla 5
        document.getElementById("5").addEventListener("click", function() { 
            calculadora.asignarNumeroEnPantalla(5, pantalla.innerHTML.length)
        });

        //Tecla 6
        document.getElementById("6").addEventListener("click", function() { 
            calculadora.asignarNumeroEnPantalla(6, pantalla.innerHTML.length)
        });

        //Tecla 7
        document.getElementById("7").addEventListener("click", function() { 
            calculadora.asignarNumeroEnPantalla(7, pantalla.innerHTML.length)
        });

        //Tecla 8
        document.getElementById("8").addEventListener("click", function() { 
            calculadora.asignarNumeroEnPantalla(8, pantalla.innerHTML.length)
        });

        //Tecla 9
        document.getElementById("9").addEventListener("click", function() { 
            calculadora.asignarNumeroEnPantalla(9, pantalla.innerHTML.length)
        });

        //Tecla punto
        document.getElementById("punto").addEventListener("click", function() { 
            calculadora.asignarNumeroEnPantalla('.', pantalla.innerHTML.length)
        });

        //Limpiar resultado
        document.getElementById('on').addEventListener('click', function(){
            pantalla.innerHTML = '0';
            calculadora.operacionMatematica = []
            calculadora.ultimoNumero = ''
        });

        //Cambiar signo
        document.getElementById('sign').addEventListener('click', function(){
            calculadora.cambiarSigno(pantalla.innerHTML);
        });

        //Sumar
        document.getElementById('mas').addEventListener('click', function(){
            calculadora.ingresarDigitos( '+' );
        });

        //Restar
        document.getElementById('menos').addEventListener('click', function(){
            calculadora.ingresarDigitos( '-' );
        });

        //Multiplicar
        document.getElementById('por').addEventListener('click', function(){
            calculadora.ingresarDigitos( '*' );
        });

        //Dividir
        document.getElementById('dividido').addEventListener('click', function(){
            calculadora.ingresarDigitos( '/' );
        });

        //Raiz
        document.getElementById('raiz').addEventListener('click', function(){
            calculadora.ingresarDigitos( '**' );
        });

        //Igual
        document.getElementById('igual').addEventListener('click', function(){
            calculadora.igual();
        });
    },

    //Se cambia el signo del número en pantalla
    cambiarSigno : function(resultado){
        pantalla.innerHTML = ( parseInt( resultado ) * - 1)
    },

    //Se asigna el número en la pantalla se hace validación de 
    //puntos y la longitud del números
    asignarNumeroEnPantalla : function(numero, longitud){
        document.getElementById(numero).style.transform = 'scale(0.8)';
        if( longitud < 8 ){
            if( longitud === 1 && pantalla.innerHTML === '0' && numero !== '.'){
                pantalla.innerHTML = ''
            }
            
            if( numero === '.' ){
                if( pantalla.innerHTML.indexOf('.') !== -1){
                    return;
                }
            }
            pantalla.innerHTML += numero
            document.getElementById(numero).style.transform = 'scale(1)';
        }
    },

    //Al dar click en los operadores se valida que tipo de operador eligio
    //este se guarda en un array con el numero que se tiene en pantalla
    ingresarDigitos : function( caracter ){
        let signo = ''
        switch( caracter ){
            case '+':
                signo = '+'
                break;
            case '-':
                signo = '-'
                break;
            case '*':
                signo = '*'
                break;
            case '/':
                signo = '/'
                break;
            case '**':
                signo = '** 0.5'
                break;
        }
        let caracterPantalla = pantalla.innerHTML
        let tamanioArreglo = calculadora.operacionMatematica.length
        let oper = calculadora.operacionMatematica
        
        if( caracterPantalla !== ''){
            if( caracterPantalla < 0 ){
                caracterPantalla = '(' + caracterPantalla + ')'
            }
            oper.push( caracterPantalla )
            oper.push( signo )
            calculadora.ultimoNumero = caracterPantalla
        }else{
            this.operacionMatematica.pop()
            this.operacionMatematica.push( signo )
        }
        console.log(this.operacionMatematica)
      
        pantalla.innerHTML = ''
    },

    // Realiza el proceso para mostrar el resultado de la operacion
    igual : function(){
        let caracter = pantalla.innerHTML
        if( caracter !== '' ){
            if( caracter < 0 ){
                caracter = '(' + caracter + ')'
            }

            if( calculadora.ultimoNumero !== '' && this.operacionMatematica.length > 1){
                calculadora.ultimoNumero = caracter
            }
            
            this.operacionMatematica.push( caracter )
        }
        let operacion = this.operacionMatematica.toString()
        operacion = operacion.replace(/,/g, '')
        if( calculadora.ultimoNumero !== '' && this.operacionMatematica.length === 1){
             calculadora.ultimoNumero = calculadora.ultimoNumero.toString().replace('(', '').replace(')', '')
             calculadora.ultimoNumero = parseInt(calculadora.ultimoNumero)
             resultado = eval( parseInt( operacion ) +  parseInt( calculadora.ultimoNumero ) )
        }else{
            resultado = eval(operacion)
        }
        
        if (resultado.toString().length > 8 ){
            resultado = resultado.toString().substring( 8, resultado.length - 1 )
        }
        document.getElementById('display').innerHTML = resultado
        this.operacionMatematica = []
    }
};

calculadora.init();