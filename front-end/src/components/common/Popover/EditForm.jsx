import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input
} from '@chakra-ui/react';

const EditForm = () => {
  return (
    <form id="form" className="registerForm" action="">
      <div className="registerForm__input">
        <label className="registerForm__input__label">Nome</label>
        <Input
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
          variant="outline"
          size="md"
          focusBorderColor="#06283D"
          type="text"
          autoComplete="off"
        />
      </div>

      <button className="registerForm__button">Registrar</button>
    </form>
  );
};

export default EditForm;
