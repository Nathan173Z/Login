import React from 'react';
import 
    {HStack,
     Flex, 
     Box, 
     Heading, 
     Stack, 
     FormControl, 
     FormLabel, 
     Input, Checkbox, 
     Link, 
     ChakraProvider,
     Button } from '@chakra-ui/react'


const Login =() => {
    return (
        <ChakraProvider>
        <HStack 
        w="full" 
        h="108vh">
            <Flex 
            w="full"
             h="full" 
             display={{base: 'none', md: 'flex'}}
             borderRightWidth={1}>          
                <Box 
                objectFit="cover"
                w="full"
                h="full"
                bgColor="gray.800"
                /> 
            <Link
            fontSize ="6em" 
           pos="absolute" bottom="4em" left="1.5em"
                color="purple.500" 
                s
                >Criar conta</Link>
            
            
            </Flex>
            <Flex 
            w="full"
             align="center" 
             justify="center">
                <Stack w="full"
                 maxW="xl" spacing={6}
                  p={6}>
                    <Heading fontSize ="2em" 
                    textAlign="center" 
                    color="purple.500">
                        FAÇA SEU LOGIN
                    </Heading>
                    <FormControl id="user">
                        <FormLabel>E-mail</FormLabel>
                        <Input 
                        placeholder="example@gmail.com" />
                    </FormControl>
                    <FormControl 
                    id="password">
                        <FormLabel >Senha</FormLabel>
                        <Input 
                        type="password" 
                        placeholder="............." />
                    </FormControl>
                    <Stack 
                    spacing={4} 
                    direction="row" 
                    aling="start" 
                    justify="space=between">
                        <Checkbox 
                        colorSheme="purple"
                         >Lembrar senha
                         </Checkbox>
                        <Link 
                        color="purple.500" 
                        >Esqueceu a senha?</Link>
                        </Stack>

                        <Button colorScheme="purple">Entrar</Button>
                </Stack>
            </Flex>
        </HStack>
        </ChakraProvider>
)
};

export default Login;