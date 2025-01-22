import { AutomationDuoToneWhite } from '@/icons'
import { Button } from '@/components/ui/button'
import Loader from '../loader'
import React from 'react'

type Props = {}

const CreateAutomation = (props: Props) => {
  return (
    <Button
     className='lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70]'
    >
        <Loader state={false}>
            <AutomationDuoToneWhite />
            <p className='lg:inline hidden'>Create a Automation</p>
        </Loader>
    </Button>
  )
}

export default CreateAutomation