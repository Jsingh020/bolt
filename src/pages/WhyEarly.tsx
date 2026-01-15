import { TrendingDown, Calendar, Heart, X } from 'lucide-react';

export default function WhyEarly() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Buy Insurance Early?
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Not a sales pitch. Just honest reasons backed by numbers.
          </p>
        </div>

        <div className="space-y-12">
          <div className="bg-blue-50 rounded-2xl p-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingDown className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  It's Cheaper. Way Cheaper.
                </h2>
                <p className="text-gray-700 mb-4">
                  A 25-year-old pays around 40% less than a 35-year-old for the same coverage.
                  That's not marketing talk—that's how actuarial math works.
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                  <p className="text-sm font-medium text-gray-900 mb-2">Real Example:</p>
                  <p className="text-sm text-gray-600">
                    A 1 Crore term plan at age 25: ~₹8,000/year<br />
                    Same plan at age 35: ~₹13,000/year<br />
                    That's ₹5,000 more every year for 30 years = ₹1,50,000 extra.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-2xl p-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  You're Healthier Now
                </h2>
                <p className="text-gray-700 mb-4">
                  Insurance companies check your health. The younger and healthier you are,
                  the easier it is to get approved—and at better rates.
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                  <p className="text-sm font-medium text-gray-900 mb-2">Honest truth:</p>
                  <p className="text-sm text-gray-600">
                    If you wait until you have health issues, you might face higher premiums,
                    exclusions, or even rejection. Lock in coverage while you're in good health.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Longer Coverage Period
                </h2>
                <p className="text-gray-700 mb-4">
                  Buy at 25, and you're covered until 55+ at today's rates.
                  Buy at 40, and you might struggle to get long-term coverage.
                </p>
                <p className="text-gray-700">
                  Plus, life changes fast. Marriage, kids, loans—by the time you "need"
                  insurance, you're already paying more for it.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Common Myths vs Truth
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-400">
                <div className="flex items-start space-x-3 mb-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <p className="font-semibold text-gray-900">
                    "I'm too young to need insurance"
                  </p>
                </div>
                <p className="text-sm text-gray-600 ml-8">
                  Insurance isn't about dying young—it's about locking in low rates while you can.
                  It's like buying an umbrella before it rains, not after.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-red-400">
                <div className="flex items-start space-x-3 mb-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <p className="font-semibold text-gray-900">
                    "I'll buy when I have a family"
                  </p>
                </div>
                <p className="text-sm text-gray-600 ml-8">
                  By then, you'll pay more and might have health conditions that increase costs further.
                  Buy now, lock in rates, and you're set.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-red-400">
                <div className="flex items-start space-x-3 mb-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <p className="font-semibold text-gray-900">
                    "Agents just want commission"
                  </p>
                </div>
                <p className="text-sm text-gray-600 ml-8">
                  Some do. We're upfront about it. But good advice is worth paying for—if it's honest
                  and transparent. We show you the math, not just the pitch.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-100 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Bottom Line
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Starting early saves you money, guarantees coverage, and gives you peace of mind.
              But only if it fits your budget and goals. If you're not ready, that's okay too.
              We're here when you are.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
