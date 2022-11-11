import { useGetEmployeesQuery } from './features/api/apiSlice';

function App() {
  const { data } = useGetEmployeesQuery();
  function teste() {
    console.log(data);
  }
  return <div onClick={teste}>teste</div>;
}

export default App;
