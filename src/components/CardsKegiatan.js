import Card from 'react-bootstrap/Card';

function CardsKegiatan(props) {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={props.gambar} />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

export default CardsKegiatan;