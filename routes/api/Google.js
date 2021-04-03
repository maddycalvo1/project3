const axios = require("axios");
const router = require("express").Router();

      
    // THis API is going to translate the inputted info, such as Address or Zip code, to Lat/Long info then send that Lat/Long to the next API to get the local Dog Parks
    router.get("/:location", (req, res, next) => {
        let key = 'AIzaSyAgJLBEgA0zRfF7EgTRVuBqBWahOSYLL8s';
        console.log(req.params.location)
        axios.get('https://maps.googleapis.com/maps/api/geocode/json?address='+ req.params.location + "&key=" + key
        //     {
        //     method:'GET',
        //     url:'https://maps.googleapis.com/maps/api/geocode/json',
        //     params: {
        //         // 'search':'parameter',
        //         'key':'AIzaSyAgJLBEgA0zRfF7EgTRVuBqBWahOSYLL8s',
        //         'address': req.params.location
        //     }
        // }
        )
        .then(response => {
            let data = response.data.results[0].geometry.location.lat +","+ response.data.results[0].geometry.location.lng;
            console.log(data);
            // res.send(data);
            console.log("banana");
            return axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?type=park&name=dog&rankby=distance&location='+data+'&key='+key)
        })
        .then(response => {
            res.send(response.data)
            console.log(response.data);
        })
        .catch(err => res.send(err));
    });
        
    // This API pulls up information about the place in question based upon place_id which is part fo the return for Nearby Locations
    router.get("/location/:id", (req, res, next) => {
        let key = 'AIzaSyAgJLBEgA0zRfF7EgTRVuBqBWahOSYLL8s';
        // console.log(req.params.id);
        // console.log('https://maps.googleapis.com/maps/api/place/details/json?place_id='+ req.params.id + '&fields=name,formatted_address,url,business_status&key='+key)
        axios.get('https://maps.googleapis.com/maps/api/place/details/json?place_id='+ req.params.id + '&fields=name,formatted_address,url,business_status&key='+key
        //     {
        //     'method':'GET',
        //     'url':'https://maps.googleapis.com/maps/api/place/details/json?',
        //     'params': {
        //         // 'search':'parameter',
        //         'key':'AIzaSyAgJLBEgA0zRfF7EgTRVuBqBWahOSYLL8s',
        //         'place_id': req.params.id,
        //         'fields': 'name,formatted_address,photo,url'
        //     }
        // }
        ).then(response => {
            // return getParkData(res.data.results[0].geometry.location.lat +","+ res.data.results[0].geometry.location.lng)
            // res.data.results[0].geometry.location
            let data = response.data.result
            console.log(data);
            res.send(data);
        }).catch(err => res.send(err));
    });

module.exports = router;
