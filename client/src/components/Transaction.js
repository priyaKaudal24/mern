import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { saveTransaction,getTransactions } from "../actions/index";
class AddTransaction extends Component {
  constructor() {
    super();
    this.state = {
      description: "",
      type: "debit",
      amount: "",
      errors: {}
    };
  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
var formData = new FormData();
formData.append('type', this.state.type);
formData.append('description', this.state.description);
formData.append('amount', this.state.amount);
const userData = {
      type: this.state.type,
      description:this.state.description,
      amount: this.state.amount
    };
this.props.saveTransaction(userData); 
  };

  componentDidMount() {
    this.props.getTransactions();    
    
  }
renderData(get_data) {
   
   var dataaaa  = get_data
    if (dataaaa !== null && dataaaa.length>0) {
      return (
        <tbody >
          {dataaaa.map((dataDaa, i) => {
            return (
              <tr key={i} >             
                <td >{dataDaa.Date.toString()}</td>
                 <td >{dataDaa.description}</td>
                  <td >{dataDaa.type ==='credit'? dataDaa.amount:""  }</td>
                <td>{dataDaa.type ==='debit'? dataDaa.amount:""  }</td>
                 <td >{dataDaa.amount}</td>
              </tr>
            );
          })}
        </tbody>
      );
    }
  }
render() {
    const { errors } = this.state;
    var {get_data,renderData } = this.props;
    console.log(get_data);
return (
      <div className="container">
         <div className="all-data">
        All Transaction
        <div>
        <table>
        <thead><th>Date</th>
        <th>Description</th>
        <th>Credit</th>
        <th>Debit</th>
        <th>Running Balance</th>
          </thead>
          {this.renderData(get_data)}
        </table>
        </div>
        </div>
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2"> 
          
          <h2>New Transaction</h2>                   
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                 <label>Transaction Type</label>
                <select onChange={this.onChange} value={this.state.type} id="type">
                <option value="debit">Debit</option>
                <option value="credit">Credit</option>
                 </select>
             
              </div>
              <div className="input-field col s12">
              <label >Amount</label>
                <input
                  onChange={this.onChange}
                  value={this.state.amount}
                  error={errors.amount}
                  id="amount"
                  type="text"
                   className="form-control"
                />
                
              </div>
            <div className="input-field col s12">
              <label >Description</label>
                <input
                  onChange={this.onChange}
                  value={this.state.description}
                  error={errors.description}
                  id="description"
                  type="text"
                  className="form-control"
                />
                
              </div>
              <div className="col s12" >
                <button              
                  type="submit"
                  className="btn btn-success"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
var get_data ='', save_data='';

  if(state && state.get_data && state.get_data.data){
    
    get_data = state.get_data.data;
    console.log(get_data);
  }
  if(state && state.save_data){
    save_data=state.save_data
  }
 
    return {
      get_data: get_data,
      save_data:save_data
     }
}
export default connect(
  mapStateToProps,
  { saveTransaction,getTransactions}
)(AddTransaction)