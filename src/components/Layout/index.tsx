import React from 'react'
import './styles.scss'
import { LayoutComponent } from "../../hooks/tipos"


export function Layout(props: LayoutComponent) {
  return (
    <div className="container-principal">
      <div className="container-login">
        <div className="wrap-login">
          {props.children}
        </div>
      </div>
    </div>
  )

}