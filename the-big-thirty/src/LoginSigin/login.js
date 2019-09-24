import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import styled from "styled-components";




export default function Forms(){

    return(
        <div>
      <h1>Login</h1>
      <Form>
        <Field type="text" name="email" placeholder="email" />
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}

        <Field type="text" name="password" placeholder="Password" />
        {touched.password && errors.password && <p className="error">{errors.password}</p>}
            <h3>REady to Kick that Bucket</h3>
        <Field component="select" className="selection-select" name="Selection">
          <option>Please Choose an Option</option>
          <option value="Hell Yea">Hell Yea</option>
          <option value="Yes">YES!</option>
          <option value="Lets Crush it">Lets Crush It</option>
        </Field>
        {touched.food && errors.Selection && <p className="error">{errors.Selection}</p>}
        <label className="checkbox-container">
          Remember my Password
          <Field
            type="checkbox"
            name="vaccinations"
            checked={values.vaccinations}
          />
        </label>

        <button type="submit">Submit!</button>
      </Form>

      </div>

    )
}