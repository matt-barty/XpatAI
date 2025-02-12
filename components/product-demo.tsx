import { Switch } from "@/components/ui/switch";

export default function ProductDemo() {
  return (
    <section className="relative py-16">
      <div
        className="absolute inset-0 bg-[url('https://sjc.microlink.io/s1qc3y0-7TKMFz8F4xLo3z7PFRkHnNcqxFhFtTvlrBD0rN-Nn4lHoMKsG0vn6olpnvlDzUh-0Gy-rZgQjZRfgA.jpeg')] bg-cover bg-center"
        style={{ opacity: 0.3 }}
      />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-[420px] mx-auto bg-black rounded-2xl p-6 shadow-2xl">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-white flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M9 12h6" />
                </svg>
                Wallets
              </span>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                Email
              </span>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                SMS
              </span>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                Google
              </span>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
                </svg>
                Apple
              </span>
              <Switch />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
