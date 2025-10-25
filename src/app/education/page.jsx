import EducationCard from '@/components/cards/home/education/education'
import BackButton from '@/components/ui/back-button'
import React from 'react'

const page = () => {
  return (
      <div className='px-20'>
          <BackButton />
      <EducationCard />
    </div>
  )
}

export default page
