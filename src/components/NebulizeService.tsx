import { DirectionsRenderer, GoogleMap, LoadScript } from '@react-google-maps/api';
import { Car, Clock, MapPin, Phone, Star, Stethoscope } from 'lucide-react';
import React, { useState } from 'react';
import { DeliveryRequest, Hospital, MedicalData, Review } from '../types';

export const NebulizeService: React.FC = () => {
  const [step, setStep] = useState(1);
  const [medicalData, setMedicalData] = useState<MedicalData>({
    babyName: '',
    dateOfBirth: '',
    medicalHistory: '',
    previousConsultations: '',
    medicalTests: '',
  });
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);
  const [deliveryRequests, setDeliveryRequests] = useState<DeliveryRequest[]>([]);
  const [needsDelivery, setNeedsDelivery] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState<DeliveryRequest | null>(null);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState<Partial<Review>>({
    rating: 5,
    comment: '',
  });

  const nearbyHospitals: Hospital[] = [
    {
      id: '1',
      name: "Children's Medical Center",
      location: { lat: 40.7128, lng: -74.0060, address: '123 Healthcare St' },
      price: 150,
      rating: 4.8,
      distance: 1.2,
      walkingTime: '15 mins',
      drivingTime: '5 mins',
      reviews: [
        {
          id: '1',
          userName: 'Maria L.',
          rating: 5,
          comment: 'Excellent nebulizer service, very caring staff.',
          date: '2024-03-15',
        },
        {
          id: '2',
          userName: 'David K.',
          rating: 4,
          comment: 'Professional service, clean facilities.',
          date: '2024-03-10',
        },
      ],
      facilities: ['Emergency Care', 'Pediatric Specialists', 'Modern Equipment', '24/7 Service'],
      openingHours: '24/7',
    },
    {
      id: '2',
      name: "St. Mary's Pediatric Care",
      location: { lat: 40.7282, lng: -74.0776, address: '456 Medical Ave' },
      price: 165,
      rating: 4.7,
      distance: 1.8,
      walkingTime: '20 mins',
      drivingTime: '7 mins',
      reviews: [
        {
          id: '3',
          userName: 'Sarah M.',
          rating: 5,
          comment: 'Great experience with the nebulizer treatment!',
          date: '2024-03-12',
        },
      ],
      facilities: ['Pediatric Ward', 'Modern Equipment', 'Pharmacy', 'Parking'],
      openingHours: '8:00 AM - 10:00 PM',
    },
  ];

  const handleSubmitMedicalData = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleHospitalSelection = (hospital: Hospital) => {
    setSelectedHospital(hospital);
    setStep(3);
  };

  const handleDeliveryOption = (needsDelivery: boolean) => {
    setNeedsDelivery(needsDelivery);
    if (needsDelivery) {
      setDeliveryRequests([
        {
          id: '1',
          driverName: 'John Doe',
          price: 25,
          estimatedTime: '15 mins',
          rating: 4.7,
          phoneNumber: '+1 (555) 123-4567',
          currentLocation: { lat: 40.7128, lng: -74.0060, address: 'Current Location' },
          route: [
            { lat: 40.7128, lng: -74.0060, address: 'Start' },
            { lat: 40.7129, lng: -74.0061, address: 'Waypoint 1' },
            { lat: 40.7130, lng: -74.0062, address: 'End' },
          ],
        },
        {
          id: '2',
          driverName: 'Sarah Smith',
          price: 22,
          estimatedTime: '20 mins',
          rating: 4.8,
          phoneNumber: '+1 (555) 234-5678',
          currentLocation: { lat: 40.7130, lng: -74.0065, address: 'Current Location' },
          route: [
            { lat: 40.7130, lng: -74.0065, address: 'Start' },
            { lat: 40.7131, lng: -74.0064, address: 'Waypoint 1' },
            { lat: 40.7132, lng: -74.0063, address: 'End' },
          ],
        },
      ]);
    }
    setStep(4);
  };

  const handleDriverSelection = (driver: DeliveryRequest) => {
    setSelectedDriver(driver);
    setStep(5);
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedHospital) {
      const review: Review = {
        id: Date.now().toString(),
        userName: 'Anonymous User',
        rating: newReview.rating || 5,
        comment: newReview.comment || '',
        date: new Date().toISOString().split('T')[0],
      };
      selectedHospital.reviews.push(review);
      setShowReviewForm(false);
      setNewReview({ rating: 5, comment: '' });
    }
  };

  const getQRCodeUrl = () => {
    const randomString = Math.random().toString(36).substring(7);
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=BLHC-${randomString}`;
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        {step === 1 && (
          <form onSubmit={handleSubmitMedicalData}>
            <div className="flex items-center mb-6">
              <Stethoscope className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold">Medical Information</h2>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Baby's Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={medicalData.babyName}
                  onChange={(e) => setMedicalData({ ...medicalData, babyName: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input
                  type="date"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={medicalData.dateOfBirth}
                  onChange={(e) => setMedicalData({ ...medicalData, dateOfBirth: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Medical History</label>
                <textarea
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  rows={3}
                  value={medicalData.medicalHistory}
                  onChange={(e) => setMedicalData({ ...medicalData, medicalHistory: e.target.value })}
                  placeholder="e.g., allergies, chronic conditions, current medications"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Previous Consultations</label>
                <textarea
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  rows={3}
                  value={medicalData.previousConsultations}
                  onChange={(e) => setMedicalData({ ...medicalData, previousConsultations: e.target.value })}
                  placeholder="e.g., dates and reasons for previous doctor visits"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Medical Tests</label>
                <textarea
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  rows={3}
                  value={medicalData.medicalTests}
                  onChange={(e) => setMedicalData({ ...medicalData, medicalTests: e.target.value })}
                  placeholder="e.g., recent tests or examinations"
                />
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Why Provide Medical Information?
                </h3>
                <p className="text-blue-800 mb-4">
                  Providing complete medical information helps us:
                </p>
                <ul className="list-disc list-inside text-blue-800 space-y-2">
                  <li>Match you with the most suitable hospital</li>
                  <li>Ensure proper preparation for your treatment</li>
                  <li>Enable healthcare providers to give the best care</li>
                  <li>Prevent potential complications</li>
                </ul>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700"
              >
                Find Nearby Hospitals
              </button>
            </div>
          </form>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Available Hospitals</h2>
            <div className="space-y-6">
              {nearbyHospitals.map((hospital) => (
                <div
                  key={hospital.id}
                  className="border rounded-lg p-6 hover:border-blue-500 cursor-pointer transition-all duration-200 hover:shadow-md"
                >
                  <div className="flex flex-col space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold">{hospital.name}</h3>
                        <p className="text-sm text-gray-600 flex items-center mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {hospital.location.address}
                        </p>
                        <div className="flex items-center mt-2">
                          <Star className="h-4 w-4 text-yellow-400" />
                          <span className="ml-1 text-gray-600">{hospital.rating}</span>
                          <span className="mx-2 text-gray-400">•</span>
                          <Clock className="h-4 w-4 text-gray-400" />
                          <span className="ml-1 text-gray-600">
                            Walk: {hospital.walkingTime} | Drive: {hospital.drivingTime}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-lg">${hospital.price}</p>
                        <p className="text-sm text-gray-600">{hospital.distance} km away</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-gray-700">Facilities:</h4>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {hospital.facilities.map((facility, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                            >
                              {facility}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-700">Opening Hours:</h4>
                        <p className="text-gray-600 mt-1">{hospital.openingHours}</p>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-700">Reviews:</h4>
                        <div className="space-y-2 mt-2">
                          {hospital.reviews.map((review) => (
                            <div key={review.id} className="bg-gray-50 p-3 rounded-lg">
                              <div className="flex justify-between items-center mb-1">
                                <span className="font-medium">{review.userName}</span>
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-yellow-400" />
                                  <span className="ml-1">{review.rating}</span>
                                </div>
                              </div>
                              <p className="text-gray-600 text-sm">{review.comment}</p>
                              <p className="text-gray-400 text-xs mt-1">{review.date}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleHospitalSelection(hospital)}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Select Hospital
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Transportation Options</h2>
            <div className="space-y-4">
              <button
                onClick={() => handleDeliveryOption(true)}
                className="w-full flex items-center justify-center bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700"
              >
                <Car className="h-5 w-5 mr-2" />
                Request Transportation
              </button>
              <button
                onClick={() => handleDeliveryOption(false)}
                className="w-full border border-blue-600 text-blue-600 py-3 px-4 rounded-md hover:bg-blue-50"
              >
                I'll go by myself
              </button>
            </div>
          </div>
        )}

        {step === 4 && needsDelivery && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Available Drivers</h2>
            <div className="space-y-4">
              {deliveryRequests.map((request) => (
                <div
                  key={request.id}
                  className="border rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-all duration-200 hover:shadow-md"
                  onClick={() => handleDriverSelection(request)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">{request.driverName}</h3>
                      <p className="text-sm text-gray-600">
                        Estimated arrival: {request.estimatedTime}
                      </p>
                      <div className="flex items-center mt-1">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span className="text-sm text-gray-600 ml-1">{request.rating}</span>
                      </div>
                      <div className="flex items-center mt-1 text-blue-600">
                        <Phone className="h-4 w-4 mr-1" />
                        <span className="text-sm">{request.phoneNumber}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${request.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {((step === 4 && !needsDelivery) || step === 5) && (
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-6">Appointment Confirmed</h2>
            <div className="mb-6">
              <img
                src={getQRCodeUrl()}
                alt="Appointment QR Code"
                className="mx-auto w-48 h-48 object-cover rounded-lg shadow-md"
              />
            </div>
            
            {selectedDriver && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Driver's Route</h3>
                <div className="h-64 w-full rounded-lg overflow-hidden">
                  <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                    <GoogleMap
                      mapContainerStyle={{ width: '100%', height: '100%' }}
                      center={selectedDriver.currentLocation}
                      zoom={13}
                    >
                      <DirectionsRenderer
                        options={{
                          directions: {
                            routes: [{
                              legs: [{
                                steps: selectedDriver.route.map((location, index) => ({
                                  start_location: { lat: location.lat, lng: location.lng },
                                  end_location: index < selectedDriver.route.length - 1
                                    ? { lat: selectedDriver.route[index + 1].lat, lng: selectedDriver.route[index + 1].lng }
                                    : { lat: location.lat, lng: location.lng }
                                }))
                              }]
                            }]
                          }
                        }}
                      />
                    </GoogleMap>
                  </LoadScript>
                </div>
              </div>
            )}

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4">Appointment Details</h3>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-medium">Hospital:</span> {selectedHospital?.name}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Address:</span> {selectedHospital?.location.address}
                </p>
                {selectedDriver && (
                  <>
                    <p className="text-gray-700">
                      <span className="font-medium">Driver:</span> {selectedDriver.driverName}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Driver's Phone:</span> {selectedDriver.phoneNumber}
                    </p>
                  </>
                )}
                <p className="text-xl font-bold text-blue-600 mt-4">
                  Total Price: ${(selectedHospital?.price || 0) + (selectedDriver?.price || 0)}
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowReviewForm(true)}
              className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
            >
              Leave a Review
            </button>

            {showReviewForm && (
              <div className="mt-6">
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Rating</label>
                    <select
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      value={newReview.rating}
                      onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                    >
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <option key={rating} value={rating}>
                          {rating} Star{rating !== 1 ? 's' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Comment</label>
                    <textarea
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      rows={3}
                      value={newReview.comment}
                      onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                  >
                    Submit Review
                  </button>
                </form>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}