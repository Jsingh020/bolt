import { useState } from 'react';
import { Mail, Phone, Shield, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    contactPreference: 'email-only',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        age: '',
        contactPreference: 'email-only',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-lg text-gray-700 mb-2">
            We've received your request.
          </p>
          <p className="text-gray-600">
            We'll reach out based on your preference. No spam, no pressure—promise.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Start Without Pressure
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tell us how you'd like to proceed. You're in control.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                  Phone Number <span className="text-gray-500 text-xs">(Optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="Only if you want us to call"
                />
              </div>

              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-900 mb-2">
                  Your Age <span className="text-gray-500 text-xs">(Optional)</span>
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="Helps us give better recommendations"
                />
              </div>

              <div>
                <label htmlFor="contactPreference" className="block text-sm font-medium text-gray-900 mb-2">
                  How Should We Reach You?
                </label>
                <select
                  id="contactPreference"
                  name="contactPreference"
                  value={formData.contactPreference}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                >
                  <option value="email-only">Just send me learning material, no calls</option>
                  <option value="call-once">Call me only once to discuss</option>
                  <option value="flexible">I'm flexible, you can reach out</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Any Questions? <span className="text-gray-500 text-xs">(Optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Tell us what you're looking for..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 rounded-lg transition shadow-lg hover:shadow-xl"
              >
                Submit Request
              </button>

              <p className="text-xs text-gray-500 text-center">
                We respect your privacy. Always.
              </p>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-green-50 rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <Shield className="w-8 h-8 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Your Privacy Matters</h3>
                  <p className="text-sm text-gray-700">
                    Your information will never be sold or shared with third parties.
                    We use it solely to help you make informed insurance decisions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <Mail className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Email-Only Option</h3>
                  <p className="text-sm text-gray-700">
                    Not ready to talk? No problem. Choose "email-only" and we'll send you
                    educational resources without ever calling.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <Phone className="w-8 h-8 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">One-Call Option</h3>
                  <p className="text-sm text-gray-700">
                    Want to talk but worried about spam? Select "call once" and we'll reach out
                    just one time to understand your needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 border-2 border-blue-200">
              <h3 className="font-bold text-gray-900 mb-3 text-center">Our Guarantee</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>No aggressive sales calls</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>No WhatsApp spam or group adds</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>No selling your data</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Honest advice, even if it means no sale</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 text-center">
          <p className="text-sm text-gray-600">
            <strong className="text-gray-900">Licensed Insurance Advisor</strong> •
            <strong className="text-gray-900"> Data Privacy Compliant</strong> •
            <strong className="text-gray-900"> Transparent Commission Policy</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
