import { useState } from 'react';
import PropTypes from 'prop-types';
import useFormValidation from '../../../hooks/useFormValidation';
import Button from '../../common/Button/Button';
import styles from './Contact.module.css';

const ContactForm = ({ onSubmit }) => {
  const [submitStatus, setSubmitStatus] = useState(null);

  const validationRules = {
    name: {
      required: 'Name is required',
      minLength: {
        value: 2,
        message: 'Name must be at least 2 characters',
      },
    },
    email: {
      required: 'Email is required',
      email: 'Please enter a valid email address',
    },
    subject: {
      required: 'Subject is required',
      minLength: {
        value: 3,
        message: 'Subject must be at least 3 characters',
      },
    },
    message: {
      required: 'Message is required',
      minLength: {
        value: 10,
        message: 'Message must be at least 10 characters',
      },
    },
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useFormValidation(
    {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationRules
  );

  const onFormSubmit = async formData => {
    try {
      await onSubmit(formData);
      setSubmitStatus('success');
      resetForm();
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={e => handleSubmit(onFormSubmit, e)}
    >
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${styles.input} ${
            touched.name && errors.name ? styles.inputError : ''
          }`}
          placeholder="Your name"
        />
        {touched.name && errors.name && (
          <span className={styles.error}>{errors.name}</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${styles.input} ${
            touched.email && errors.email ? styles.inputError : ''
          }`}
          placeholder="your.email@example.com"
        />
        {touched.email && errors.email && (
          <span className={styles.error}>{errors.email}</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="subject" className={styles.label}>
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={values.subject}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${styles.input} ${
            touched.subject && errors.subject ? styles.inputError : ''
          }`}
          placeholder="What is this about?"
        />
        {touched.subject && errors.subject && (
          <span className={styles.error}>{errors.subject}</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${styles.textarea} ${
            touched.message && errors.message ? styles.inputError : ''
          }`}
          placeholder="Your message..."
          rows="6"
        />
        {touched.message && errors.message && (
          <span className={styles.error}>{errors.message}</span>
        )}
      </div>

      {submitStatus === 'success' && (
        <div className={styles.successMessage}>
          Thank you! Your message has been sent successfully.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className={styles.errorMessage}>
          Sorry, there was an error sending your message. Please try again.
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="large"
        disabled={isSubmitting}
        className={styles.submitButton}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
