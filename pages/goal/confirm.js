import Head from 'next/head'

import { CallOutline,MailOutline,LocationOutline} from 'react-ionicons';
import { GoalForm } from './goalForm';
import { Header} from '../../components';





export default function Confirm() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-br from-primary to-primary-light">
      <Head>
        <title>careit - here's a cool title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Reach your goal"/>
     <div className='min-w-full flex flex-col  justify-center items-center flex-1 bg-white'>
        


      </div>

     
    </div>
  )
}


