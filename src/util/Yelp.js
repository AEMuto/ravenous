// Client ID
// 3xxU-mXwSpIb-gi42rC1xg

// API Key
// Kc8LcizksnlKCKppWmeVrLqb5i0-Xj4i9wzKW1r5SdSMEC1qzUDLHNeZu0m4fXmVhQCGTMjhvY3ZGdBZPBhyHImBtNtDzL-tJSeRrUOS4U9O-EQMIruoUROnnt6OX3Yx

const apiKey = 'Kc8LcizksnlKCKppWmeVrLqb5i0-Xj4i9wzKW1r5SdSMEC1qzUDLHNeZu0m4fXmVhQCGTMjhvY3ZGdBZPBhyHImBtNtDzL-tJSeRrUOS4U9O-EQMIruoUROnnt6OX3Yx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(jsonResponse => { if (jsonResponse.businesses) {
      return jsonResponse.businesses.map(business => {
        return {
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.adress1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories.title,
          rating: business.rating,
          reviewCount: business.review_count
        }
      })
    } });
  }
};

export default Yelp;