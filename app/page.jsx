'use client'

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import styles from './page.module.scss';

const Home = () => {
  const [models, setModels] = useState([]);

  const getData = async () => {
    const { data, error } = await supabase.from('models').select();
    console.log(data, error);
    setModels(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDownload = () => {
    const csvContent = models
      .map((model) => {
        const dataTemp = JSON.parse(model.data);
        const modelData = dataTemp.map((info) => JSON.parse(info));
        const rowData = modelData.map((e) =>
          Object.values(e).join(',')
        );
        return rowData.join('\n');
      })
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.home}>
      {models?.map((model) => (
        <ModelCard key={model.id} modelData={model} onDownload={handleDownload} />
      ))}
    </div>
  );
};

export default Home;

const ModelCard = ({ modelData, onDownload }) => {
  const [info, setInfo] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const dataToBeReturned = [];
    const dataTemp = JSON.parse(modelData.data);

    dataTemp.forEach((info) => {
      dataToBeReturned.push(JSON.parse(info));
    });

    setInfo(dataToBeReturned);
  }, []);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.modelCard}>
      <p className={styles.carId}>{modelData.car_id}</p>
      {isExpanded && (
        <div className={styles.modelData}>
          {info?.map((e, index) => (
            <div className={styles.dataRow} key={index}>
              <p className={styles.dataItem}>Time: {e.time}</p>
              <p className={styles.dataItem}>Speed: {e.speed}</p>
              <p className={styles.dataItem}>RPM: {e.rpm}</p>
              <p className={styles.dataItem}>Coolant: {e.coolant}</p>
              <p className={styles.dataItem}>Air Status: {e.air_status}</p>
              <p className={styles.dataItem}>MAF: {e.maf}</p>
              <p className={styles.dataItem}>Throttle Position: {e.throttle_position}</p>
            </div>
          ))}
          <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={onDownload}>Download CSV</button>
        </div>
      )}

      <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={handleExpand}>{isExpanded ? 'Collapse' : 'Expand'}</button>
    </div>
   
  );
};