import { useForm } from 'react-hook-form';
import { Input, Icon } from '@chakra-ui/react';
import { FaUserCircle } from 'react-icons/fa';
import '../../styles/css/RegisterEmployee.css';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  return (
    <div className="register">
      <div className="register__titleGroup">
        <Icon boxSize={8} color="#06283D" as={FaUserCircle} />
        <h1 className="register__titleGroup__title">Registre um funcionário</h1>
      </div>

      <form
        onSubmit={handleSubmit(data => console.log(data))}
        className="registerForm"
        action=""
      >
        <div className="registerForm__input">
          <label className="registerForm__input__label">Nome</label>
          <Input
            {...register('firstName', { required: 'Campo obrigatório!' })}
            variant="outline"
            size="md"
            type="text"
            focusBorderColor="#06283D"
            autoComplete="off"
          />
          <span className="registerForm__input__error">
            {errors.firstName?.message}
          </span>
        </div>

        <div className="registerForm__input">
          <label className="registerForm__input__label">Sobrenome</label>
          <Input
            {...register('lastName', { required: 'Campo obrigatório!' })}
            variant="outline"
            size="md"
            focusBorderColor="#06283D"
            type="text"
            autoComplete="off"
          />
          <span className="registerForm__input__error">
            {errors.lastName?.message}
          </span>
        </div>
        <div className="registerForm__input">
          <label className="registerForm__input__label">Idade</label>
          <Input
            {...register('age', { required: 'Campo obrigatório!' })}
            variant="outline"
            size="md"
            focusBorderColor="#06283D"
            type="number"
            autoComplete="off"
          />
          <span className="registerForm__input__error">
            {errors.age?.message}
          </span>
        </div>
        <div className="registerForm__input">
          <label className="registerForm__input__label">Profissão</label>
          <Input
            {...register('profession', { required: 'Campo obrigatório!' })}
            variant="outline"
            size="md"
            focusBorderColor="#06283D"
            type="text"
            autoComplete="off"
          />
          <span className="registerForm__input__error">
            {errors.profession?.message}
          </span>
        </div>
        <div className="registerForm__input">
          <label className="registerForm__input__label">Setor</label>
          <Input
            {...register('sector', { required: 'Campo obrigatório!' })}
            variant="outline"
            size="md"
            focusBorderColor="#06283D"
            type="text"
            autoComplete="off"
          />
          <span className="registerForm__input__error">
            {errors.sector?.message}
          </span>
        </div>
        <button className="registerForm__button">Registrar</button>
      </form>
    </div>
  );
};

export default Form;
