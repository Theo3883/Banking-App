'use client'
import React from 'react'
import PlaidLink from './PlaidLink'

const AddBank = ({user,variant}:PlaidLinkProps) => {
  return (
    <PlaidLink user={user} variant='add_bank'/>
  )
}

export default AddBank