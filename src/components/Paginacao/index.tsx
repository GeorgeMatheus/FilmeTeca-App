import React from "react"
import Pagination from "@material-ui/lab/Pagination"
import { makeStyles } from "@material-ui/core"
import './style.scss'

const useStyles = makeStyles(theme => ({
  root: {
    // position: "fixed",
    // bottom: 0,
    // zIndex: 200,
    backgroundColor: "green",
    padding: "10px 80px",
    color: "white",
    width: "100%"
  },
  containerPag: {
    display: "flex",
    justifyContent: "center",
    alignItens: "center",
    color: "white",
    backgroundColor: "green",
  },
  ul: {
    background: "white"
  }
}))

export const Paginacao = () => {

  return (
    <div>
      <div>
        <Pagination classes={{ul: "pagination-ul", root: "container-pagination"}} style={{
          display: "flex",
          justifyContent: "center",

        }
        } variant="outlined" count={10} color="primary"/>
      </div>

    </div>
  )
}