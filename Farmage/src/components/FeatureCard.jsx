export default function FeatureCard({title, children}) {
  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-3">
      <h4 className="font-semibold text-darkgreen">{title}</h4>
      <div className="text-sm text-brown">{children}</div>
    </div>
  )
}
