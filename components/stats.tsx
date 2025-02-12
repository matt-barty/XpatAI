export default function Stats() {
    return (
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-16">
            Trusted by global citizens worldwide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">150+</div>
              <div className="text-gray-400">Countries Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50k+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">1M+</div>
              <div className="text-gray-400">Questions Answered</div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  