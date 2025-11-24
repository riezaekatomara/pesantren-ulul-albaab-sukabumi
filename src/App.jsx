import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-primary-500 mb-4">
            Pondok Pesantren Asy-Syaukani
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Navbar & Footer berhasil dibuat! 🎉
          </p>
          <p className="text-gray-600">
            Scroll ke bawah untuk lihat footer
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default App;