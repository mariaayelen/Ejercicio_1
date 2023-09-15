import React from 'react';
import {Box, Input, Heading, Button, Text, VStack, InputGroup, FormControl, Flex, Center } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';


const Login = () => {
    return(
        <>
        <Box  w="65vh" p={20}>
<Heading my={5} fontSize={25}>Sing Up</Heading> 

<VStack spacing={3}>
<Input placeholder='Nombre' />  
<Input placeholder='Apellido' />
<Input placeholder='Password' />

</VStack>
<Button my={8} w="100%" bg="black" color="white">Sing Up</Button>

    
 <Text fontSize={10} textAlign='center' >If feeling lazy?</Text> 
 <Flex  justifyContent="space-between" my={4}>
  <Button bg="#3b5998" color='white' leftIcon={ <FontAwesomeIcon icon={faFacebook} />}>
    Facebook
  </Button>
  <Button  bg='#62a6fb' color='white' px={7} leftIcon={ <FontAwesomeIcon icon={faGoogle} />}  >
    Google</Button>
  </Flex>
  
 <Text textAlign='center' fontSize={10}>Already a acount? <span style={{ fontWeight: 'bold' }}>Sign in</span></Text>
        
 </Box>
            </>
    )
}

export { Login }