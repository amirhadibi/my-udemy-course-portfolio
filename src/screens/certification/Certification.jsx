import React, { useState } from 'react';
import './certification.css'
import certificationData from '../../helpers/certificationData'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function Certification() {
  const [modalShow, setModalShow] = useState(false);
  const [tempData, setTempData] = useState({})

  function createModal(data) {
    return (
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="sm"
        arial-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {data.desc}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{data.summary}</p>
          <Image src={data.image} style={{ width: '200px' }} />
        </Modal.Body>
        <a id="certification__modal__link" href={data.link} target="_blank" rel="noreferrer">Go to site</a>
        <Modal.Footer>
          <div>Technologies used: </div>
          <p style={{ fontSize: '0.7rem', marginRight: 'auto'}}>{data.tech}</p>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }

  const mapped = certificationData.map((e, idx) => {
    return (
      <Card key={idx} id="certification__card__container">
        <Image className="certification__image"
          onClick={() => {
            setTempData({
              image: e.image,
              link: e.link,
              desc: e.desc,
              summary: e.summary,
              tech: e.tech
            })
            setModalShow(true)
          }}
          src={e.image} />
        <div className="certification__click__info">&#x1F50E;&#xFE0E;</div>
        {createModal(tempData)}
      </Card>
    )
  })

  return (
    <div className="certification__main__container" id="certification">
      <h1>CERTIFICATION</h1>
      <p>This is my LinkedIn page  
        <a href="https://www.linkedin.com/in/amir-h-adibi/" target="_blank" rel="noreferrer"> myLinkedInProfile</a>
      </p>
      <Container fluid="lg" style={{ padding: '2rem 0' }}>
        <Row>
          {mapped}
        </Row>
      </Container>
    </div>
  )
}

export default Certification;
