import { useForm } from 'react-hook-form';
import { Input, Icon } from '@chakra-ui/react';
import { FaUserCircle } from 'react-icons/fa';
import { usePostEmployeeMutation } from '../../features/api/apiSlice';
import '../../styles/css/RegisterEmployee.css';
import useToastMessage from '../../hooks/useToastMessage';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
    reset
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      age: '',
      profession: '',
      sector: ''
    },
    mode: 'onChange'
  });

  const [postEmployee] = usePostEmployeeMutation();
  const { handleToastSuccessMessage, handleToastErrorMessage } =
    useToastMessage();
  const handlePostEmployee = data => {
    try {
      postEmployee({
        firstName: data.firstName,
        lastName: data.lastName,
        age: data.age,
        profession: data.profession,
        sector: data.sector
      });
      reset();
      handleToastSuccessMessage(
        'Funcionário cadastrado!',
        'O funcionário foi criado com sucesso!'
      );
    } catch (error) {
      handleToastErrorMessage(
        'Impossível Cadastrar...',
        'Foi impossível cadastrar o funcionário.'
      );
    }
  };

  return (
    <div className="register">
      <div className="register__titleGroup">
        <Icon boxSize={8} color="#06283D" as={FaUserCircle} />
        <h1 className="register__titleGroup__title">Registre um funcionário</h1>
      </div>

      <form
        id="form"
        onSubmit={handleSubmit(data => handlePostEmployee(data))}
        className="registerForm"
        action=""
      >
        <div className="registerForm__input">
          <label className="registerForm__input__label">Nome</label>
          <Input
            {...register('firstName', { required: true })}
            variant="outline"
            size="md"
            type="text"
            focusBorderColor="#06283D"
            autoComplete="off"
          />
        </div>

        <div className="registerForm__input">
          <label className="registerForm__input__label">Sobrenome</label>
          <Input
            {...register('lastName', { required: true })}
            variant="outline"
            size="md"
            focusBorderColor="#06283D"
            type="text"
            autoComplete="off"
          />
        </div>
        <div className="registerForm__input">
          <label className="registerForm__input__label">Idade</label>
          <Input
            {...register('age', { required: true })}
            variant="outline"
            size="md"
            focusBorderColor="#06283D"
            type="number"
            autoComplete="off"
          />
        </div>
        <div className="registerForm__input">
          <label className="registerForm__input__label">Profissão</label>
          <Input
            {...register('profession', { required: true })}
            variant="outline"
            size="md"
            focusBorderColor="#06283D"
            type="text"
            autoComplete="off"
          />
        </div>
        <div className="registerForm__input">
          <label className="registerForm__input__label">Setor</label>
          <Input
            {...register('sector', { required: true })}
            variant="outline"
            size="md"
            focusBorderColor="#06283D"
            type="text"
            autoComplete="off"
          />
        </div>
        {!isDirty || !isValid ? (
          <button disabled className="registerForm__disabledButton">
            Registrar
          </button>
        ) : (
          <button className="registerForm__button">Registrar</button>
        )}
      </form>
    </div>
  );
};

export default Form;
