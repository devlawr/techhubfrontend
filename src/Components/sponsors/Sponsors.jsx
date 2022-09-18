import React from 'react';
import {Typography} from 'antd'
import './sponsorStyle.css';
import {datas} from './data.js';

const {Text} = Typography;


const Sponsor = () => {

    const sponsorData = datas.map(data => (<div key ={data.id}>
        <div> <img  src={data.img_url} alt = {data.title} className = {data.className}/></div>

        <p className='title'>{data.title}</p>
        <Text className='name'>{data.name}</Text>
    </div>))
  return (
<section>
        <h3>Pioneer/Sponsor/s</h3>
    <div className = "sponsors_wrapper">
<div className='container'>
    {sponsorData}

</div>
       
    </div>
    
</section>
  )
}

export default Sponsor