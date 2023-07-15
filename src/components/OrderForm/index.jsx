import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { postOrder } from '../../requests/postOrder';
import ModalOrder from '../ModalOrder';
import styles from './index.module.css';

export default function OrderForm() {
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
      const statusCode = await postOrder(data.phone);
      const response =
        statusCode == 200
          ? 'Thank you for the order! Your order has been processed. We will contact you shortly.'
          : 'Sorry, but your order could not be sent. Please check that the number you entered is correct and try sending your request again. If the problem persists, please contact our support team for further assistance. We apologize for any inconvenience.';
      setResponseToRequest(response);
    } catch (error) {
      console.error('Error sending request:', error);
    }
  };
  return (
    <form onSubmit={handleSubmit(submit)} className={styles.orderForm}>
      <input
        type='phone'
        name='phone'
        id={styles.phone}
        placeholder='Phone number'
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
      <button data-cy='orderBtn'>Order</button>
      <ModalOrder
        modal={modal}
        setModal={setModal}
        responseToRequest={responseToRequest}
      />
    </form>
  );
}
