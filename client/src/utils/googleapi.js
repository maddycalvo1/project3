import axios from "axios";

export default {

    // This API is going to get the search for nearby Dog Parks, based upon Location Entered
    getParkData: (location) =>
    axios({
        'method':'GET',
        'url':'https://maps.googleapis.com/maps/api/place/nearbysearch/json?',
        // 'headers': {
        //     'content-type':'application/octet-stream',
        //     'x-rapidapi-host':'example.com',
        //     'x-rapidapi-key': process.env.RAPIDAPI_KEY
        // },
        'params': {
            'key':'AIzaSyAgJLBEgA0zRfF7EgTRVuBqBWahOSYLL8s',
            'type':'park',
            'name':'dog',
            'rankby':'distance',
            'location': location
        },
    }),

    // THis API is going to translate the inputted info, such as Address or Zip code, to Lat/Long info
    getZipData: () =>
    axios({
        'method':'GET',
        'url':'https://maps.googleapis.com/maps/api/geocode/json?',
        'params': {
            // 'search':'parameter',
            'key':'AIzaSyAgJLBEgA0zRfF7EgTRVuBqBWahOSYLL8s',
            'address': '/:location'
        },
    }).then(
        getParkData(res)
    ),
    
    // This API pulls up information about the place in question based upon place_id which is part fo the return for Nearby Locations
    getDetailData: (placeId) =>
    axios({
        'method':'GET',
        'url':'https://maps.googleapis.com/maps/api/geocode/json?',
        'params': {
            // 'search':'parameter',
            'key':'AIzaSyAgJLBEgA0zRfF7EgTRVuBqBWahOSYLL8s',
            'place_id': placeId,
            'fields': 'name,formatted_address,photo,url'
        }
    })
};
