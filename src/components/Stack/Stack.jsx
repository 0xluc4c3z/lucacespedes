import React from 'react'
import './Stack.css'

export const Stack = () => {
  return (
    <div>
      <p id='stack'>Stack</p>
      <div id='container-stack'>
        <div id='box-stack'>
          <label>Blockchain</label>
          <p className='item'>Solidity</p>
          <p className='item'>Hardhat</p>
          <p className='item'>Truffle</p>
        </div>
        <div id='box-stack'>
          <label>Frontend</label>
          <p className='item'>React</p>
          <p className='item'>Next</p>
          <p className='item'>Ethers</p>
        </div>
        <div id='box-stack'>
          <label>Backend</label>
          <p className='item'>Javascript</p>
          <p className='item'>Typescript</p>
        </div>
      </div>
    </div>
  )
}
