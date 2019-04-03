import React, { Component } from "react";

class ContactForm extends Component {

    changeField = (field_name, value) => {
        let temp_contact_data = {
            ...this.props.contact_data
        }
        temp_contact_data[field_name] = value;

        this.props.changeContact(temp_contact_data);
    }

    delete_contact = () => {
        if (window.confirm("Are you sure want to delete!")) {

            let temp_contacts = [
                ...this.props.contacts,
            ]
            var index_of_contact = temp_contacts.findIndex(data =>
                data._id === this.props.contact_data._id)

            temp_contacts.splice(index_of_contact, 1)

            this.props.updateContact({
                contacts: temp_contacts, showContactForm: false
            });
        }
    }
    update_contact = () => {
        let temp_contacts = [
            ...this.props.contacts,
        ]
        var index_of_contact = temp_contacts.findIndex(data =>
            data._id === this.props.contact_data._id)
        if (index_of_contact !== -1) {

            temp_contacts[index_of_contact] = this.props.contact_data
        }
        else {
            temp_contacts.push(this.props.contact_data)
        }

        this.props.updateContact({
            contacts: temp_contacts, showContactForm: false
        });

        // let temp_contacts = [
        //     ...this.props.contacts,
        // ]

        // this.props.updateContact({
        //     contacts: temp_contacts, showContactForm: false, updated_contact: this.props.contact_data
        // });
    }

    render() {
        return (
            <section className="card">
                <div className="card-body">
                    <h5 className="header-text">USER FORM</h5>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Name</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Contact Name"
                            aria-label="name" aria-describedby="basic-addon1"
                            value={this.props.contact_data.name}
                            onChange={(e) => this.changeField("name", e.target.value)}
                        />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Company</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Company"
                            aria-label="company" aria-describedby="basic-addon1"
                            value={this.props.contact_data.company}
                            onChange={(e) => this.changeField("company", e.target.value)}
                        />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Age</span>
                        </div>
                        <input type="number" className="form-control" placeholder="Age"
                            aria-label="age" aria-describedby="basic-addon1"
                            value={this.props.contact_data.age}
                            onChange={(e) => this.changeField("age", e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-12">
                    <button type="button" className="btn btn-success btn-action"
                        onClick={() => this.update_contact()}
                    >
                        SAVE <i className="fas fa-save" />
                    </button>
                    {
                        this.props.showDeleteButton &&
                        <button type="button" className="btn btn-danger btn-action right"
                            onClick={() => this.delete_contact()}
                        >
                            DELETE <i className="fas fa-trash" />
                        </button>
                    }
                </div>

            </section>
        )
    }
}
export default ContactForm;