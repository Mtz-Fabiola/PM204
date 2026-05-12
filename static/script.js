function verificar(){

    let r1 =
    document.getElementById("p1").value;

    let r2 =
    document.getElementById("p2").value;

    if(r1 == "3" && r2 == "0"){

        document.getElementById("resultado")
        .innerHTML = `

        <h3> Correcto</h3>

        <label>
        <input type="checkbox">
        Estoy comprometido
        </label>

        <br><br>

        <a href="/notas">
        Ir al Oráculo de las Notas
        </a>
        `;

    }else{

        document.getElementById("resultado")
        .innerHTML =
        "<h3> Respuestas incorrectas</h3>";
    }

}

function verificarNotas(){

    let r1 =
    document.getElementById("n1").value;

    let r2 =
    document.getElementById("n2").value;

    if(r1.toLowerCase() == "github"
    && r2.toLowerCase() == "video reportes"){

        document.getElementById("resultadoNotas")
        .innerHTML = `

        <h3> Correcto</h3>

        <label>
        <input type="checkbox">
        Estoy comprometido
        </label>

        <br><br>

        <a href="/skills">
        Ir a Skills
        </a>
        `;

    }else{

        document.getElementById("resultadoNotas")
        .innerHTML =
        "<h3> Respuestas incorrectas</h3>";
    }

}
function verificarSkills(){

    let r1 =
    document.getElementById("s1").value;

    let r2 =
    document.getElementById("s2").value;

    if(r1.toLowerCase() == "react native"
    && r2.toLowerCase() == "api"){

        document.getElementById("resultadoSkills")
        .innerHTML = `

        <h3> Correcto</h3>

        <label>
        <input type="checkbox">
        Estoy comprometido
        </label>

        <br><br>

        <a href="/timeline">
        Ir a Timeline
        </a>
        `;

    }else{

        document.getElementById("resultadoSkills")
        .innerHTML =
        "<h3> Respuestas incorrectas</h3>";
    }

}