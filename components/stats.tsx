import { Globe2, Users, MessageSquare } from "lucide-react";

export default function Stats() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Join our growing community
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-sky-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe2 className="h-8 w-8 text-sky-400" />
            </div>
            <div className="font-bold text-2xl text-white mb-2">200+</div>
            <div className="text-gray-400">Countries in Our Database</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-sky-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-sky-400" />
            </div>
            <div className="font-bold text-2xl text-white mb-2">Beta</div>
            <div className="text-gray-400">Limited Access Phase</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-sky-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="h-8 w-8 text-sky-400" />
            </div>
            <div className="font-bold text-2xl text-white mb-2">24/7</div>
            <div className="text-gray-400">AI Assistant Support</div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 max-w-2xl mx-auto">
            We&apos;re currently in beta, building a comprehensive platform to
            help global citizens make informed decisions about international
            relocation. Join us early to shape the future of global mobility.
          </p>
        </div>
      </div>
    </section>
  );
}
