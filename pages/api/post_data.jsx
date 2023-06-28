import { supabase } from '../../lib/supabaseClient'

export default async function handler(request, response) {
  // logiki gia save stop db

  if(request.method === 'POST') {

    const { car_id, car_data } = request.body

    console.log(car_id, car_data)

    const { data, error } = await supabase
      .from('models')
      .insert({
        car_id: car_id,
        data: car_data
      })

    response.status(200).send({ data, error })
  } else {
    response.status(400).send({error: 'Bad Request'})
  }
}