import axios from 'axios';
import { ErrorMessage, Field, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const AddNewBlog = (props) => {
    return (
        <div>
            <Formik
                initialValues={{
                    title: '',
                    body: ''
                }}
                validationSchema={
                    Yup.object({
                        title: Yup.string().required('Title is not empty!!!'),
                        body: Yup.string().required('Body is not empty!!!')
                    })
                }
                onSubmit={async (newBlog) => {
                    let data = {
                        title: newBlog.title,
                        body: newBlog.body,
                        userId: 1,
                    }
                    let res = await axios.post('https://jsonplaceholder.typicode.com/posts', data)
                    let dataNewBlog = res.data;
                    props.addNewBlog(dataNewBlog);
                }}
            >
                {({
                    values,
                    handleSubmit,
                    isSubmitting
                }) => (
                    <form onSubmit={handleSubmit} style={{ padding: '0 40px', display: 'inline-block' }} >
                        <div style={{ margin: '0px 0 20px' }}>
                            <label style={{ fontSize: "18px", color: "#000" }} htmlFor="title">Title:   </label>
                            <br />
                            <Field style={{ padding: '8px 16px', color: "#000" }} size="44" name='title' type='text' placeholder='Your title...' />
                            <div style={{ color: "red", marginTop: '10px' }}>
                                <ErrorMessage name='title'></ErrorMessage>
                            </div>
                        </div>
                        <div style={{ margin: '30px 0' }}>
                            <label style={{ fontSize: "18px", color: "#000" }} htmlFor="body">Body:   </label>
                            <br />
                            <Field style={{ padding: '8px 16px', color: "#000" }} size="44" name='body' type='text' placeholder='Your body...' />
                            <div style={{ color: "red", marginTop: '10px' }}>
                                <ErrorMessage name='body'></ErrorMessage>
                            </div>
                        </div>
                        <button type='submit' className='btn-add-new' style={{ margin: "10px 0 0" }}>Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default AddNewBlog;