const router = require("express").Router();
const axios = require("axios");

export default {
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
    })
};

export default {
    getZipData: () =>
    axios({
        'method':'GET',
        'url':'https://maps.googleapis.com/maps/api/geocode/json?',
        // 'headers': {
        //     'content-type':'application/octet-stream',
        //     'x-rapidapi-host':'example.com',
        //     'x-rapidapi-key': process.env.RAPIDAPI_KEY
        // },
        'params': {
            // 'search':'parameter',
            'key':'AIzaSyAgJLBEgA0zRfF7EgTRVuBqBWahOSYLL8s',
            'address': '/:location'
        },
    }).then(
        getParkData(res)
    )
};