import React, {useState, useEffect} from 'react'
import Grid from '@mui/joy/Grid';

const Weather = ()=>{
    const [noti, setNoti] = useState('');
    const [weather, setWeather] = useState();

    const fetchData = async (lat, lon) => {
        try {
          const response = await fetch('http://api.weatherapi.com/v1/current.json?aqi=yes&key=74ef00a2e39b422fad3160613242406&q='+lat+','+lon);
          if (!response.ok) {
            setNoti('Network response was not ok');
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          setWeather(result);
        } catch (error) {
          if (error.name !== 'AbortError') {
            setNoti('AbortError');
          }
        } finally {

        }
      };

    useEffect(()=>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position)=>{
                console.log(position);
                fetchData(position.coords.latitude, position.coords.longitude);
              })
          } else {
            setNoti("Geolocation is not supported by this browser.");
          }
    }, [])


    return (
      <div className='weather'>
      <p>{noti}</p>
      <p>Thời tiết hiện tại</p>
      {
        weather && 
        (
        <><Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid xs={6}>
         <img src={weather.current?.condition?.icon}/>
        <p>{weather.current?.condition?.text}</p>
        </Grid>
        <Grid xs={6}>
        <p>{weather.location?.name}, {weather.location?.country}</p>
        <p>Update: {weather.location?.localtime}</p>
        </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid xs={3}>
        <p>Nhiệt độ: {weather.current?.dewpoint_c}°C</p>
        <p>Cảm giác như: {weather.current?.feelslike_c}°C</p>
        </Grid>
        <Grid xs={3}>
        <p>Sức gió: {weather.current?.gust_kph} km/h</p>
        </Grid>
        <Grid xs={3}>
        <p>Tổng lượng mưa (mm): {weather.current?.precip_mm} mm</p>
        </Grid> 
        <Grid xs={3}>
        <p><strong>Chất lượng không khí:</strong> <br/>
        Carbon Monoxide (μg/m3) <strong>{weather.current?.air_quality?.co}</strong> <br/>
        Ozone (μg/m3) <strong>{weather.current?.air_quality?.o3}</strong> <br/>
        Nitrogen dioxide (μg/m3) <strong>{weather.current?.air_quality?.no2}</strong> <br/>
        Sulphur dioxide (μg/m3) <strong>{weather.current?.air_quality?.so2}</strong> <br/>
        PM2.5 (μg/m3) <strong>{weather.current?.air_quality?.pm2_5}</strong> <br/>
        PM10 (μg/m3) <strong>{weather.current?.air_quality?.pm10}</strong> <br/>
        </p>
        </Grid> 
      </Grid></>
      )
      }
      
    </div>
    )
}

export default Weather;