import { Link } from 'react-router-dom';
import { Shield, Phone, DollarSign, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Insurance, without pressure
            <br />
            <span className="text-blue-600">or spam.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            We explain. You decide. No calls unless you ask.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/why-early"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-4 rounded-lg transition shadow-lg hover:shadow-xl"
            >
              Learn Before Buying
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-50 text-blue-600 font-medium px-8 py-4 rounded-lg transition border-2 border-blue-500"
            >
              Talk Only When Ready
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">No back-to-back calls</h3>
            <p className="text-sm text-gray-600">
              We respect your time. You control when we reach out.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">No hidden commissions</h3>
            <p className="text-sm text-gray-600">
              We're transparent about how we make money.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Real comparison, real numbers</h3>
            <p className="text-sm text-gray-600">
              We'll even tell you when insurance doesn't make sense.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Promise to You
          </h2>

          <div className="space-y-4">
            {[
              'We educate first, sell later (if at all)',
              'We show you what other agents hide',
              'We never pressure you into buying',
              'We help you understand, not confuse you',
              'We tell you if insurance isn\'t right for you yet'
            ].map((promise, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{promise}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/compare"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium px-8 py-3 rounded-lg transition"
            >
              See How We're Different
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
