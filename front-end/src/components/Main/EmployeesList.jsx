import { useGetEmployeesQuery } from '../../features/api/apiSlice';
import '../../styles/css/Main.css';
import Employee from './Employee';
const EmployeesList = () => {
  const { data } = useGetEmployeesQuery();

  return (
    <div className="employees">
      {data?.map(employee => {
        return data.indexOf(employee) % 2 == 0 ? (
          <Employee
            key={employee._id}
            employee={employee}
            divClassName="employee"
          />
        ) : (
          <Employee
            key={employee._id}
            employee={employee}
            divClassName="employee__dark"
          />
        );
      })}
    </div>
  );
};

export default EmployeesList;
