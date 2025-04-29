// src/utils/paypal.ts
export type PayPalOrderItem = {
  name: string;
  quantity: string;
  unit_amount: {
    currency_code: string;
    value: string;
  };
};

export type PayPalCreateOrderData = {
  items: PayPalOrderItem[];
  amount: number;
};

// Create a PayPal order
export const createPayPalOrder = async (data: PayPalCreateOrderData) => {
  try {
    const response = await fetch('/api/paypal/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    const orderData = await response.json();
    
    if (response.ok) {
      return orderData.id;
    } else {
      throw new Error(orderData.error || 'Failed to create PayPal order');
    }
  } catch (error) {
    console.error('Error creating PayPal order:', error);
    throw error;
  }
};

// Capture a PayPal order (finalize the payment)
export const capturePayPalOrder = async (orderId: string) => {
  try {
    const response = await fetch('/api/paypal/capture-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ orderId }),
    });
    
    const orderData = await response.json();
    
    if (response.ok) {
      return orderData;
    } else {
      throw new Error(orderData.error || 'Failed to capture PayPal order');
    }
  } catch (error) {
    console.error('Error capturing PayPal order:', error);
    throw error;
  }
};