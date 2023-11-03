import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css'

const Searchbar = ({onSubmit}) => {

    const initialValues = {
            searchQuery: ''
    }
    
    const handleSubmit = (values, { resetForm }) => {
        const { searchQuery } = values;
        onSubmit(searchQuery.trim())
        resetForm();
    }

    return <header className={s.Searchbar}>
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
        >
            <Form className={s.SearchForm}>
                <button
                    type="submit"
                    className={s.SearchFormButton}>
                </button>
                <Field
                    className={s.SearchFormInput}
                    type="text"
                    name="searchQuery"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </Form>
        </Formik>
        
    </header>
}

export default Searchbar;

Searchbar.propTypes = {
       onSubmit: PropTypes.func 
}