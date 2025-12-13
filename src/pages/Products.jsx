export default function Products(){
  const items = [
    {title:'Classic', img:'/images/mkh-front.jpg'},
    {title:'Flavoured', img:'/images/mkh-front.jpg'},
    {title:'Premium Gold', img:'/images/mkh-front.jpg'},
  ]
  return (
    <main className='container mx-auto px-4 md:px-6 py-12'>
      <h2 className='text-2xl font-bold text-darkgreen'>Products <span className='bg-red-600 text-white text-xs px-2 py-1 rounded ml-2'>CONTACT US</span></h2>
      <p className='mt-4 text-brown'>Explore our ranges — Connect via Email or phone. For bulk or export orders, contact <strong>farmagestore@gmail.com</strong>.</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6'>
        {items.map((it, idx) => (
          <div key={idx} className='bg-white rounded-lg p-4 shadow relative'>
            <img src={it.img} alt={it.title} className='w-full h-40 object-cover rounded' />
            <h4 className='mt-2 text-darkgreen'>{it.title}</h4>
            <span className='absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded'>Call Us</span>
            <div className='mt-3'>
              <button className='btn-disabled px-3 py-2 rounded-md text-sm'>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
