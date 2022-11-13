import { Icon } from '@chakra-ui/react';
import { FaUserCircle, FaTrashAlt, FaEdit } from 'react-icons/fa';

const Employee = ({ employee, divClassName }) => {
  return (
    <div className={divClassName}>
      <div className="employee__nameGroup">
        <Icon color="#06283D" as={FaUserCircle} />
        <p className="employee__name">
          {`${employee.firstName}` + ' ' + `${employee.lastName}`}
        </p>
      </div>
      <div className="employee__sectorGroup">
        <p className="employee__sector">Setor: {employee.sector}</p>
        <div className="employee__iconGroup">
          <Icon color="green" as={FaEdit} />
          <Icon color="red" as={FaTrashAlt} />
        </div>
      </div>
    </div>
  );
};

export default Employee;
