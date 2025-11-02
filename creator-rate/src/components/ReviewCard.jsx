import StarRating from './StarRating';

function ReviewCard({ review }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">
              {review.author.charAt(0)}
            </span>
          </div>
          <div>
            <p className="font-semibold text-gray-900">{review.author}</p>
            <p className="text-xs text-gray-500">{review.date}</p>
          </div>
        </div>
        <StarRating rating={review.rating} size="sm" showNumber={false} />
      </div>
      <p className="text-gray-700 text-sm leading-relaxed">{review.comment}</p>
    </div>
  );
}

export default ReviewCard;
