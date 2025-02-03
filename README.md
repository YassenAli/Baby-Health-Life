# Baby Health Life 👶 

![Baby Health Life Banner](https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=1200&h=400)

A comprehensive healthcare platform designed to provide essential services for babies and young children. This platform connects parents with healthcare providers, baby care products, and childcare services.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC.svg)](https://tailwindcss.com/)

## 🌟 Features

### 1. Nebulize Service
- Find nearby hospitals offering nebulizer services
- View detailed hospital information and ratings
- Schedule appointments with real-time availability
- Request transportation services
- Track driver location in real-time
- Generate QR codes for appointments

![Nebulize Service Screenshot](screenshots/Nebulize%20Service%20Screenshot.png)

### 2. Baby Milk Service
- Order baby milk products from trusted suppliers
- Choose between home delivery and store pickup
- Multiple payment options (Credit Card/Cash on Delivery)
- Real-time tracking of delivery status
- Find nearby pickup locations with distance information

![Baby Milk Service Screenshot](screenshots/Baby%20Milk%20Service%20Screenshot.png)

### 3. Nursery Service
- Browse and compare nearby nurseries
- View detailed nursery information and facilities
- Check age group compatibility
- Read and write reviews
- Schedule visits and enrollments
- Transportation arrangement options

![Nursery Service Screenshot](screenshots/Nursery%20Service%20Screenshot.png)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Google Maps API key

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/baby-health-life.git
cd baby-health-life
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Google Maps API key
```env
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
```

4. Start the development server
```bash
npm run dev
```

## 🛠️ Built With

- **[React](https://reactjs.org/)** - Frontend framework
- **[TypeScript](https://www.typescriptlang.org/)** - Programming language
- **[Vite](https://vitejs.dev/)** - Build tool
- **[Tailwind CSS](https://tailwindcss.com/)** - CSS framework
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[Google Maps API](https://developers.google.com/maps)** - Maps and location services

## 📱 Screenshots

### Home Page
![Home Page](screenshots/Home%20Page.png)

### Service Selection
![Service Selection](screenshots/Service%20Selection.png)

### Appointment Booking
![Appointment Booking](screenshots/Appointment%20Booking.png)

## 🌐 Live Demo

[View Live Demo](https://baby-health-life.netlify.app/)

## 📋 Project Structure

```
baby-health-life/
├── src/
│   ├── components/
│   │   ├── Layout.tsx
│   │   ├── NebulizeService.tsx
│   │   ├── BabyMilkService.tsx
│   │   ├── Home.tsx
│   │   └── NurseryService.tsx
│   ├── types.ts
│   ├── index.css
│   ├── App.tsx
│   └── main.tsx
├── index.html
└── package.json
```

## 🔥 Key Features Explained

### Real-time Location Tracking
- Integration with Google Maps API
- Live driver location updates
- Estimated arrival time calculations
- Route visualization

### Smart Appointment System
- QR code generation for appointments
- Real-time availability checking
- Automated confirmation system
- Reminder notifications

### Review System
- User ratings and reviews
- Photo upload capability
- Verified purchase badges
- Helpful review voting

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👥 Authors

- **Yassin Ali** - [YassenAli](https://github.com/YassenAli)

---

<p align="center">Made with ❤️ for healthier babies</p>