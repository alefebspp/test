import { useContext } from 'react';
import { EmployeeContext } from '../../context/EmployeeContext';
import { FaUserCircle } from 'react-icons/fa';
import Title from '../common/Title';
import '../../styles/css/Main.css';
import EditPopover from '../common/Popover/EditPopover';
import { Input } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
const EmployeeInfo = () => {
  const { employee } = useContext(EmployeeContext);
  const {
    register,
    formState: { isDirty, isValid }
  } = useForm({
    defaultValues: {
      firstName: employee?.firstName
    },
    mode: 'onChange'
  });

  return (
    <>
      {employee ? (
        <div className="employeeInfo">
          <Title
            icon={FaUserCircle}
            title={`${employee.firstName}` + ' ' + `${employee.lastName}`}
          />
          <div className="employeeInfo__infos">
            <div className="employeeInfo__info">
              <p className="employeeInfo__info__text">
                Nome: {employee.firstName}
              </p>
              <EditPopover>
                <form className="employeeInfo__info__form" action="">
                  <div>
                    <label htmlFor="">Editar Nome</label>
                    <Input
                      {...register('firstName', { required: true })}
                      type="text"
                      variant="outline"
                    />
                  </div>
                  {!isDirty || !isValid ? (
                    <button disabled className="registerForm__disabledButton">
                      Atualizar
                    </button>
                  ) : (
                    <button className="registerForm__button">Atualizar</button>
                  )}
                </form>
              </EditPopover>
            </div>
            <div className="employeeInfo__info">
              <p className="employeeInfo__info__text">
                Sobrenome: {employee.lastName}
              </p>
              <EditPopover></EditPopover>
            </div>
            <div className="employeeInfo__info">
              <p className="employeeInfo__info__text">Idade: {employee.age}</p>
              <EditPopover></EditPopover>
            </div>
            <div className="employeeInfo__info">
              <p className="employeeInfo__info__text">
                Cargo: {employee.profession}
              </p>
              <EditPopover></EditPopover>
            </div>
            <div className="employeeInfo__info">
              <p className="employeeInfo__info__text">
                Setor: {employee.sector}
              </p>
              <EditPopover></EditPopover>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default EmployeeInfo;
