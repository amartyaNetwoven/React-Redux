import React from "react";
import { connect } from "react-redux";
import ContactForm from './ContactForm.jsx';
import { bindActionCreators } from "redux";
import * as actions from './../actions/action_index';
import '../../css/styles.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';



function mapStateToProps(state) {
  return {
    contacts: state.contacts,
    showContactForm: state.showContactForm,
    contact_data: state.contact_data,
    showDeleteButton: state.showDeleteButton
  };
};

const columns = [{
  dataField: 'name',
  text: 'Name'
}, {
  dataField: 'company',
  text: 'Company'
},
{
  dataField: 'age',
  text: 'Age'
}
];


const ConnectedList = (props) => {

  function handleOnSelect(row) {
    props.showContact({
      showContactForm: true,
      showDeleteButton: row !== undefined ? true : false,
      contact_data: row !== undefined ?
        row
        :
        {
          _id: props.contacts.length + 1,
          name: "", company: "", age: 0
        },
    })
  }

  const selectRow = {
    mode: 'radio',
    clickToSelect: true,
    classes: 'selection-row',
    onSelect: handleOnSelect,
  };

  return (
    <div className="row">
      <section className="col-12 col-sm-12 col-md-6 col-lg-6">
        <button type="button" className="btn btn-primary"
          onClick={() => handleOnSelect()}
        >
          ADD USER <i className="fas fa-plus" />
        </button>
        <BootstrapTable
          keyField='_id'
          data={props.contacts}
          columns={columns}
          selectRow={selectRow}
        />
      </section>
      <section className="col-12 col-sm-12 col-md-6 col-lg-6">
        {props.showContactForm &&
          <ContactForm
            {...props}
          />
        }
      </section>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}
const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default List;