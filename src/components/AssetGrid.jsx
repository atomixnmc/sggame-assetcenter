import React from "react";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

class AssetGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemSelected: null
    };
  }

  selectItem = (item) => {
    if (item != this.state.itemSelected) {
      this.setState({
        itemSelected: item
      });
    } else {
      this.setState({
        itemSelected: null
      });
    }
  };
  render() {
    const { assets } = this.props;
    return (
      <Card>
        <Card.Header>Assets</Card.Header>
        <Card.Body>
          <Row>
            {assets.map((assetItem) => (
              <Col md={4} key={assetItem.id || assetItem._id}>
                <div
                  key={assetItem.id || assetItem._id}
                  style={{
                    border: "1px solid #333",
                    textAlign: "left",
                    padding: "4px",
                    margin: "4px"
                  }}
                >
                  {assetItem.images && (
                    <img width="100%" src={assetItem.images[0].url} />
                  )}
                  <h4>{assetItem.title}</h4>
                  <div>Free</div>
                </div>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    );
  }
}
export default AssetGrid;
