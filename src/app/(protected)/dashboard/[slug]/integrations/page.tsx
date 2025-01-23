import { INTEGRATION_CARDS } from '@/constants/integrations'
import IntegrationCard from './_components/integration-card/page'
import React from 'react'

type Props = {
    
}

const Page = (props: Props) => {
  return (
    <div className="flex justify-center">
        <div className="flex flex-col w-full lg:w-8/12 gap-y-5">
        {
            INTEGRATION_CARDS.map((card, idx) => (
                <IntegrationCard key={idx} {...card} />
            ))
        }
        </div>
    </div>
  )
}

export default Page