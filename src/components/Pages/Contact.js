import React, { Component } from 'react';
import Field from '../Common/Field';
import { withFormik } from 'formik';
// import Header from '../Common/Header';
// import Team from '../Common/Team';
// import Timeline from '../Common/Timeline';

const fields = {
    section: [
        [
            { name: 'name', elementName: 'input', type: 'text', placeholder: 'Your name' },
            { name: 'email', elementName: 'input', type: 'text', placeholder: 'Your email' },
            { name: 'phone', elementName: 'input', type: 'text', placeholder: 'Your phone number' }

        ],
        [
            { name: 'message', elementName: 'textarea', type: 'text', placeholder: 'Type your message' }
        ]
    ]
}

class Contact extends Component {
    render() {
        return (
            //< !--Contact-- >
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <form id="contactForm" onSubmit={this.props.handleSubmit}>
                        <div className="row align-items-stretch mb-5">
                            {
                                fields.section.map((section, sectionIndex) => {
                                    return (
                                        <div className="col-md-6" key={sectionIndex}>
                                            {/* {section.map((field) => {
                                                // console.log(field);
                                                // console.log(field.name);
                                                // console.log("this.props.value");
                                                // console.log(this.props.values);
                                                console.log("this.props");
                                                console.log(this.props.handleChange);
                                            })} */}
                                            {section.map((field, i) => {
                                                return <Field {...field} key={i}
                                                    value={this.props.values[field.name]}
                                                    name={field.name}
                                                    onChange={this.props.handleChange}
                                                    onBlur={this.props.handleBlur}
                                                    touched={this.props.touched[field.name]}
                                                    error={this.props.errors[field.name]}
                                                />
                                            })}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="text-center">
                            <button
                                className="btn btn-primary btn-xl text-uppercase enabled"
                                type="submit">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}
export default withFormik({
    mapProsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: ''
    }),
    // validate: (values) => {
    //     const errors = {};
    //     Object.keys(values).map(v => {
    //         if (!values[v]) {
    //             errors[v] = "Required";
    //         }
    //     })
    //     return errors;
    // },
    handleSubmit: (values, { setSubmitting }) => {
        console.log("Values ")
        console.log(values);
        alert("You submitted the form", JSON.stringify(values));
    }
})(Contact);