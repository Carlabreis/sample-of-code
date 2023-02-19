import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { EMAIL_REGEX, TEXTAREA_MIN_LENGTH, Input, PhoneInput, Select, TextArea } from '../UI/FormComponents';

const ContactUsForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="my-5">
      <div className="row">
        <div className="col-md-6">
          <Input label="Name" register={register('name', { required: 'Name is required' })} errors={errors.name} />
        </div>

        <div className="col-md-6">
          <Input
            label="Email Address"
            type="email"
            register={register('emailAddress', {
              required: 'Email is required',
              pattern: { value: EMAIL_REGEX, message: 'Email is invalid' },
            })}
            errors={errors.emailAddress}
          />
        </div>

        <div className="col-md-6">
          <PhoneInput
            label="Phone Number"
            name="phoneNumber"
            className="sqr65-form-input"
            control={control}
            errors={errors.phoneNumber}
          />
        </div>
        <div className="col-md-6">
          <Select
            label="Department"
            options={['Sales', 'Customer Service', 'Technical Support', 'Payment', 'Other']}
            errors={errors.selectDepartment}
            register={register('selectDepartment', { required: 'Department is required' })}
            defaultValue="Select Department"
          />
        </div>

        <div className="col-md-12">
          <TextArea
            label="Message"
            register={register('textArea', {
              required: 'Message is required',
              minLength: {
                value: TEXTAREA_MIN_LENGTH,
                message: `Message must be at least ${TEXTAREA_MIN_LENGTH} characteres long`,
              },
            })}
            errors={errors.textArea}
          />
        </div>
      </div>

      <div className="col-md-12 d-flex align-items-center">
        <Input
          type="checkbox"
          register={register('termsAndConditions', { required: '*' })}
          errors={errors.termsAndConditions}
        />
        <Link to="/policies" className="sqr65-link sqr65-link_underlined">
          Terms and conditions
        </Link>
      </div>

      <div className="my-3">
        <em>Here goes captcha</em>
      </div>

      <div className="form-group">
        <input type="submit" className="sqr65-btn sqr65-btn_primary" />
      </div>
    </form>
  );
};

export default ContactUsForm;
