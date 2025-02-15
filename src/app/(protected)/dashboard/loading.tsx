import Loader from '@/components/global/loader'
import React from 'react'

type Props = {}

const Loading = (props: Props) => {
  return (
    <div className='flex justify-center items-end'>
        <Loader state={true}>
            ...loading
        </Loader>
        </div>
  )
}

export default Loading