import PaymentButton from '../payement-button'
import React from 'react'

type Props = {}

const UpgradeCard = (props: Props) => {
  return (
    <div className='bg-[#252525] p-3 rounded-3xl flex flex-col gap-y-3'>

        <span className='text-sm'>
            Upgrade to {" "}
            <span
            className="bg-gradient-to-r
            from-[#CC3BD4]
            to-[#D064AC]
            font-bold
            bg-clip-text
            text-transparent">
            Smart AI
        </ span>
        </span>
        
        <p className='text-[#9B9CA0] text-sm font-light'>
            Get access to all premium features
        </p>

        <PaymentButton/>
    </div>
  )
}

export default UpgradeCard