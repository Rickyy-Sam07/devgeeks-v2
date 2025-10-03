export function About() {
  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">🌍 About DevGeeks</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Founded in 2025, DevGeeks is a vibrant hub for developers, indie creators, and tech enthusiasts.
            Here, you can showcase your projects, receive honest feedback, and connect with a supportive community of innovators.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-lime-300 mb-3">🚀 Our Mission</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Learning together</li>
                <li>• Building meaningful projects</li>
                <li>• Collaborating across borders</li>
                <li>• Inspiring the next generation of makers</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-lime-300 mb-3">🎯 What You'll Gain</h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                <div>🤝 Collaboration</div>
                <div>🎓 Mentorship</div>
                <div>🌍 Community</div>
                <div>⚡ Tech Insights</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}