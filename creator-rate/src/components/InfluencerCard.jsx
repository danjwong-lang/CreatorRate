import { Link } from 'react-router-dom';
import StarRating from './StarRating';

function InfluencerCard({ influencer }) {
  return (
    <Link to={`/influencer/${influencer.id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer">
        <div className="relative">
          <img
            src={influencer.avatar}
            alt={influencer.name}
            className="w-full h-48 object-cover"
          />
          {influencer.verified && (
            <div className="absolute top-3 right-3 bg-blue-500 rounded-full p-1">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          )}
          <div className="absolute bottom-3 left-3 bg-white px-2 py-1 rounded-md text-xs font-semibold text-gray-700">
            {influencer.platform}
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-lg font-bold text-gray-900">{influencer.name}</h3>
              <p className="text-sm text-gray-500">{influencer.handle}</p>
            </div>
          </div>

          <div className="flex items-center justify-between mb-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
              {influencer.category}
            </span>
            <span className="text-sm font-semibold text-gray-700">{influencer.followers}</span>
          </div>

          <div className="flex items-center justify-between">
            <StarRating rating={influencer.rating} size="sm" />
            <span className="text-xs text-gray-500">{influencer.reviewCount} reviews</span>
          </div>

          <p className="mt-3 text-sm text-gray-600 line-clamp-2">{influencer.bio}</p>
        </div>
      </div>
    </Link>
  );
}

export default InfluencerCard;
