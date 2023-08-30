import React from 'react'
import Image from 'next/image'
import {HomeIcon,LightningBoltIcon,CollectionIcon,SearchIcon,BadgeCheckIcon,UserIcon} from '@heroicons/react/outline'
import HeaderItem from './HeaderItem'

const Header = () => {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
      <div className='flex flex-grow  items-center justify-evenly max-w-2xl'>
        <HeaderItem title='HOME' Icon={HomeIcon}/>
        <HeaderItem title='TREDING' Icon={LightningBoltIcon}/>
        <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon}/>
        <HeaderItem title='COLLECTIONS' Icon={CollectionIcon}/>
        <HeaderItem title='SEARCH' Icon={SearchIcon}/>
        <HeaderItem title='ACCOUNT' Icon={UserIcon}/>

      </div>
      <Image 
      className='object-contain '
      src="https://links.papareact.com/ua6" width={200} height={100} alt='hullu logo' />
    </header>

  )
}

export default Header