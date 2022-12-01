import { Filho } from "./filho";

function Teste(){
    return <h1>vira homem</h1>
}

export function Pai() {
    return (
        <>
            <h1 style={{ fontSize: '32px', color: 'blue' }}>pai</h1>
            <Filho data={Teste()}/>
        </>
    )
}