import { Clock, CreditCard, MapPin, Milk, Truck } from 'lucide-react';
import React, { useState } from 'react';
import { MilkOrder, Store } from '../types';

export const BabyMilkService: React.FC = () => {
  const [order, setOrder] = useState<MilkOrder>({
    type: '',
    quantity: 1,
    paymentMethod: '',
    deliveryOption: 'pickup',
  });

  const [cardInfo, setCardInfo] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: '',
  });

  const [selectedStore, setSelectedStore] = useState<Store | null>(null);

  const milkTypes = [
    { id: '1', name: 'Similac Advance', price: 29.99 },
    { id: '2', name: 'Enfamil NeuroPro', price: 32.99 },
    { id: '3', name: 'Aptamil', price: 34.99 },
    { id: '4', name: 'Nan Pro', price: 27.99 },
  ];

  const stores: Store[] = [
    {
      id: '1',
      name: 'Baby Care Store - Downtown',
      location: { lat: 40.7128, lng: -74.0060, address: '123 Main St, Downtown' },
      distance: 0.8,
      walkingTime: '10 mins',
      drivingTime: '3 mins',
    },
    {
      id: '2',
      name: 'Mother Care Center',
      location: { lat: 40.7144, lng: -74.0052, address: '456 Park Ave' },
      distance: 1.2,
      walkingTime: '15 mins',
      drivingTime: '5 mins',
    },
    {
      id: '3',
      name: 'Baby Essentials Shop',
      location: { lat: 40.7112, lng: -74.0082, address: '789 Broadway' },
      distance: 1.5,
      walkingTime: '18 mins',
      drivingTime: '6 mins',
    },
  ];

  const paymentMethods = [
    { id: 'card', name: 'Credit/Debit Card', icon: CreditCard },
    { id: 'cash', name: 'Cash on Delivery', icon: Truck },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Order submitted:', order);
    console.log('Card Info:', cardInfo);
    console.log('Selected Store:', selectedStore);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center mb-6">
          <Milk className="h-8 w-8 text-blue-600 mr-3" />
          <h2 className="text-2xl font-semibold">Baby Milk Order</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Milk Type</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {milkTypes.map((milk) => (
                <div
                  key={milk.id}
                  className={`border rounded-lg p-4 cursor-pointer ${
                    order.type === milk.id ? 'border-blue-500 bg-blue-50' : 'hover:border-blue-300'
                  }`}
                  onClick={() => setOrder({ ...order, type: milk.id })}
                >
                  <h3 className="font-semibold">{milk.name}</h3>
                  <p className="text-blue-600 font-medium">${milk.price}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
            <input
              type="number"
              min="1"
              value={order.quantity}
              onChange={(e) => setOrder({ ...order, quantity: parseInt(e.target.value) })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Option</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                className={`border rounded-lg p-4 cursor-pointer flex items-center ${
                  order.deliveryOption === 'delivery'
                    ? 'border-blue-500 bg-blue-50'
                    : 'hover:border-blue-300'
                }`}
                onClick={() => {
                  setOrder({ ...order, deliveryOption: 'delivery' });
                  setSelectedStore(null);
                }}
              >
                <Truck className="h-5 w-5 text-blue-600 mr-2" />
                <span>Home Delivery</span>
              </div>
              <div
                className={`border rounded-lg p-4 cursor-pointer flex items-center ${
                  order.deliveryOption === 'pickup'
                    ? 'border-blue-500 bg-blue-50'
                    : 'hover:border-blue-300'
                }`}
                onClick={() => setOrder({ ...order, deliveryOption: 'pickup' })}
              >
                <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                <span>Store Pickup</span>
              </div>
            </div>
          </div>

          {order.deliveryOption === 'pickup' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Store for Pickup
              </label>
              <div className="space-y-4">
                {stores.map((store) => (
                  <div
                    key={store.id}
                    className={`border rounded-lg p-4 cursor-pointer hover:border-blue-500 transition-all duration-200 ${
                      selectedStore?.id === store.id ? 'border-blue-500 bg-blue-50' : ''
                    }`}
                    onClick={() => {
                      setSelectedStore(store);
                      setOrder({ ...order, store });
                    }}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">{store.name}</h3>
                        <p className="text-gray-600 flex items-center mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {store.location.address}
                        </p>
                        <div className="flex items-center mt-2">
                          <Clock className="h-4 w-4 text-gray-400" />
                          <span className="ml-1 text-gray-600">
                            Walk: {store.walkingTime} | Drive: {store.drivingTime}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{store.distance} km away</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {order.deliveryOption === 'delivery' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Delivery Address
              </label>
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows={3}
                placeholder="Enter your delivery address"
                onChange={(e) =>
                  setOrder({
                    ...order,
                    location: { lat: 0, lng: 0, address: e.target.value },
                  })
                }
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className={`border rounded-lg p-4 cursor-pointer flex items-center ${
                    order.paymentMethod === method.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'hover:border-blue-300'
                  }`}
                  onClick={() => setOrder({ ...order, paymentMethod: method.id })}
                >
                  <method.icon className="h-5 w-5 text-blue-600 mr-2" />
                  <span>{method.name}</span>
                </div>
              ))}
            </div>
          </div>

          {order.paymentMethod === 'card' && (
            <div className="space-y-4 border rounded-lg p-6 bg-gray-50">
              <h3 className="text-lg font-semibold mb-4">Card Information</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  maxLength={16}
                  placeholder="1234 5678 9012 3456"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={cardInfo.number}
                  onChange={(e) => setCardInfo({ ...cardInfo, number: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={cardInfo.name}
                  onChange={(e) => setCardInfo({ ...cardInfo, name: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    maxLength={5}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={cardInfo.expiry}
                    onChange={(e) => setCardInfo({ ...cardInfo, expiry: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CVV
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    maxLength={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={cardInfo.cvv}
                    onChange={(e) => setCardInfo({ ...cardInfo, cvv: e.target.value })}
                  />
                </div>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};