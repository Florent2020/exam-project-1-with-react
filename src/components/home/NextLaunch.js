import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import ImageNextLaunch from "../../img/launch_img.jpg";

function NextLaunch() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMins, setTimerMins] = useState();
  const [timerSecs, setTimerSecs] = useState();

  const nextLaunch = "https://api.spacexdata.com/v4/launches/next";

  useEffect(() => {
    async function getNextLaunchAPI() {
      try {
        const response = await fetch(nextLaunch);
        const results = await response.json();
        // console.log(results);
        var nextLaunchDate = new Date(results.date_utc);

        const nextLaunchFunction = setInterval(function () {
          var rightNow = new Date().getTime();

          var time = nextLaunchDate - rightNow;

          const days = Math.floor(time / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
          const secs = Math.floor((time % (1000 * 60)) / 1000);

          if (time < 0) {
            clearInterval(nextLaunchFunction);
            document.querySelector(".countdown_next_launch").innerHTML =
              "Rocket landed!";
          } else {
            setTimerDays(days);
            setTimerHours(hours);
            setTimerMins(mins);
            setTimerSecs(secs);
          }
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    }

    getNextLaunchAPI();
  }, []);

  return (
    <div id="next_launch">
      <div className="next_launch">
        <Row>
          <Col xs={12} md={6} className="order-md-2">
            <Image src={ImageNextLaunch} alt="next launch" />
          </Col>
          <Col xs={12} md={6} className="text_launch order-md-1">
            <div className="row_next">
              <div className="text_launch">
                <h2>Next launch</h2>
                <div className="day">
                  <p>days</p>
                  <p>hours</p>
                  <p>mins</p>
                  <p>secs</p>
                </div>
                <div className="countdown_launch">
                  <p className="days">{timerDays}</p>
                  <p className="hours">{timerHours}</p>
                  <p className="mins">{timerMins}</p>
                  <p className="secs">{timerSecs}</p>
                </div>
                <Link to="/launches">
                  <button>Watch More!</button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default NextLaunch;
