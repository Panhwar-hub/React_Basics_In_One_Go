import React from 'react'
import {useFormik, yupToFormErrors} from 'formik'
import * as Yup from 'yup'
function Kids() {

  /*  const validate = values => {
        const errors = {};
      
        if (values.firstName === "") {
          errors.firstName = 'Required';
        } else if (values.firstName.length > 15) {
          errors.firstName = 'Must be 15 characters or less';
        }
      
        if (values.lastName === "") {
          errors.lastName = 'Required';
        } else if (values.lastName.length > 20) {
          errors.lastName = 'Must be 20 characters or less';
        }
      
        if (values.email === "") {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
      
        return errors;
      }; */
    const formik =useFormik({
        initialValues:{
            email: '',
            firstName: '',
            lastName: '',
        },
        validationSchema: Yup.object ({
            firstName : Yup.string()
            .max(15, 'must be less than 15 characters')
            .required('required'),
            lastName: Yup.string()
            .max(10, 'less than 10')
            .required('required'),
            email: Yup.string().email('Invalid Emaiil').required('required')
        })
        ,
        onSubmit: values =>{
            alert(JSON.stringify(values,null,2))
        },
    });
  return (
    <form onSubmit={formik.handleSubmit}>
    <label htmlFor="email">Email Address</label>
    <input
      id="email"
      name="email"
      type="email"
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      value={formik.values.email}
    />
    {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div>: null}
    <label htmlFor='text' >FirstName</label>
    <input
    id='fname'
    name='fname' 
    type='text' 
    onChange ={formik.handleChange} 
    onBlur ={formik.handleBlur}
    value={formik.values.firstName} />
     {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
    <label htmlFor='text'>LastName</label>
    <input type='text' onBlur={formik.handleBlur} onChange ={formik.handleChange} value ={formik.values.lastName} />
    {formik.touched.lastName && formik.errors.lastName  ? <div>{formik.errors.lastName}</div> : null}
    <button type="submit">Submit</button>
  </form>
  )
}

export default Kids