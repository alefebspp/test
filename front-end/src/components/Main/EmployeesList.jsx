import { useGetEmployeesQuery } from '../../features/api/apiSlice';

const EmployeesList = () => {
  const { data } = useGetEmployeesQuery();

  return (
    <div>
      {data?.map(employee => {
        return (
          <div>
            <p>
              Nome: {`${employee.firstName}` + ' ' + `${employee.lastName}`}
            </p>
            <p>Setor:{employee.sector}</p>
          </div>
        );
      })}
    </div>
  );
};

export default EmployeesList;
