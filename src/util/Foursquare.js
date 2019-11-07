const clientId = ''; // Client ID de FourSquare
const clientSecret = '';  // Client Secret de FourSquare
const url = 'https://api.foursquare.com/v2/venues/explore?near=';
const Foursquare = {
    getAttractions: function(city){
        const urlToFetch = `${url}${city}&limit=3&client_id=${clientId}&client_secret=${clientSecret}&v=20191002`;
        return fetch(urlToFetch).then(response => response.json()).then(jsonResponse => {
            let venues = [];
            if (jsonResponse.meta.code === 200){
                venues = jsonResponse.response.groups[0].items.map(item => item.venue);
            }
            return venues;
        })
    }
}
export default Foursquare;