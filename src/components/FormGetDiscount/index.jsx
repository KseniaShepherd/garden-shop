import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { postCouponRequests } from '../../requests/postCouponRequests';
import ModalGetDiscount from '../ModalGetDiscount';
import styles from './index.module.css';

export default function FormGetDiscount() {
  const [modal, setModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [responseToRequest, setResponseToRequest] = useState('');
  const phoneRegex =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  const submit = async (data) => {
    setModal(true);
    try {
      const statusCode = await postCouponRequests(data.phone);
      const response =
        statusCode == 200
          ? `Thank you for your request for a discount coupon. The coupon will be sent to the number you specified (${data.phone}). Expect a message shortly.`
          : 'Sorry, but your discount coupon request could not be sent. Please check that the number you entered is correct and try sending your request again. If the problem persists, please contact our support team for further assistance. We apologize for any inconvenience.';
      setResponseToRequest(response);
    } catch (error) {
      console.error('Error sending request:', error);
    }
  };
  return (
    <form onSubmit={handleSubmit(submit)} className={styles.formGetDiscount}>
      <input
        type='phone'
        name='phone'
        id={styles.phone}
        placeholder='+49'
        data-cy='phoneInput'
        {...register('phone', {
          required: '* This field is required',
          pattern: {
            value: phoneRegex,
            message:
              'Please make sure you enter your phone number correctly. The number must follow the following format: +XXX-XXX-XXXX or XXX-XXX-XXXX, where X is a number.',
          },
        })}
      />
      <div className={styles.massageErrors}>
        {errors.phone && <p> {errors.phone?.message}</p>}
      </div>
      <button data-cy='getDiscountBtn'>Get a discount</button>
      <ModalGetDiscount
        modal={modal}
        setModal={setModal}
        responseToRequest={responseToRequest}
      />
    </form>
  );
}
