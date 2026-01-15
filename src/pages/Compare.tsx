import { Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react';

export default function Compare() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transparency Over Sales
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here's what most agents hide. We're showing it all.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
          <div className="grid md:grid-cols-2 divide-x divide-gray-200">
            <div className="p-8 bg-red-50">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <EyeOff className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">What Agents Usually Hide</h2>
              </div>
              <ul className="space-y-4">
                {[
                  'Commission rates (usually 15-40%)',
                  'Which policies pay them more',
                  'Policy exclusions and fine print',
                  'Cheaper alternatives from other companies',
                  'When you actually DON\'T need insurance'
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-green-50">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">What We Show You</h2>
              </div>
              <ul className="space-y-4">
                {[
                  'Exact commission we earn from each policy',
                  'Side-by-side comparison of all options',
                  'Full breakdown of terms and exclusions',
                  'Best value policies, not highest-paying ones',
                  'Honest answer: "Maybe wait" if needed'
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            How We Make Money (Yes, We're Honest About It)
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-gray-700">
            <p>
              We earn a commission when you buy insurance. That's how advisory works.
              Most agents hide this. We don't.
            </p>
            <p>
              <strong className="text-gray-900">Commission range:</strong> Typically 10-35% of your
              first-year premium, depending on the policy type and company.
            </p>
            <p>
              <strong className="text-gray-900">Our promise:</strong> We'll always recommend what's
              best for you, not what pays us the most. If a lower-commission policy is better suited
              to your needs, we'll tell you.
            </p>
            <p className="text-sm bg-white p-4 rounded-lg border-l-4 border-blue-500">
              We believe transparency builds trust. And trust builds long-term relationships,
              which is worth more than a quick commission.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Sample Policy Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Feature</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Policy A</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Policy B</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Policy C</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 px-4 text-gray-700">Annual Premium</td>
                  <td className="py-3 px-4 text-gray-900">₹8,000</td>
                  <td className="py-3 px-4 text-gray-900">₹7,500</td>
                  <td className="py-3 px-4 text-gray-900">₹9,200</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700">Coverage Amount</td>
                  <td className="py-3 px-4 text-gray-900">₹1 Cr</td>
                  <td className="py-3 px-4 text-gray-900">₹1 Cr</td>
                  <td className="py-3 px-4 text-gray-900">₹1 Cr</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700">Claim Settlement Ratio</td>
                  <td className="py-3 px-4 text-gray-900">98%</td>
                  <td className="py-3 px-4 text-gray-900">96%</td>
                  <td className="py-3 px-4 text-gray-900">99%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700">Critical Illness Rider</td>
                  <td className="py-3 px-4 text-gray-900">Optional</td>
                  <td className="py-3 px-4 text-gray-900">Included</td>
                  <td className="py-3 px-4 text-gray-900">Optional</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700">Our Commission</td>
                  <td className="py-3 px-4 text-blue-600 font-medium">25%</td>
                  <td className="py-3 px-4 text-blue-600 font-medium">15%</td>
                  <td className="py-3 px-4 text-blue-600 font-medium">35%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700 font-semibold">Best For</td>
                  <td className="py-3 px-4 text-gray-900">Balanced option</td>
                  <td className="py-3 px-4 text-green-600 font-medium">Budget-conscious</td>
                  <td className="py-3 px-4 text-gray-900">Max benefits</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center">
            This is an illustrative example. Actual policies vary based on age, health, and provider.
          </p>
        </div>

        <div className="bg-yellow-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            When Insurance Might NOT Be Right For You
          </h2>
          <p className="text-gray-700 text-center mb-6 max-w-2xl mx-auto">
            Most agents won't say this. We will.
          </p>
          <div className="space-y-3 max-w-2xl mx-auto">
            {[
              'If you have no dependents and significant savings',
              'If you can barely afford premiums right now',
              'If you have critical immediate financial needs',
              'If you already have adequate coverage from employer'
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border-l-4 border-yellow-500">
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-6 italic">
            "If insurance doesn't make sense for you right now, we'll tell you that too."
          </p>
        </div>
      </div>
    </div>
  );
}
