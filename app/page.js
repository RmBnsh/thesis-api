'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import styles from './page.module.scss'

const Home = () => {
  const [models, setModels] = useState([])

  const get_data = async() => {
    const { data, error } = await supabase
      .from('models')
      .select()

    console.log(data, error)
    setModels(data)
  }

  useEffect(() => {
    get_data()
  }, [])

  return (
    <div className={styles.home}>
      {models?.map(model => (
        <Model modelData={model} key={model.id} />
      ))}
    </div>
  )
}

export default Home

const Model = ({ modelData }) => {
  const [info, setInfo] = useState([])

  useEffect(() => {
    const data_to_be_returned = []
    const data_temp = JSON.parse(modelData.data)

    data_temp.map(info => {
      data_to_be_returned.push(JSON.parse(info))
    })

    setInfo(data_to_be_returned)
  }, [])

  return ( 
    <div className={styles.model}>
      <p>{modelData.car_id}</p>

      {info?.map(e => (
        <div className={styles.model_data}>
          <p>time: {e.time}</p>
          <p>speed: {e.speed}</p>
          <p>rpm: {e.rpm}</p>
          <p>coolant: {e.coolant}</p>
          <p>air_status: {e.air_status}</p>
          <p>maf: {e.maf}</p>
          <p>throttle_position: {e.throttle_position}</p>
        </div>
      ))}
    </div>
  )
}