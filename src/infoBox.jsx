import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";

export default function InfoBox({ info }) {

  const HOT_URL =
    "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

  const RAIN_URL =
    "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=hOE6L7f7OoSKUW1Q4tR27GoEkOU_ywKJGCvSO77SeZg=";

  const COLD_URL =
    "https://images.unsplash.com/photo-1674407866481-a39b2239f771?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

  return (
    <div className='InfoBox'>
      <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 80 ? RAIN_URL : info.temp > 15? HOT_URL : COLD_URL}
            title="weather forecast"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography variant="body2" color='text.secondary' component={"span"}>
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}%</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>The weather can be described as <i>{info.weather}</i>, feels like {info.feelslike}&deg;C</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
