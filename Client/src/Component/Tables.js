import React from 'react'
import tables from '..//images/tables.PNG'
import '../styles/tables.css'

export default function Tables() {
  return (
    <div>
        <h3>Plan des tables</h3>
         <div >
          <img src={tables} alt = "tables" className="table" ></img>
          <div className="main-text">
          </div>
        </div>
    </div>
  )
}