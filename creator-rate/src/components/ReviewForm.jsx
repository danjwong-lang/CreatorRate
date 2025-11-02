import { useState } from 'react';

function ReviewForm({ onSubmit, onCancel }) {
  const [ratings, setRatings] = useState({
    contentQuality: 0,
    authenticity: 0,
    value: 0,
    consistency: 0
  });
  const [reviewText, setReviewText] = useState('');
  const [isFollower, setIsFollower] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredStar, setHoveredStar] = useState(0);

  const categories = [
    {
      key: 'contentQuality',
      label: 'Content Quality',
      description: 'Production value, creativity, effort'
    },
    {
      key: 'authenticity',
      label: 'Authenticity',
      description: 'Genuine personality vs fake/promotional'
    },
    {
      key: 'value',
      label: 'Value',
      description: 'Worth your time/money, delivers what\'s promised'
    },
    {
      key: 'consistency',
      label: 'Consistency',
      description: 'Regular posting, reliable schedule'
    }
  ];

  const calculateOverallRating = () => {
    const ratingValues = Object.values(ratings);
    const total = ratingValues.reduce((sum, rating) => sum + rating, 0);
    return ratingValues.length > 0 ? (total / ratingValues.length).toFixed(1) : 0;
  };

  const handleStarClick = (category, star) => {
    setRatings(prev => ({
      ...prev,
      [category]: star
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that all ratings are filled
    if (Object.values(ratings).some(rating => rating === 0)) {
      alert('Please rate all categories');
      return;
    }

    if (!reviewText.trim()) {
      alert('Please write a review');
      return;
    }

    if (!isFollower) {
      alert('Please confirm that you follow this creator');
      return;
    }

    const overallRating = parseFloat(calculateOverallRating());

    onSubmit({
      ratings,
      comment: reviewText,
      overallRating,
      isFollower
    });

    // Reset form
    setRatings({
      contentQuality: 0,
      authenticity: 0,
      value: 0,
      consistency: 0
    });
    setReviewText('');
    setIsFollower(false);
  };

  const StarRatingInput = ({ category, currentRating }) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => handleStarClick(category, star)}
            onMouseEnter={() => {
              setHoveredCategory(category);
              setHoveredStar(star);
            }}
            onMouseLeave={() => {
              setHoveredCategory(null);
              setHoveredStar(0);
            }}
            className="focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-1 rounded transition-transform hover:scale-110"
          >
            <svg
              className={`w-8 h-8 transition-colors ${
                star <= (hoveredCategory === category && hoveredStar > 0 ? hoveredStar : currentRating)
                  ? 'text-yellow-400 fill-current'
                  : 'text-gray-300 fill-current'
              }`}
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </button>
        ))}
        <span className="ml-2 text-sm font-medium text-gray-700 min-w-[2rem]">
          {currentRating > 0 ? currentRating : '-'}
        </span>
      </div>
    );
  };

  const overallRating = calculateOverallRating();
  const hasAllRatings = Object.values(ratings).every(rating => rating > 0);

  return (
    <div className="bg-white rounded-lg border-2 border-purple-200 p-6 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Write a Review</h3>
        <button
          onClick={onCancel}
          type="button"
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Category Ratings */}
        <div className="space-y-6 mb-6">
          {categories.map((category) => (
            <div key={category.key} className="border-b border-gray-200 pb-4 last:border-b-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <div className="mb-2 sm:mb-0">
                  <label className="block text-sm font-semibold text-gray-900 mb-1">
                    {category.label}
                  </label>
                  <p className="text-xs text-gray-600">{category.description}</p>
                </div>
                <StarRatingInput
                  category={category.key}
                  currentRating={ratings[category.key]}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating Display */}
        {hasAllRatings && (
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-900">Overall Rating</span>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-purple-600">{overallRating}</span>
                <svg className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* Review Text */}
        <div className="mb-6">
          <label htmlFor="review-text" className="block text-sm font-semibold text-gray-900 mb-2">
            Your Review
          </label>
          <textarea
            id="review-text"
            rows={4}
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Share your experience following this creator..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-sm"
            required
          />
          <p className="mt-1 text-xs text-gray-500">
            {reviewText.length} characters
          </p>
        </div>

        {/* Follower Checkbox */}
        <div className="mb-6">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={isFollower}
              onChange={(e) => setIsFollower(e.target.checked)}
              className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
              required
            />
            <span className="text-sm font-medium text-gray-900">
              I currently follow this creator
            </span>
          </label>
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-3">
          <button
            type="submit"
            className="flex-1 bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Submit Review
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
