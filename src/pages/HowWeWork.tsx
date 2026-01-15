import { BookOpen, Search, MessageCircle, Shield, PhoneOff, Mail } from 'lucide-react';

export default function HowWeWork() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How We Work
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple steps. No pressure. You're in control the whole time.
          </p>
        </div>

        <div className="space-y-8 mb-16">
          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                1
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex items-center space-x-3 mb-3">
                <BookOpen className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">You Learn</h3>
              </div>
              <p className="text-gray-700">
                Start by reading our guides, understanding different types of insurance,
                and figuring out what actually makes sense for your situation. No signup required.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                2
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex items-center space-x-3 mb-3">
                <Search className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">You Compare</h3>
              </div>
              <p className="text-gray-700">
                Use our transparent comparison tools to see real policies side by side—including
                our commissions, claim settlement ratios, and honest pros and cons.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                3
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex items-center space-x-3 mb-3">
                <MessageCircle className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">You Ask (Only If You Want)</h3>
              </div>
              <p className="text-gray-700">
                When you're ready to talk—and only then—reach out. We'll answer your questions,
                clarify doubts, and help you make an informed decision. No pushy sales calls.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                4
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex items-center space-x-3 mb-3">
                <Shield className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">We Guide, Not Push</h3>
              </div>
              <p className="text-gray-700">
                If insurance makes sense for you, we'll help you get it. If it doesn't,
                we'll tell you that too. Our goal is your financial clarity, not a quick sale.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-2xl p-8 mb-12">
          <div className="flex items-start space-x-4 mb-6">
            <PhoneOff className="w-8 h-8 text-green-600 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Our No-Spam Promise
              </h2>
              <p className="text-gray-700 mb-4">
                We know how annoying persistent sales calls are. So here's our guarantee:
              </p>
            </div>
          </div>

          <div className="space-y-3 ml-12">
            <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
              <p className="text-gray-700">
                <strong className="text-gray-900">We do not call unless you request it.</strong>
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
              <p className="text-gray-700">
                <strong className="text-gray-900">No back-to-back follow-ups.</strong> If you say
                "not now," we respect that.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
              <p className="text-gray-700">
                <strong className="text-gray-900">No WhatsApp spam.</strong> We won't add you to
                groups or flood your messages.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
              <p className="text-gray-700">
                <strong className="text-gray-900">One conversation at a time.</strong> We'll wait
                for your reply, not chase you down.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-8">
          <div className="flex items-start space-x-4">
            <Mail className="w-8 h-8 text-blue-600 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Prefer to Stay Informed?
              </h2>
              <p className="text-gray-700 mb-4">
                If you're not ready to talk but want to keep learning, just let us know.
                We can send you:
              </p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Educational content on insurance basics</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Policy comparison guides</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Updates on new offerings (max once a month)</span>
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                No sales pitch. Just helpful information when you want it.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-900 font-semibold mb-2">
            Sound fair?
          </p>
          <p className="text-gray-600">
            That's how we think advisory should work.
          </p>
        </div>
      </div>
    </div>
  );
}
