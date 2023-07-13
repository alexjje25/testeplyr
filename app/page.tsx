"use client";

import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
  rem,
  Grid,
  Image
} from '@mantine/core';
import { useEffect, useState } from 'react';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundPosition: 'right', // Posição da imagem fixada no lado direito
    backgroundSize: 'contain',
    backgroundImage: 'url(/imgTeste.png)',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  },
  form: {
    
    minHeight: rem(900),
    maxWidth: rem(650),
    paddingTop: rem(80),
    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },
  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
  errorMessage: {
    fontSize: 2, // Define o tamanho da fonte para 10 pixels
    color: theme.colors.red[7], // Define a cor do texto de erro
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#fff',
    fontSize: 24,
    color: '#666666',
  },

}));

export default function HomeBanner() {
  const { classes } = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const scrollElement = document.documentElement;
    scrollElement.style.overflow = 'hidden';

    return () => {
      scrollElement.style.overflow = 'auto';
    };
  }, []);

  const schema = yup.object().shape({
    nome: yup.string().required('O nome é obrigatório'),
    email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
    celular: yup.string().required('O celular é obrigatório'),
    password: yup.string().required('Campo obrigatório'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'As senhas devem coincidir'),
    nomeClube: yup.string().required('O nome do clube é obrigatório'),
    termos: yup.boolean().oneOf([true], 'Você precisa aceitar os termos e condições'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return (
      <div className={classes.loading}>
        <span>Carregando...</span>
      </div>
    );
  }

  return (
    <div className={classes.wrapper} >
      <Paper className={classes.form} radius={0} p={50} >
        <Image maw={130}  ta="left" radius="md" src="./Plyrme.png" alt="Random image" />
        <Title order={2} className={classes.title} ta="left" mt="md" mb={50} style={{fontSize:'18px', color:'#666666'}}>
        Crie seu clube na plyr.me
        </Title>
        <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '-43px' }}>
          <TextInput
            label="Nome"
            placeholder="Digite seu Nome"
            size="md"
            error={errors.nome?.message}
            {...register('nome')}
          />
          <Grid>
            <Grid.Col span={6}>
              <TextInput label="Email" placeholder="Digite seu email" size="md" {...register('email')} error={errors.email?.message} />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput label="Celular/Whatsapp" placeholder="(00)00000-0000" size="md" {...register('celular')} error={errors.celular?.message} />
            </Grid.Col>
            <Grid.Col span={6}>
              <PasswordInput label="Senha" placeholder="Digite sua senha" mt="md" size="md" {...register('password')} error={errors.password?.message} style={{ marginTop: '-10px' }} />
            </Grid.Col>
            <Grid.Col span={6}>
              <PasswordInput label="Confirme sua senha" placeholder="Digite sua senha novamente" mt="md" size="md" {...register('nomeClube')} error={errors.confirmPassword?.message} style={{ marginTop: '-10px' }} />
            </Grid.Col>
          </Grid>
          <TextInput
            label="Nome do seu clube"
            placeholder="Digite o nome do seu clube"
            size="md"
            {...register('nomeClube')}
            error={errors.nomeClube?.message}
          />
          <Checkbox
            label="Aceito os Termos e Condições da Plyr.me e confirmo que não publicarei conteúdo adulto no meu clube."
            mt="xs"
            size="xs"
            {...register('termos')}
            error={errors.termos?.message}
          />
          <Button fullWidth mt="xl" size="md" gradient={{ from: 'orange', to: 'red' }} variant="gradient" type="submit" style={{width:'50%'}}>
            Login
          </Button>
        </form>
        <Text ta="left" mt="xs" size="xs">
          Já tem um clube?{' '}
          <Anchor<'a'> href="#" weight={700} onClick={(event) => event.preventDefault()} style={{ color: 'orange' }}>
            Faça o login
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
}
