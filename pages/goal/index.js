import Head from 'next/head'

import { CallOutline,MailOutline,LocationOutline} from 'react-ionicons';
import { GoalForm } from './goalForm';
import { Header} from '../../components';

const ProfileContainer = ({fname,lname,title,rate,phone,address,email,profilePic}) => {

  return (
    <div className='min-w-full bg-white shadow-md rounded-md flex flex-col mt-16 px-2 pt-2 z-10'>
      <div className='flex flex-row'>
        <img className='ml-2 w-1/3 rounded-xl -mt-6 mb-4' src={profilePic}/>
        <div className='flex flex-col pt-2 px-4 font-body'>
          <div className='text-primary text-xl font-semibold'>{`${fname} ${lname}`}</div>
          <div className='text-md text-gray-400 mb-1'>{title}</div>
          <div className='text-md'>{`$${rate/100.00} / hour`}</div>
        </div>
      </div>
      <div className='flex flex-row text-sm font-body -mt-1'>
        <div className='flex flex-col p-2'>
          <div className='flex flex-row items-center'>
          <CallOutline color="#FFB039" height="15px"/>
          {phone}</div>
          <div className='flex flex-row items-center'>
            <MailOutline color="#FFB039" height="15px"/>
            {email}</div>
        </div>
        <div className='p-2 flex flex-row items-baseline'>
          <LocationOutline color="#FFB039" height="15px"/>
          {address}
        </div>
      </div>
    </div>
  )

}



export default function Goal() {
  const User = {
    fname : 'Tom',
    lname : 'Bryant',
    title : 'Bounty Hunter',
    rate : 2000,
    phone : '1800-call-me',
    address : '54 Made Up Lane, Plano TX 123456',
    email : 'tom@bountyhunter.org',
    profilePic : 'default.jpeg'
    
  }

  const Blurb = `The company will guarantee at least 10 shifts with a bonus of $4/hr to help reach your goal within the timeframe you entered.`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-br from-primary to-primary-light">
      <Head>
        <title>careit - here's a cool title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
     <div className='min-w-full flex flex-col  justify-center items-center flex-1'>
        <div className='flex-1 flex justify-start items-center flex-col bg-white min-w-full -mb-2 px-4 pb-10'>
        <ProfileContainer {...User}/>
        <div className='flex flex-col min-w-full pt-4 pl-1'>
          <div className='text-bold font-body text-gray-500 font-semibold '>Set a Goal</div>
          <div className='text-bold font-body text-gray-500'>Enter details below to add a goal</div>
          <div className='pt-4'>
          <GoalForm/>
          </div>
          <div className='mt-4 p-2'>
            {Blurb && <div className='text-gray-400 text-small font-semibold text-center'>
              {Blurb}
              </div>}
          </div>
        </div>
        </div>


      </div>

     
    </div>
  )
}


