import { useQuery, gql } from '@apollo/client';
import { useEffect, useState } from 'react';

const GET_LOCATIONS = gql`
  {
    hello
  }
`;

function DisplayLocations() {
  const [response, setResponse] = useState(null);
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  console.log(useQuery(GET_LOCATIONS));
  useEffect(() => {
    console.log('start');
    console.log(loading, error, data);
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (data) {
    console.log(data);
  }

  return (
    <div key={data.hello}>
      <h3>{data.hello}</h3>
      <br />
      {/* <b>About this location:</b> */}
      <br />
    </div>
  );
}

export default DisplayLocations;
