import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, ExternalLink, CheckCircle } from 'lucide-react';
import { influencers } from '../data/influencers';

function InfluencerProfile() {
  const { id } = useParams();
  const influencer = influencers.find(inf => inf.id === parseInt(id));

  if (!influencer) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-gray-600">Influencer not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to all influencers
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white">
          <div className="flex items-start gap-6">
            <img 
              src={influencer.avatar} 
              alt={influencer.name}
              className="w-32 h-32 rounded-lg object-cover border-4 border-white shadow-lg"
            />
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold">{influencer.name}</h1>
                {influencer.verified && (
                  <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                    ✓ Verified
                  </span>
                )}
              </div>
              <p className="text-xl mb-4 opacity-90">{influencer.handle}</p>
              
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="text-lg font-semibold">{influencer.rating}</span>
                <span className="opacity-90">({influencer.reviewCount} reviews)</span>
              </div>

              <div className="flex gap-6 text-lg mb-4">
                <span><strong>{influencer.followers}</strong> followers</span>
                <span>|</span>
                <span><strong>{influencer.platform}</strong></span>
                <span>|</span>
                <span><strong>{influencer.category}</strong></span>
                <span>|</span>
                <span>Engagement: <strong>{influencer.engagement}</strong></span>
              </div>

              <p className="text-lg leading-relaxed mb-4 opacity-95">{influencer.bio}</p>

              <div className="flex gap-2 flex-wrap">
                {influencer.tags.map((tag, index) => (
                  <span key={index} className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        {influencer.paidServices ? (
          <div className="p-8 bg-green-50 border-2 border-green-500 m-6 rounded-lg">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold text-green-800">💰 Services & Pricing</h2>
                <span className="text-2xl font-bold text-green-600">{influencer.priceRange}</span>
              </div>
              <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                🎯 Offers Paid Services
              </span>
            </div>

            {/* Rates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {Object.entries(influencer.estimatedRates).map(([service, rate]) => (
                <div key={service} className="bg-white p-5 rounded-lg border-l-4 border-green-500">
                  <div className="font-semibold text-gray-700 mb-2">
                    {service.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  </div>
                  <div className="text-xl font-bold text-green-600">{rate}</div>
                </div>
              ))}
            </div>

            {/* Services List */}
            <div className="bg-white p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-green-800 mb-4">Available Services</h3>
              <div className="space-y-3">
                {influencer.servicesOffered.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-lg">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Meta Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg">
                <div className="text-sm text-gray-600 uppercase tracking-wide mb-1">Response Time</div>
                <div className="text-lg font-semibold text-green-800">{influencer.responseTime}</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-sm text-gray-600 uppercase tracking-wide mb-1">Minimum Budget</div>
                <div className="text-lg font-semibold text-green-800">{influencer.minimumBudget}</div>
              </div>
            </div>

            {/* Contact Button */}
            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-lg text-lg transition-colors">
              📧 Contact for Business Inquiries
            </button>
          </div>
        ) : (
          <div className="p-8 bg-gray-50 border-2 border-gray-300 m-6 rounded-lg text-center">
            <div className="text-5xl mb-4 opacity-50">ℹ️</div>
            <p className="text-xl text-gray-600">This influencer does not currently offer paid services.</p>
          </div>
        )}

        {/* Reviews Section */}
        <div className="p-8 border-t-2 border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Reviews ({influencer.reviewCount})</h2>
          </div>

          <div className="space-y-4">
            {influencer.reviews.map((review) => (
              <div key={review.id} className="bg-gray-50 p-5 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-700">{review.author}</span>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfluencerProfile;