import {
    Image,
    Flex,
} from '@chakra-ui/react';

export default function Textline() {
    return (
        <Flex
            mt={[-2.5, -2, -2, -2, -2]} ml={[-1, -5, -81 - 0, -81]}>
            <Image
                alt={'reta Image'}
                objectFit={'cover'}
                src={
                    '/reta1.svg'
                }
                w={'50'}
                ml=
                {['10', '55', '40', '40', '40']}
            />

            <Image
                alt={'reta Image'}
                objectFit={'cover'}
                src={
                    '/reta1.svg'
                }
                w={'100'}
                ml={['16', '40', '40', '40', '40']}
            />
        </Flex>
    );
}