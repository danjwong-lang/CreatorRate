import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { influencers } from '../data/influencers';
import StarRating from '../components/StarRating';
import ReviewCard from '../components/ReviewCard';
import ReviewForm from '../components/ReviewForm';

function InfluencerProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const influencer = influencers.find(inf => inf.id === parseInt(id));

  const [reviews, setReviews] = useState(influencer?.reviews || []);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleReviewSubmit = (reviewData) => {
    const newReview = {
      id: reviews.length + 1,
      author: 'Anonymous User',
      rating: reviewData.overallRating,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }).replace(/\//g, '-'),
      comment: reviewData.comment,
      categoryRatings: reviewData.ratings,
      isFollower: reviewData.isFollower
    };

    setReviews([newReview, ...reviews]);
    setShowReviewForm(false);
    setShowSuccessMessage(true);

    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
  };

  if (!influencer) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Influencer not found</h2>
          <Link to="/" className="text-purple-600 hover:text-purple-700 font-medium">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to all influencers
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="md:flex">
            {/* Avatar Section */}
            <div className="md:w-1/3 bg-gradient-to-br from-purple-100 to-pink-100 p-8 flex items-center justify-center">
              <div className="text-center">
                <img
                  src={influencer.avatar}
                  alt={influencer.name}
                  className="w-40 h-40 rounded-full mx-auto mb-4 shadow-lg"
                />
                {influencer.verified && (
                  <div className="flex items-center justify-center space-x-1 text-blue-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">Verified</span>
                  </div>
                )}
              </div>
            </div>

            {/* Info Section */}
            <div className="md:w-2/3 p-8">
              <div className="mb-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{influencer.name}</h1>
                <p className="text-lg text-gray-600 mb-3">{influencer.handle}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                    {influencer.category}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {influencer.platform}
                  </span>
                </div>
              </div>

              <p className="text-gray-700 mb-6">{influencer.bio}</p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-600 uppercase tracking-wide mb-1">Followers</p>
                  <p className="text-2xl font-bold text-gray-900">{influencer.followers}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-600 uppercase tracking-wide mb-1">Engagement</p>
                  <p className="text-2xl font-bold text-gray-900">{influencer.engagement}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 col-span-2 sm:col-span-1">
                  <p className="text-xs text-gray-600 uppercase tracking-wide mb-1">Reviews</p>
                  <p className="text-2xl font-bold text-gray-900">{influencer.reviewCount}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center space-x-4">
                  <div>
                    <p className="text-5xl font-bold text-gray-900">{influencer.rating.toFixed(1)}</p>
                  </div>
                  <div>
                    <StarRating rating={influencer.rating} size="lg" showNumber={false} />
                    <p className="text-sm text-gray-600 mt-1">Based on {influencer.reviewCount} reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="border-t border-gray-200 px-8 py-4 bg-gray-50">
            <div className="flex flex-wrap gap-2">
              {influencer.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-white text-gray-700 border border-gray-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Reviews ({reviews.length})
            </h2>
            {!showReviewForm && (
              <button
                onClick={() => setShowReviewForm(true)}
                className="bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Write a Review
              </button>
            )}
          </div>

          {/* Success Message */}
          {showSuccessMessage && (
            <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-green-800">Review submitted successfully!</p>
                  <p className="text-xs text-green-700 mt-1">Your review has been added to this creator's profile.</p>
                </div>
              </div>
            </div>
          )}

          {/* Review Form */}
          {showReviewForm && (
            <div className="mb-6">
              <ReviewForm
                onSubmit={handleReviewSubmit}
                onCancel={() => setShowReviewForm(false)}
              />
            </div>
          )}

          {/* Reviews List */}
          <div className="space-y-4">
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>No reviews yet. Be the first to review this creator!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfluencerProfile;
