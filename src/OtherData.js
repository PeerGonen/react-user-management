import React, { Component } from "react";

// In this folder we will do the logic that will display the other data component
class OtherData extends Component {
  constructor() {
    super();
    this.state = { address: {} };
  }


  async componentDidMount() {
    this.setState({ address: this.props.address });
  }


 addressChange = async(e) => {
    const { value } = e.target;
    this.setState({ [e.target.name]: value === ""? "" :value });

    let newAddress = {
       street: await this.state.street === "" ?"": this.state.street ?
      this.state.street : this.state.address.street,
      city: await
       this.state.city === "" ?"": this.state.city ?
      this.state.city : this.state.address.city,
      zipcode: await 
      this.state.zipcode === "" ?"": this.state.zipcode ?
        this.state.zipcode : this.state.address.zipcode
    };

    this.props.updateadress(newAddress);
  };
  
  
  
  render() {
  return ( <div className="otherDataDiv">
    Street: <input name="street" onChange={this.addressChange}
     defaultValue={this.props.address.street} />
  <br />
    City <input name="city" onChange={this.addressChange}
     defaultValue={this.props.address.city} />
  <br />
    Zipcode: <input name="zipcode" onChange={this.addressChange}
     defaultValue={this.props.address.zipcode} />
  <br />
          </div>
    );
  }
}

export default OtherData;
