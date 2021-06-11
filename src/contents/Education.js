import React, { Component } from 'react';
import Widecard from '../components/Widecard';
class Education extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My Education</h1>
        <Widecard title="Computer Science" where="Singapore Management University" from="Aug 2020" to="Present" />
        <Widecard title="Singapore-Cambridge GCE A-Level" where="Raffles Junior College" from="2018" to="2019" />
        <Widecard title="Integrated Programme" where="Raffles Institution" from="2016" to="2017" />

      </div>
    )
  }
}
export default Education