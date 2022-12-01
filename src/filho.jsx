import React from 'react';

export function Filho([props]) {
    return (
        <>
            <h1 style={{ fontSize: '32px', color: 'pink' }}>FILHO</h1>
            {props.data}
        </>
    )
}