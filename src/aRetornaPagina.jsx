import { BoxCurso1 } from "./componentes/curso1/boxCurso1";
import { BoxCurso2 } from "./componentes/curso2/boxCurso2";
import { BoxCurso3 } from "./componentes/curso3/boxCurso3";

export function RetornaPagina(type) {
    var descricao1 = '';
    var descricao2 = '';
    var descricao3 = '';

    if (type = 1) {
        descricao1 = 'Esse é o curso 1'
        descricao2 = 'Os contéudos desse curso são sobre Matemática'
        descricao3 = 'O preço desse curso é barato'
    } if (type = 2) {
        descricao1 = 'Esse é o curso 2'
        descricao2 = 'Os contéudos desse curso são sobre Geografia'
        descricao3 = 'O preço desse curso é caro'
    } if (type = 3) {
        descricao1 = 'Esse é o curso 3'
        descricao2 = 'Os contéudos desse curso são sobre História'
        descricao3 = 'Esse curso é de graça'
    }

    function Caixa() {
        if (type = 1) {
            return <BoxCurso1 />
        } if (type = 2) {
            return <BoxCurso2 />
        } if (type = 3) {
            return <BoxCurso3 />
        }
    }

    return (
        <div>
            <h1>Sobre os cursos: </h1>
            <br />
            <ul>
                <li>{descricao1}</li>
                <li>{descricao2}</li>
                <li>{descricao3}</li>
            </ul>
            <br />
            <h1>Caixa do curso: </h1>
            <Caixa />
        </div>
    )
}