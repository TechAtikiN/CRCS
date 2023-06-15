import { useRouter } from 'next/router'
import { ChartBarIcon, Cog6ToothIcon, HomeIcon, QuestionMarkCircleIcon, QueueListIcon } from '@heroicons/react/24/solid'

import Link from 'next/link'
import { BuildingLibraryIcon } from '@heroicons/react/24/outline'
import { useUserStore } from '@/store/UserStore'

const adminLinks = [
  {
    name: 'Dashboard',
    href: '/',
    icon: <HomeIcon />
  },
  {
    name: 'Analytics',
    href: '/analytics',
    icon: <ChartBarIcon />
  },
  {
    name: 'Society Listing',
    href: '/listing',
    icon: <QueueListIcon />
  },
  {
    name: 'Help',
    href: '/help',
    icon: <QuestionMarkCircleIcon />
  },
  {
    name: 'Settings',
    href: '/settings',
    icon: <Cog6ToothIcon />
  }
]

const userLinks = [
  {
    name: 'Dashboard',
    href: '/home',
    icon: <HomeIcon />
  },
  {
    name: 'View Forms',
    href: '/forms',
    icon: <ChartBarIcon />
  },
  {
    name: 'Society Details',
    href: '/society-details',
    icon: <BuildingLibraryIcon />
  },
  {
    name: 'Grivances',
    href: '/grivances',
    icon: <QueueListIcon />
  },
]

const user = {
  name: 'Anna Doe',
  email: 'annadoe@gmail.com',
  profileImg: 'https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg'
}

const SideBar = () => {

  const router = useRouter()
  const currentPath = router.pathname.split('/')[1]
  const role = useUserStore(state => state.user)

  if (role === 'ADMIN') {
    return (
      <div className='min-h-screen p-5'>
        <div className='flex space-x-4 ml-6 mx-auto cursor-pointer'>
          <img className='h-7 w-7' src='https://mscs.dac.gov.in/images/MSCS_LOGO.png' alt='' />
          <h1 className='text-white font-bold text-xl'>CRCS.</h1>
        </div>

        <div className='flex flex-col space-y-6 mt-10'>
          {adminLinks.map(link => (
            <Link
              href={link.href}
              key={link.name}
              className={`${link.href.split('/')[1] === currentPath ? 'text-white' : 'text-gray-400'} hover:text-white hover:scale-105 font-bold`}
            >
              <div className='flex space-x-4'>
                <p className='h-6 w-6'>{link.icon}</p>
                <p>{link.name}</p>
              </div>
            </Link>
          ))}
        </div>

        <Link href={'/settings'} className='flex absolute bottom-10 hover:scale-105 cursor-pointer justify-start space-x-4 items-center'>
          <img className='h-9 w-9 rounded-full' src={user.profileImg} alt='profile-img' />
          <div className='flex flex-col'>
            <p className='text-white font-semibold'>{user.name}</p>
            <p className='text-gray-400 text-md'>{user.email}</p>
          </div>
        </Link>

      </div>
    )
  } else {
    return (
      <div className='min-h-screen p-5'>
        <div className='flex space-x-4 ml-6 mx-auto cursor-pointer'>
          <img className='h-7 w-7' src='https://mscs.dac.gov.in/images/MSCS_LOGO.png' alt='' />
          <h1 className='text-white font-bold text-xl'>CRCS.</h1>
        </div>

        <div className='flex flex-col space-y-6 mt-10'>
          {userLinks.map(link => (
            <Link
              href={link.href}
              key={link.name}
              className={`${link.href.split('/')[1] === currentPath ? 'text-white' : 'text-gray-400'} hover:text-white hover:scale-105 font-bold`}
            >
              <div className='flex space-x-4'>
                <p className='h-6 w-6'>{link.icon}</p>
                <p>{link.name}</p>
              </div>
            </Link>
          ))}
        </div>

        <Link href={'/settings'} className='flex absolute bottom-10 hover:scale-105 cursor-pointer justify-start space-x-4 items-center'>
          <img className='h-9 w-9 rounded-full' src={user.profileImg} alt='profile-img' />
          <div className='flex flex-col'>
            <p className='text-white font-semibold'>{user.name}</p>
            <p className='text-gray-400 text-md'>{user.email}</p>
          </div>
        </Link>

      </div>
    )
  }
}

export default SideBar
