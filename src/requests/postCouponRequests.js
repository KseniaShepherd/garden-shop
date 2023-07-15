export const postCouponRequests = (data) => {
  return fetch('http://localhost:3333/sale/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((response) => response.status);
};
