import React, { Component } from "react";
import Happiest from "./happiest.json";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

class Githubprof extends Component {
  state = {
    bindValue: "",
    repodata: [],
    options: [],
    productoptions: [],
    bandoptions: [],
    subbandoptions: [],
    bandbool: true,
    selectectedtext: "",
    subbandbool: true
  };
  componentDidMount() {
    var arr = ["Productid", "Band", "Subband"];
    var finalarray = [];
    Happiest.map(iterObj => {
      var Obj1 = {};
      arr.map(iter => {
        Obj1[iter] = {};
        if (iter === "Productid") {
          Obj1[iter].name = iterObj[iter].name;
        } else {
          Obj1[iter].val = iterObj[iter].val;
        }
      });
      finalarray.push(Obj1);
      console.log(finalarray);
    });

    // console.log(finalarray);
    this.setState({ options: finalarray });
    var productarray = [];
    finalarray.map(productid => {
      productarray.push(productid["Productid"]["name"]);
    });
    var bandarray = [];
    finalarray.map(bandarr => {
      bandarray.push(bandarr["Band"]["val"]);
    });
    var subbandarray = [];
    finalarray.map(subbandarr => {
      subbandarray.push(subbandarr["Subband"]["val"]);
    });
    this.setState({
      productoptions: productarray,
      bandoptions: bandarray,
      subbandoptions: subbandarray
    });
  }
  onSelect = () => {};
  search = () => {};
  onSelectProduct = data => {
    var bandoptions = [];
    console.log(data);
    this.state.options.map(iter => {
      if (iter["Productid"]["name"] === data.value) {
        bandoptions.push(iter["Band"]["val"]);
      }
    });
    this.setState({
      bandoptions: bandoptions,
      bandbool: false,
      selectectedtext: data.value,
      bandoptionstext: ""
    });
  };
  onSelectbandoptions = data => {
    var subbandoptions = [];
    console.log(data);
    this.state.options.map(iter => {
      if (iter["Band"]["val"] === data.value) {
        subbandoptions.push(iter["Subband"]["val"]);
      }
    });
    this.setState({
      subbandoptions: subbandoptions,
      subbandbool: false,
      bandoptionstext: data.value
    });
  };
  onSelectsubband = data => {
    console.log(data);
  };
  render() {
    const productoptions =
      this.state.productoptions.length > 0 ? this.state.productoptions : [];
    const bandoptions =
      this.state.bandoptions.length > 0 ? this.state.bandoptions : [];
    const subband =
      this.state.subbandoptions.length > 0 ? this.state.subbandoptions : [];
    // var border = "1px solid";
    // var bandborder = !this.state.bandbool ? "1px solid" : "";
    // console.log("test", bandborder, border);
    // var subbandboolborder = this.state.subbandbool ? border : "";
    return (
      <div>
        <div className="container" style={{ padding: 50 + "px" }}>
          <div className="row">
            <div className="col-3">
              <h5>ProductId :</h5>
              <div>
                <Dropdown
                  options={[...new Set(productoptions)]}
                  onChange={this.onSelectProduct}
                  value={this.state.selectectedtext}
                  placeholder="Select a ProductId"
                />
              </div>
            </div>
            <div className="col-3">
              <h5>Band :</h5>
              <div>
                <Dropdown
                  options={[...new Set(bandoptions)]}
                  disabled={this.state.bandbool}
                  onChange={this.onSelectbandoptions}
                  value={this.state.bandoptionstext}
                  placeholder="Select a Band"
                />
              </div>
            </div>
            <div className="col-3">
              <h5>SubBand :</h5>
              <div>
                <Dropdown
                  options={[...new Set(subband)]}
                  disabled={this.state.subbandbool}
                  onChange={this.onSelectsubband}
                  value={this.state.subbandtext}
                  placeholder="Select a Subband"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Githubprof;
