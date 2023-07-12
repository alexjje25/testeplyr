import { useForm } from 'react-hook-form';
import { Checkbox, useMantineTheme, Text, TextInput, Button, Container, Anchor } from '@mantine/core';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Image from 'next/image';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  clubName: string;
  terms: boolean;
}

const schema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  email: yup.string().required('Campo obrigatório').email('Email inválido'),
  password: yup.string().required('Campo obrigatório'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'As senhas devem coincidir'),
  phone: yup.string().required('Campo obrigatório'),
  clubName: yup.string().required('Campo obrigatório'),
  terms: yup.boolean().oneOf([true], 'Você deve aceitar os termos e condições'),
});

export default function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const theme = useMantineTheme();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };


  return (
    <div style={{ display: 'flex', width: '100%', height: '100%' }}>
      <div style={{ flex: 1, paddingLeft: '38px', paddingTop: '30px' }}>
        <div >
          <Image src="/Plyrme.png" alt="Descrição da imagem" width={110} height={40} />
        </div>
        <Text component="h1" size="xl" >Crie seu clube</Text>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Text component="h1" size="xl">Meu Formulário</Text>
          <TextInput label="Nome" id="name" {...register('name')} placeholder='Digite seu nome' error={errors.name?.message} />
          <div style={{ display: 'flex', gap: '20px' }}>
            <TextInput label="Email" id="email" {...register('email')} placeholder='Digite seu E-mail' error={errors.email?.message} style={{ width: '50%' }} />
            <TextInput label="Celular/Whatsapp" id="phone" {...register('phone')} placeholder='Digite seu número de celular' error={errors.phone?.message} style={{ width: '50%', marginTop: '9px' }} />
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            
            <TextInput label="Senha" id="password" {...register('password')} type="password" placeholder='Digite sua senha' error={errors.password?.message} style={{ width: '50%', marginTop: '9px' }} />
            <TextInput label="Confirme sua senha" id="confirmPassword" {...register('confirmPassword')} type="password" placeholder='Digite sua senha novamente' error={errors.confirmPassword?.message} style={{ width: '50%', marginTop: '9px' }} />
          </div>
          <div >
            <TextInput
              label="Nome do seu clube"
              id="clubName"
              {...register('clubName')}
              placeholder='Digite o nome do seu clube'
              error={errors.clubName?.message}
              style={{ marginTop: '9px' }}
            />
          </div>
          <Checkbox
          style={{marginTop:'10px'}}
            label={
              <>
                Aceito os{' '}
                <Anchor href="https://mantine.dev" target="_blank" style={{color: 'orange'}}>
                  Termos e Condições
                </Anchor> {' '}
                da Plyr.me e confirmo que não publicarei conteúdo adulto no meu clube.
                
              </>
            }
          />
          <Button type="submit" variant="gradient" gradient={{ from: 'orange', to: 'red' }} style={{ marginTop: '20px' }}>CRIAR CONTA</Button>
        </form>
      </div>
      <div style={{ flex: 1, marginLeft: '20px', position: 'relative', padding: '130px' }} className='divWrapper'>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
          <Image src="/imgTeste.png" alt="Descrição da imagem" layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
}
