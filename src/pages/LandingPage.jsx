import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandingPage() {

  const navigateByUrl = useNavigate()

  return (
    <>
      <Row className='mt-5 p-5 align-items-center justify-content-between w-100 '>
        <Col>
        </Col>
        <Col lg={5} style={{}}>
          <h1 style={{ textAlign: 'justify' }}>Welcome To <span className='text-warning'>Media Player</span></h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto non nemo! Reprehenderit totam quos nostrum vel repudiandae eveniet, sed nulla veritatis minus harum mollitia omnis quae expedita nihil quas.
          </p>
          <button onClick={()=>navigateByUrl('./home')} className='mt-4 btn btn-warning'>Get  Started</button>
        </Col>
        <Col lg={5}>
          <img style={{ borderRadius: '30px', width: '100%' }} src="https://i.gifer.com/7d20.gif" alt="" />
        </Col>
        <Col>
        </Col>
      </Row>
      <div className='container mb-5 mt-5 p-5 d-flex align-items-center justify-content-center flex-column'>
        <h3>Featuers</h3>
        <div className='cards mb-5 mt-5 d-flex align-item-center justify-content-between w-100'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoTcUdOw_P-NsVAu5Un9heyoe-hBK9_WoZ_FmbwRM2Vbz_ip5V_R_Y0DlJU295WIBSnyU&usqp=CAU" />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>

            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://s-media-cache-ak0.pinimg.com/originals/10/f8/f9/10f8f9cd8d35db43b4c1b3f1c13b0a2b.jpg" />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>

            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/93/2f/d0/932fd00d9b43753061c47739f0cc777b.gif" />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>

            </Card.Body>
          </Card>
        </div>
      </div>
      <div className='container border rounded p-5 border-secondary b-5 mt-5 d-flex align-items-center'>
        <div className='col-lg-5'>
          <h3 className='mb-3 text-warning'>Simple,Powerful & Fast</h3>
          <h6 className='mb-5'><span className='fs-5 fw-bolder text-warning'>Play Everything</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, illo vel? Expedita cupiditate officia est sapiente, magni neque recusandae. Porro veritatis temporibus atque earum quidem alias repudiandae tempora iure cum.
          </p>
           </h6>

          <h6 className='mb-5'><span className='fs-5 fw-bolder text-warning'>Play Everything</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, illo vel? Expedita cupiditate officia est sapiente, magni neque recusandae. Porro veritatis temporibus atque earum quidem alias repudiandae tempora iure cum.
          </p></h6>

          <h6 className='mb-5'><span className='fs-5 fw-bolder text-warning'>Play Everything</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, illo vel? Expedita cupiditate officia est sapiente, magni neque recusandae. Porro veritatis temporibus atque earum quidem alias repudiandae tempora iure cum.
          </p>
          </h6>
        </div>
        <div className='video col-lg-5 ms-5'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Cp-1t9B62zc?si=IBFNIE7W9PNG_Bp2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>

    </>
  )
}

export default LandingPage