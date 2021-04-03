const axios = require("axios");
const router = require("express").Router();

    // This API is going to get the search for nearby Dog Parks, based upon Location Entered
    const getParkData = axios.get({
        'method':'GET',
        'url':'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=30.4332061,-97.60057859999999&rankby=distance&type=park&name=dog&key=AIzaSyAgJLBEgA0zRfF7EgTRVuBqBWahOSYLL8s',
        // 'headers': {
        //     'content-type':'application/octet-stream',
        //     'x-rapidapi-host':'example.com',
        //     'x-rapidapi-key': process.env.RAPIDAPI_KEY
        // },
        // 'params': {
        //     'key':'AIzaSyAgJLBEgA0zRfF7EgTRVuBqBWahOSYLL8s',
        //     'type':'park',
        //     'name':'dog',
        //     'rankby':'distance',
        //     'location': location
        // },
    });

    // THis API is going to translate the inputted info, such as Address or Zip code, to Lat/Long info
    router.get("/:location", (req, res, next) => {
        axios.request({
            method:'GET',
            url:'https://maps.googleapis.com/maps/api/geocode/json?',
            params: {
                // 'search':'parameter',
                'key':'AIzaSyAgJLBEgA0zRfF7EgTRVuBqBWahOSYLL8s',
                'address': 78660
            }
        })
        .then(res => {
            // return getParkData(res.data.results[0].geometry.location.lat +","+ res.data.results[0].geometry.location.lng)
            // res.data.results[0].geometry.location
            console.log(res.data.results[0].geometry.location)
        }).catch(err => res.data(err));
    });
        
    // This API pulls up information about the place in question based upon place_id which is part fo the return for Nearby Locations
    // router.get("/:id", (req, res, next) => {
    //     axios.get({
    //         'method':'GET',
    //         'url':'https://maps.googleapis.com/maps/api/geocode/json?',
    //         'params': {
    //             // 'search':'parameter',
    //             'key':'AIzaSyAgJLBEgA0zRfF7EgTRVuBqBWahOSYLL8s',
    //             'place_id': req.params,
    //             'fields': 'name,formatted_address,photo,url'
    //         }
    //     }).then(res => {
    //         // return getParkData(res.data.results[0].geometry.location.lat +","+ res.data.results[0].geometry.location.lng)
    //         // res.data.results[0].geometry.location
    //         console.log(json(res.data))
    //     }).catch(err => res.data(err));
    // });

// router
//     .route("/:location")
//     .get(getZipData);

// router
//     .route("/:id")
//     .get(getDetailData);

module.exports = router;
