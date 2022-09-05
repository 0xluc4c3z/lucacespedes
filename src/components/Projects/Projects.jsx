import React from 'react'
import './Projects.css'

import { RiExternalLinkLine } from 'react-icons/ri';

export const Projects = () => {


  return (
    <div className='projects-div'>
      <div className="projects-cont">
        <p id='stack'>Projects</p>
        <div id='container-stack'>
          <div id='box-stack'>
            <a className='name' href='https://github.com/Lucacez/ETHPool' target="_blank">ETHPool <RiExternalLinkLine /></a>
            <p className='item item-2'>Service where people can 
            deposit ETH and receive weekly rewards.</p>
          </div>
          <div id='box-stack'>
            <a className='name' href='https://github.com/Lucacez/NFT-Bank-Bills' target="_blank">NFT Bank Bills <RiExternalLinkLine /></a>
            <p className='item item-2'>NFTs representing the coins and banknotes with different denominations.</p>
          </div>
          <div id='box-stack'>
            <a className='name' href='https://github.com/Lucacez/Multisig-Wallet' target="_blank">Multisig Wallet <RiExternalLinkLine /></a>
            <p className='item item-2'>With multiple owners and minimum requirement to approve transactions.</p>
          </div>
        </div>
        <div id='container-stack'>
          <div id='box-stack'>
            <a className='name' href='https://www.lucacez.com/' target="_blank">NFT Auctions <RiExternalLinkLine /></a>
            <p className='item item-2'>Personal blog where I write about solidity and blockhain.</p>
          </div>
          <div id='box-stack'>
            <a className='name' href='https://github.com/Lucacez/electionfrontend' target="_blank">ElectionsSol <RiExternalLinkLine /></a>
            <p className='item item-2'>Decentralized elections using a NTT (non-transferable token) for voting</p>

          </div>
          <div id='box-stack'>
            <a className='name' href='https://github.com/Lucacez' target="_blank">More... <RiExternalLinkLine /></a>
            <p className='item item-2'>Link to my github where you can see all my personal projects I have worked on.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
