import 'tailwindcss/tailwind.css';
import '../styles/global.css';
import Head from 'next/head'

import { StylesProvider, ThemeProvider,createTheme } from '@material-ui/core/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#1769aa',
    },
    secondary: {
      main: '#fbd34c',
    },
  },
});


function MyApp({ Component, pageProps }) {
  return (<>
  <Head>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
    </Head>
    <StylesProvider injectFirst>
    <ThemeProvider theme={theme}>
  <Component {...pageProps} />
  </ThemeProvider>
  </StylesProvider>
  </>
  )
}

export default MyApp
