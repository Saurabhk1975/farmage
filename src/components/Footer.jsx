export default function Footer(){ 
  return (
    <footer className="mt-auto bg-white/60 border-t">
      <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-brown gap-2">
        <div>© {new Date().getFullYear()} Farmage — Madhubani Origin</div>
        <div>Made with care • Mumbai • <a href="mailto:farmagestore@gmail.com" className="underline">farmagestore@gmail.com</a>• <a className="underline"> +91 - 9662966244</a>
        </div>
      </div>
    </footer>
  )
}
