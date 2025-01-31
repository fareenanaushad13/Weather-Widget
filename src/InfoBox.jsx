import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";



import { mobileStepperClasses } from "@mui/material";
const INT_URL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUYBMfAsIDLR-AFmbLvDy0L9LYWldXn3WHJg&s";
const HOT_URL =
  "https://media.azpm.org/master/image/2017/6/22/hero/sun-heat.jpg";
const COLD_URL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFggVYBm3Wwk_TTrPYCFKl2jwqOiGh400H3g&s";
const RAIN_URL =
  "https://yuz.uz/imageproxy/1200x/https://yuz.uz/file/news/5a5fa330b5c2c123c14580f43b1da65d.jpg";

export default function InfoBox({ info }) {
  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 85
                ? RAIN_URL
                : info.temp > 18
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {
                  info.humidity > 90
                    ? <ThunderstormIcon/>
                    : info.temp > 15
                    ? < WbSunnyIcon/>
                    : <AcUnitIcon/>
                
              }
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature: {info.temp}&deg;C</p>
              <p>Humidity: {info.humidity}</p>
              <p>Min Temp: {info.tempMin}&deg;C</p>
              <p>Max Temp: {info.tempMax}&deg;C</p>
              <p>
                The weather can be described as <i>{info.weather}</i> and feels
                like: {info.feelLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
