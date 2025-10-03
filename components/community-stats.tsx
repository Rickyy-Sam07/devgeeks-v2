export function CommunityStats() {
  const stats = [
    { number: "500+", label: "Active Members", icon: "👥" },
    { number: "50+", label: "Projects Completed", icon: "🚀" },
    { number: "25+", label: "Mentors Available", icon: "🎓" },
    { number: "15+", label: "Events Hosted", icon: "🎉" }
  ]

  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">📊 Community Impact</h2>
          <p className="text-lg text-gray-300">Growing stronger together since 2025</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="glass-card p-6 rounded-2xl text-center">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-lime-300 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}