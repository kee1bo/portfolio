import { useState, useCallback } from 'react';

const useFormValidation = (initialValues, validationRules) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = useCallback(
    (name, value) => {
      const rules = validationRules[name];
      if (!rules) return '';

      // Required validation
      if (rules.required && !value.trim()) {
        return rules.required;
      }

      // Email validation
      if (rules.email && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return rules.email;
        }
      }

      // Min length validation
      if (rules.minLength && value.length < rules.minLength.value) {
        return rules.minLength.message;
      }

      // Max length validation
      if (rules.maxLength && value.length > rules.maxLength.value) {
        return rules.maxLength.message;
      }

      // Pattern validation
      if (rules.pattern && !rules.pattern.value.test(value)) {
        return rules.pattern.message;
      }

      // Custom validation
      if (rules.custom) {
        return rules.custom(value);
      }

      return '';
    },
    [validationRules]
  );

  const handleChange = useCallback(
    e => {
      const { name, value } = e.target;
      setValues(prev => ({ ...prev, [name]: value }));

      // Validate on change if field has been touched
      if (touched[name]) {
        const error = validateField(name, value);
        setErrors(prev => ({ ...prev, [name]: error }));
      }
    },
    [touched, validateField]
  );

  const handleBlur = useCallback(
    e => {
      const { name, value } = e.target;
      setTouched(prev => ({ ...prev, [name]: true }));

      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    },
    [validateField]
  );

  const validateAll = useCallback(() => {
    const newErrors = {};
    let isValid = true;

    Object.keys(validationRules).forEach(name => {
      const error = validateField(name, values[name] || '');
      if (error) {
        newErrors[name] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    setTouched(
      Object.keys(validationRules).reduce((acc, key) => {
        acc[key] = true;
        return acc;
      }, {})
    );

    return isValid;
  }, [values, validationRules, validateField]);

  const handleSubmit = useCallback(
    async (onSubmit, e) => {
      if (e) {
        e.preventDefault();
      }

      setIsSubmitting(true);

      const isValid = validateAll();

      if (isValid) {
        try {
          await onSubmit(values);
        } catch (error) {
          console.error('Form submission error:', error);
        }
      }

      setIsSubmitting(false);
    },
    [values, validateAll]
  );

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);

  const isValid = Object.keys(errors).length === 0 && Object.keys(touched).length > 0;

  return {
    values,
    errors,
    touched,
    isSubmitting,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setValues,
  };
};

export default useFormValidation;
