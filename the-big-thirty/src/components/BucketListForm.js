import React, { useState } from 'react'
import { withFormik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { Button, Grid, Checkbox, FormControlLabel } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import * as Yup from 'yup';


function BucketListForm({values}) {
    const [category, setCategory] = useState('');
    const [itemDate, setItemDate] = useState(new Date());
    const [privateItem, setPrivateItem] = useState(false);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    }
    const handleDateChange = date => {
        const dateArray = [months[date.getMonth()], date.getDate().toString(), date.getFullYear().toString()];
        setItemDate(dateArray.join(' '));
    }
    const privateChange = event => {
        setPrivateItem(event.target.checked);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(category === '') {
            alert('Please select a category');
        } else {
            console.log({'category': category, 'date': itemDate, 'item': values.bucketListItem, 'itemDesc': values.bucketListDesc, 'private': privateItem, 'realtedLinks': values.relatedLinks.split(' ')});
            setCategory('');
            document.querySelector('.bucketListForm').reset();
        }
    }
    return (
        <div className='bucketListFormContainer'>
            <Form className='bucketListForm' onSubmit={handleSubmit}>
                <Field
                label='Bucket List Item'
                name='bucketListItem'
                type='text'
                variant='filled'
                margin='normal'
                required
                fullWidth
                component={TextField}
                />
                <Field
                label='Bucket List Description'
                name='bucketListDesc'
                type='text'
                variant='filled'
                margin='normal'
                required
                fullWidth
                component={TextField}
                />
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                        <KeyboardDatePicker
                        fullWidth
                        required
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date to complete bucket list item"
                        value={itemDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
                <FormControl id='formControl' fullWidth margin='normal' name='categorySelect' required>
                    <InputLabel htmlFor="category">Category</InputLabel>
                    <Select
                    value={category}
                    variant='filled'
                    onChange={handleCategoryChange}>
                        <MenuItem value={'Health&Fitness'}>Health&Fitness</MenuItem>
                        <MenuItem value={'Travel'}>Travel</MenuItem>
                        <MenuItem value={'Adventure'}>Adventure</MenuItem>
                        <MenuItem value={'Education'}>Education</MenuItem>
                        <MenuItem value={'Financial'}>Financial</MenuItem>
                        <MenuItem value={'Volunteer'}>Volunteer</MenuItem>
                        <MenuItem value={'Food&drink'}>Food&Drink</MenuItem>
                        <MenuItem value={'Events'}>Events</MenuItem>
                        <MenuItem value={'Family'}>Family</MenuItem>
                        <MenuItem value={'Career'}>Career</MenuItem>
                    </Select>
                </FormControl>
                <Field
                label='Related Links (seperate with a space)'
                name='relatedLinks'
                type='text'
                variant='filled'
                margin='normal'
                fullWidth
                multiline
                component={TextField}
                />
                <FormControlLabel
                control={
                <Checkbox checked={privateItem} onChange={privateChange} color='primary'/>
                }
                label="Private Bucket List Item"
                />
                <Button className='bucketListFormBtn' variant='outlined' color='primary' type='submit'>Add Item</Button>
            </Form>
        </div>
    )
}

const FormikBucketListForm = withFormik({
    mapPropsToValues({bucketListItem, bucketListDesc, categorySelect, relatedLinks}) {
        return {
            bucketListItem: bucketListItem || '',
            bucketListDesc: bucketListDesc || '',
            categorySelect: categorySelect || '',
            relatedLinks: relatedLinks || '',
        }
    },
    validationSchema: Yup.object().shape({
        bucketListItem: Yup.string().required('You need to set a Bucket List Item'),
        bucketListDesc: Yup.string().required('Please provide a description for the bucket list item'),
    }),
})(BucketListForm);

export default FormikBucketListForm;
