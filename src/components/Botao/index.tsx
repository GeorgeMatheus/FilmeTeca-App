import React from "react";
import './style.scss'

interface TextoBotao {
  children: string
}

export function Botao(props: TextoBotao) {
  return (
    <button className="btn-generico">{props.children}</button>
  )
}