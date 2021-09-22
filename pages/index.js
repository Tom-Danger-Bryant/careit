import Head from 'next/head';

const CompanyLogo = ({name='Company Name', logo}) => {
  
  return <div className='flex flex-col space-y-2 items-center justify-center'>
    <div className='bg-primary rounded-lg flex items-center justify-center text-3xl font-bold font-body text-white' style={{height:'77px',width:'77px'}}>
        CN
    </div>
    <div className='text-xl text-gray-700 font-body'>
      {name}
    </div>


  </div>
}


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-br from-primary to-primary-light">
      <Head>
        <title>careit - here's a cool title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='min-w-full flex flex-col  justify-center items-center flex-1'>
        <div className='flex-1 flex justify-center items-center flex-col'>
          <img src='logo.svg'/>
        </div>
        <div className='flex-1'></div>
      </div>
     
    </div>
  )
}
