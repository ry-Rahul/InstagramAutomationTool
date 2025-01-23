import PaymentCard from './payment-card'
import React from 'react'

type Props = {}

const Billing = (props: Props) => {
  return (
    <>
    <PaymentCard label={'FREE'} current={'FREE'} />
    </>
  )
}

export default Billing