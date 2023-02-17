import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import Input, { EMAIL_REGEX } from '../UI/FormComponents/Input';
import PhoneInput from '../UI/FormComponents/PhoneInput';
import SelectInput from '../UI/FormComponents/Select';
import TextArea, { MIN_LENGTH } from '../UI/FormComponents/TextArea';

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
          {/* <Select
              label="Department"
              register={register('selectDepartment', { required: 'Department is required' })}
              options={['', 'Sales', 'Customer Service', 'Technical Support', 'Payment', 'Other']}
              errors={errors.selectDepartment}
            /> */}
          <SelectInput
            label="Department"
            register={register('selectDepartment', { required: 'Department is required' })}
            options={[
              { value: 'Service', label: 'Service' },
              { value: 'Customer Service', label: 'Customer Service' },
              { value: 'Technical Support', label: 'Technical Support' },
              { value: 'Payment', label: 'Payment' },
              { value: 'Other', label: 'Other' },
            ]}
            // defaultValue={{ label: 'Select Department', value: '' }}
            errors={errors.selectDepartment}
          />
        </div>

        <div className="col-md-12">
          <TextArea
            label="Message"
            register={register('textArea', {
              required: 'Message is required',
              minLength: { value: MIN_LENGTH, message: `Message must be at least ${MIN_LENGTH} characteres long` },
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
