import {
    Checkbox, CheckboxGroup,
    Heading,
    Flex,
} from '@chakra-ui/react';


export default function CheckBox() {
    return (

        <Flex mt={3}>
            <Checkbox size='md' mr={2.5} mb={6} border={1} defaultChecked></Checkbox>
            <Heading fontSize={13} color={'white'} fontWeight={5} >
                Confirmo que eu tenho pelo menos  18 anos de idade e que eu li<br /> e entendi o <strong>Acordo de Licença do Usuário Final e a Política<br /> de Privacidade.</strong>
            </Heading>

        </Flex>


    );
}