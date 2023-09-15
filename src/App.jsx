import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login } from './Components/Login.jsx'
import { Box, Center, Flex, Text } from '@chakra-ui/react'
import image1 from '../src/assets/images/image1.jpeg';

function App() {
  const containerStyle = {
    position: 'relative',
    width: '30vw',
    height: 'auto', 
    backgroundImage: `url(${image1})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
  };

  return (
    <>
      <Flex   h="80vh"     w="60vw"  mx='20vw' >
        <Box  style={containerStyle} textAlign='center' > 
        <Box  mt={20}> <Text fontSize={25} fontFamily='sans-serif'>Welcome to El-Shoes</Text>
        <Text fontSize={15}pl={15} color='#939393'>For better experience with your shoes!</Text></Box>
         </Box>
     

         <Login />
      </Flex>
      
     
      
    </>
  )
}

export default App
