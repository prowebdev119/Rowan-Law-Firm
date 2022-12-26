import * as Yup from 'yup';
import { useSnackbar } from 'notistack';

import { useFormik, Form, FormikProvider } from 'formik';
import { Icon } from '@iconify/react';
import closeFill from '@iconify/icons-eva/close-fill';
import axios from 'axios';
// material
import { Stack, Alert, TextField, Typography } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
import { MIconButton } from '../../@material-extend';
//
import { varFadeInUp, MotionInView } from '../../animate';

// ----------------------------------------------------------------------

export default function ContactForm() {
  const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const basicUrl = 'http://localhost:8080/api';

  const handleEmailSender = async (name, email, subject, message) => {
    const data = {
      name,
      email,
      subject,
      message
    };
    await axios.post(basicUrl, data);
  };

  const submitSchema = Yup.object().shape({
    name: Yup.string().required('name is required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required')
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    validationSchema: submitSchema,
    onSubmit: async (values, { setErrors, setSubmitting, resetForm }) => {
      try {
        await handleEmailSender(values.name, values.email, values.subject, values.message);
        enqueueSnackbar('Email is sent successfully', {
          variant: 'success',
          action: (key) => (
            <MIconButton size="small" onClick={() => closeSnackbar(key)}>
              <Icon icon={closeFill} />
            </MIconButton>
          )
        });
        if (isMountedRef.current) {
          setSubmitting(false);
        }
      } catch (error) {
        console.error(error);
        resetForm();
        if (isMountedRef.current) {
          setSubmitting(false);
          setErrors({ afterSubmit: error.message });
        }
      }
    }
  });

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        {errors.afterSubmit && <Alert severity="error">{errors.afterSubmit}</Alert>}
        <MotionInView variants={varFadeInUp}>
          <Typography variant="h3">
            Feel free to contact us. <br />
            We'll be glad to hear from you!
          </Typography>
        </MotionInView>

        <Stack spacing={3}>
          <MotionInView variants={varFadeInUp}>
            <TextField
              fullWidth
              label="Name"
              autoComplete="name"
              {...getFieldProps('name')}
              error={Boolean(touched.name && errors.name)}
              helperText={touched.name && errors.name}
            />
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <TextField
              fullWidth
              autoComplete="email"
              label="Email"
              {...getFieldProps('email')}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <TextField
              fullWidth
              label="Subject"
              autoComplete="subject"
              {...getFieldProps('subject')}
              error={Boolean(touched.subject && errors.subject)}
              helperText={touched.subject && errors.subject}
            />
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <TextField
              fullWidth
              label="Enter your message here."
              autoComplete="message"
              {...getFieldProps('message')}
              error={Boolean(touched.message && errors.message)}
              helperText={touched.message && errors.message}
              multiline
              rows={4}
            />
          </MotionInView>
        </Stack>

        <MotionInView variants={varFadeInUp}>
          <LoadingButton size="large" fullWidth variant="contained" type="submit" loading={isSubmitting} sx={{ mt: 4 }}>
            Submit Now
          </LoadingButton>
        </MotionInView>
      </Form>
    </FormikProvider>
  );
}
