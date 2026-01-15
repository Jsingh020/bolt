import { Heart, Shield, TrendingUp, Users } from 'lucide-react';

export default function ForParents() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            For Parents & Families
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A smart, thoughtful way to secure your child's future.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="flex items-start space-x-4 mb-6">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Why Early Insurance is a Smart Gift
              </h2>
              <p className="text-gray-700 mb-4">
                As a parent, you want to protect your children from life's uncertainties.
                Starting insurance coverage early is one of the most practical gifts you can give.
              </p>
            </div>
          </div>

          <div className="space-y-4 ml-16">
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <p className="text-sm font-semibold text-gray-900 mb-2">Locked-in Low Rates</p>
              <p className="text-sm text-gray-700">
                Insurance at 21-25 is significantly cheaper than at 35. Starting early saves
                thousands over a lifetime.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <p className="text-sm font-semibold text-gray-900 mb-2">Health While They're Healthy</p>
              <p className="text-sm text-gray-700">
                Young adults are typically in their best health. Coverage is easier to get
                and comes without exclusions or complications.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <p className="text-sm font-semibold text-gray-900 mb-2">Financial Responsibility</p>
              <p className="text-sm text-gray-700">
                Teaching your children about insurance early helps them understand long-term
                financial planning and protection.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Health Insurance vs Term Insurance
          </h2>
          <p className="text-gray-700 text-center mb-8 max-w-2xl mx-auto">
            Both are important, but they serve different purposes. Here's a simple breakdown:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Health Insurance</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Covers medical expenses—hospitalization, surgeries, treatments.
              </p>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <span className="text-blue-600 text-xs mt-1">●</span>
                  <p className="text-sm text-gray-700">Immediate need, especially post-25</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-blue-600 text-xs mt-1">●</span>
                  <p className="text-sm text-gray-700">Protects savings from medical emergencies</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-blue-600 text-xs mt-1">●</span>
                  <p className="text-sm text-gray-700">Renews annually</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Term Insurance</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Provides financial security to dependents if something happens to the insured.
              </p>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <span className="text-green-600 text-xs mt-1">●</span>
                  <p className="text-sm text-gray-700">Essential once you have dependents</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-600 text-xs mt-1">●</span>
                  <p className="text-sm text-gray-700">Replaces income for family</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-600 text-xs mt-1">●</span>
                  <p className="text-sm text-gray-700">Fixed term coverage (10-30 years)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-white rounded-lg p-4 border-l-4 border-blue-500">
            <p className="text-sm text-gray-700">
              <strong className="text-gray-900">Bottom line:</strong> Health insurance is for
              unexpected medical costs. Term insurance is for family financial protection.
              Ideally, have both.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="flex items-start space-x-4 mb-6">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Long-Term Family Protection Mindset
              </h2>
              <p className="text-gray-700 mb-4">
                Insurance isn't just about covering risks—it's about building a safety net
                that spans generations.
              </p>
            </div>
          </div>

          <div className="space-y-4 ml-16">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700">
                <strong className="text-gray-900">Start young, stay protected.</strong> Early
                insurance means decades of coverage at affordable rates.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700">
                <strong className="text-gray-900">Avoid coverage gaps.</strong> Many people wait
                until marriage or parenthood, leaving years unprotected.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700">
                <strong className="text-gray-900">Build financial discipline.</strong> Regular
                premiums teach consistent financial commitment.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700">
                <strong className="text-gray-900">Peace of mind for you.</strong> Knowing your
                children have coverage lets you rest easier.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-green-100 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            A Conversation Worth Having
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            We understand that insurance isn't the most exciting topic. But it's one of the most
            responsible decisions you can make for your family. We're here to make it simple,
            transparent, and pressure-free.
          </p>
          <p className="text-gray-600 italic">
            "The best time to get insurance was 10 years ago. The second best time is now."
          </p>
        </div>
      </div>
    </div>
  );
}
