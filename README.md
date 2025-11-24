# 🕌 Website Pondok Pesantren Asy-Syaukani

Website resmi Pondok Pesantren Asy-Syaukani Curup, Bengkulu dengan sistem pendaftaran santri baru online dan integrasi payment gateway.

[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 📋 Deskripsi

Website ini dibangun untuk mempermudah calon santri dan wali santri dalam:
- 📖 Mengenal profil dan program Pondok Pesantren Asy-Syaukani
- 📝 Melakukan pendaftaran santri baru secara online
- 💳 Melakukan pembayaran (pendaftaran, daftar ulang, semester) dengan payment gateway
- 📊 Tracking status pendaftaran dan pembayaran

## ✨ Fitur Utama

### Untuk Pengunjung:
- 🏠 Halaman beranda dengan informasi lengkap ponpes
- 📚 Profil ponpes (visi, misi, sejarah, fasilitas)
- 🎓 Program pendidikan (Tahfidz, Kitab Kuning, Bahasa Arab)
- 📞 Informasi kontak dan lokasi

### Untuk Calon Santri:
- 📝 Formulir pendaftaran online lengkap
- 📤 Upload dokumen (KTP, KK, Foto, Ijazah)
- 💰 Pembayaran online via Midtrans (VA Bank, E-wallet, QRIS)
- 🧾 Download bukti pendaftaran dan pembayaran
- 📊 Tracking status pendaftaran

### Untuk Admin:
- 👥 Kelola data santri (CRUD)
- ✅ Verifikasi pendaftaran
- 💳 Monitoring pembayaran
- 📈 Dashboard statistik
- 📥 Export data (Excel/PDF)
- ⚙️ Manajemen tahun ajaran

## 🛠️ Tech Stack

### Frontend:
- **React 18** - UI Library
- **Vite** - Build Tool & Dev Server
- **Tailwind CSS** - Utility-first CSS Framework
- **React Router DOM** - Client-side Routing
- **Lucide React** - Icon Library
- **React Hook Form** - Form Management
- **Zod** - Schema Validation
- **TanStack Query** - Data Fetching & Caching
- **Zustand** - State Management
- **Axios** - HTTP Client
- **Date-fns** - Date Manipulation

### Backend & Services:
- **Supabase** - Database, Authentication, Storage
- **Midtrans** - Payment Gateway (VA, E-wallet, QRIS)

### Future Integrations:
- 🤖 AI Chatbot untuk bantuan pendaftaran
- 📄 AI Document Verification
- 📊 AI Analytics & Insights

## 🎨 Design System

### Color Palette:
- **Primary Green**: `#0b8f55` - Warna khas pondok pesantren
- **Accent Green**: `#4cd790` - Untuk highlights & hover
- **Gold**: `#d4af37` - Premium touch
- **Neutral**: Gray scale untuk text & backgrounds

### Typography:
- **Headings**: Plus Jakarta Sans
- **Body**: Inter

## 📦 Installation

### Prerequisites:
- Node.js 18+ 
- npm atau yarn
- Git

### Setup Local Development:

1. **Clone repository**
```bash
git clone https://github.com/username/ponpes-asy-syaukani.git
cd ponpes-asy-syaukani

2. Install dependencies
npm install

3. Setup environment variables
cp .env.example .env.local

Edit .env.local dan isi dengan credentials:
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_MIDTRANS_CLIENT_KEY=your_midtrans_client_key

4. Run development server
npm run dev

5. Open browser
http://localhost:5173

🏗️ Project Structure
ponpes-asy-syaukani/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, logos, illustrations
│   ├── components/        # Reusable components
│   │   ├── ui/           # UI components (Button, Input, Card)
│   │   ├── layout/       # Layout components (Navbar, Footer)
│   │   ├── forms/        # Form components
│   │   └── common/       # Common components
│   ├── pages/            # Page components
│   ├── services/         # API services (Supabase, Midtrans)
│   ├── hooks/            # Custom React hooks
│   ├── store/            # Zustand stores
│   ├── utils/            # Helper functions
│   ├── lib/              # Third-party configs
│   ├── App.jsx           # Root component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── .env.example          # Environment variables example
├── .gitignore           # Git ignore rules
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── README.md            # This file

🚀 Build for Production
npm run build

Output akan ada di folder dist/
📝 Available Scripts
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

🌐 Deployment
Website ini dapat di-deploy ke:
Vercel (Recommended) - Gratis, auto-deploy dari GitHub
Netlify - Gratis, mudah setup
GitHub Pages - Gratis untuk static sites

🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

📄 License
This project is licensed under the MIT License.

👨‍💻 Author
Rieza Eka Tomara
Portfolio: riezaekatomara-vercel.com
LinkedIn: linkedin.com/in/riezaekatomara
GitHub: @riezaekatomara

📧 Contact
Untuk pertanyaan atau demo project ini, hubungi:
Email: riezaekatomara@gmail.com
WhatsApp: 0858-8887-1997