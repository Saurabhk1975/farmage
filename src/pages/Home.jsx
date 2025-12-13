import Product3D from '../components/Product3D'
import FeatureCard from '../components/FeatureCard'

export default function Home(){
  const flavours = ['Classic Salted','Tangy Tamatar','Premium Gold']
  return (
    <main>
      <section className="bg-gradient-to-b from-beige to-lime">
        <Product3D />
      </section>

      <section className="container mx-auto px-4 md:px-6 py-12">
        <h2 className="text-2xl font-bold text-darkgreen">Why Farmage?</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <FeatureCard title="100% Natural">Hand sourced from trusted farms in Madhubani.</FeatureCard>
          <FeatureCard title="Hand Processed">Every seed handled with care to retain crunch.</FeatureCard>
          <FeatureCard title="Premium Flavours">Curated spice blends and gold series.</FeatureCard>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-12">
        <h3 className="text-xl font-semibold text-darkgreen">Our Flavours <span className="bg-red-600 text-white text-xs px-2 py-1 rounded ml-2">COMING SOON</span></h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {flavours.map((f, i) => (
            <div key={i} className="bg-white rounded-lg p-4 shadow relative">
              <img src="/images/mkh-front.jpg" alt={f} className="w-full h-32 md:h-40 object-cover rounded" />
              <h4 className="mt-2 text-darkgreen">{f}</h4>
              <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">Call Us</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
