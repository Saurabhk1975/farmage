export default function Contact(){
  return (
    <main className='container mx-auto px-4 md:px-6 py-12'>
      <h2 className='text-2xl font-bold text-darkgreen'>Contact Us</h2>
      <p className='mt-4 text-brown'>For trade, bulk or export enquiries email <strong>farmagestore@gmail.com, +91 - 9662966244</strong> or use the form below.</p>
      <form className='mt-6 max-w-lg grid gap-4'>
        <input className='p-3 rounded border' placeholder='Name' />
        <input className='p-3 rounded border' placeholder='Email' />
        <textarea className='p-3 rounded border' rows='4' placeholder='Message'></textarea>
        <button className='btn-gold px-4 py-3 rounded disabled:opacity-60' disabled>Send Message</button>
      </form>
    </main>
  )
}
