import React, { useEffect, useState } from 'react';
import { Header } from 'src/components/Map/MapHeader';
import { Map } from 'src/components/Map';
import { Helmet } from 'react-helmet-async';

const _LoginPage = () => {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('https://localhost:8080/resources/users');
      const { users } = await response.json();
      setEventData(users);
    };
    fetchEvents().finally(() => {
      setLoading(false);
    });
  }, [eventData, loading]);

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>Map | MRV Consultas Tributárias</title>
        <meta name="description" content="Google map React demo" />
      </Helmet>

      <Header />
      <Map eventData={eventData} />
    </div>
  );
};

const MapPage = React.memo(_LoginPage);
export default MapPage;
