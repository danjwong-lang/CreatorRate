import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

function InfluencerCard({ influencer }) {
  return (
    <Link to={`/influencer/${influencer.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
        <img 
          src={influencer.avatar} 
          alt={influencer.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{influencer.name}</h3>
          <p className="text-sm text-gray-600">{influencer.handle}</p>
          
          <div className="flex items-center mt-2">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="ml-1 text-sm font-medium">{influencer.rating}</span>
            <span className="ml-1 text-sm text-gray-600">({influencer.reviewCount} reviews)</span>
          </div>
          
          <p className="text-sm text-gray-600 mt-2">{influencer.followers} followers</p>
          <p className="text-sm text-gray-500">{influencer.platform}</p>
          
          <span className="inline-block mt-3 px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
            {influencer.category}
          </span>

          {/* Pricing Section */}
          {influencer.paidServices ? (
            <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
              <div className="text-lg font-bold text-green-600">
                {influencer.priceRange}
              </div>
              <div className="flex items-center gap-1 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                <span>🎯</span>
                <span>Paid Services</span>
              </div>
            </div>
          ) : (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-400 italic">No paid services</p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default InfluencerCard;