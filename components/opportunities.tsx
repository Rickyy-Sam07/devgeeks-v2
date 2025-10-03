export function Opportunities() {
  const opportunities = [
    {
      icon: "💻",
      title: "Freelancing Opportunities",
      description: "Get connected with projects and clients through the community"
    },
    {
      icon: "🎓",
      title: "Student Project Support", 
      description: "Developers & seniors guide you through academic and real-world projects"
    },
    {
      icon: "🎤",
      title: "Events & Meetups",
      description: "Engage in community-driven seminars, workshops, and meetups"
    },
    {
      icon: "🏆",
      title: "Hackathons & Competitions",
      description: "Participate, learn, and showcase your skills on a bigger stage"
    }
  ]

  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">💼 Opportunities @ DevGeeks</h2>
          <p className="text-lg text-gray-300">At DevGeeks, we open doors for your growth</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {opportunities.map((item, index) => (
            <div key={index} className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-lime-300 mb-3">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}