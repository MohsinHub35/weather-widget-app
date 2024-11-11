import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Infobox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({ info }) {
  let INIT = "https://images.unsplash.com/photo-1673191898695-8252d409d82c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let HOT_url="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
  let rain_url="https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhaW5pbmd8ZW58MHx8MHx8fDA%3D"
  let Cold_Url="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
  return (
    <div className="InfoBox">
      <div className="card">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} 
          image={info.humidity>80?rain_url:info.temp>15?HOT_url:Cold_Url}
           title="Weather Image" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city }&nbsp;
              {
              info.humidity>80?
              <ThunderstormIcon/>:
              info.temp>15?
              <WbSunnyIcon/>
              :<AcUnitIcon/>}
            </Typography>
            <Typography variant="body2" color="text.secondary" component="span">
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}%</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
            </Typography>
            <Typography>
              The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
