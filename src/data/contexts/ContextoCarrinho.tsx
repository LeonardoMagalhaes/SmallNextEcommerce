"use client"
import { createContext } from "react"

const ContextoCarrinho = createContext<any>({} as any)

export function ProvedorCarrinho(props: any) {
    return (
        <ContextoCarrinho.Provider value={{ numero: 1000 }}>
            {props.children}
        </ContextoCarrinho.Provider>
    )
}

export default ContextoCarrinho