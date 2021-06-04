import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import ImageNextLaunch from "../../img/launch_img.jpg";

function NextLaunch() {
    return (
        <>
            <div id="next_launch">
                <div class="next_launch">
                    <Row>
                        <Col xs={12} md={6} className="order-md-2" >
                            <Image src={ImageNextLaunch} alt="next launch" />
                        </Col>
                        <Col xs={12} md={6}  className="text_launch order-md-1" >
                            <div class="row_next">
                                <div class="text_launch">
                                    <h2>Next launch</h2>
                                    <div class="day">
                                        <p>days</p>
                                        <p>hours</p>
                                        <p>mins</p>
                                        <p>secs</p>
                                    </div>

                                    <Link  to="/launches"><button>Watch More!</button></Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

        </>
    )
}

export default NextLaunch
