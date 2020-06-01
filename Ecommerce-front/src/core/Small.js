import React from "react";
import { render } from "react-dom";
import Card from "./Card";
import Modal from "react-responsive-modal";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class Small extends React.Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div style={styles}>
        
        <div key={i} className="col-4 mb-3">
                        <Link to={`/product/${product._id}`}>
                                <Card product={product} />
                                </Link>
                            </div>
                        ))}
      </div>
    );
  }
}

render(<Small />, document.getElementById("root"));
