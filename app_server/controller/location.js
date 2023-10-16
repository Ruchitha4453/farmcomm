/* GET 'home' page */
module.exports.homelist = function(req, res) {
    res.render('location-list', {
    title: 'FarmerPortal-Info about seed',
    pageHeader: {
    title: 'FarmerPortal',
    strapline: 'Find the info of the seed and machinary'
    },
    sidebar: "Seed information providers using Farmer portal websites play a vital role in helping farmers make informed decisions about the seeds they plant. This website typically provide information on a wide range of seed varieties, including their characteristics and suitability for different climates and soil types. Farmers can use this information to select the seeds that are most likely to produce a successful crop.",
    locations: [{
    name: 'Wheat',
    address: 'Warm climate with good amount of water',
    rating: 4,
    facilities: ['Karif','Rabi','Aus'],
    distance: '10 acers'
    }, {
    name: 'Millets',
    address: 'Monsoon season, more rain',
    rating: 4,
    facilities: ['Korle','Sanwa','Pearl'],
    distance: '20 acers'
    }, {
    name: 'Beans',
    address: 'Summer season grown',
    rating: 2,
    facilities: ['Fibre','Protien','iron'],
    distance: '5 acres'
    }]
    });
    };

module.exports.locationInfo = function(req, res) {
    res.render('location-info', {
    title: 'Wheat',
    pageHeader: {
    title: 'Wheat'
    },
    sidebar: {
    context: 'Kharif (summer-monsoon): This is the main rice growing season in India and other South Asian countries. Rice is sown in June-July and harvested in October-November.Rabi (winter): This is a minor rice growing season in India and other South Asian countries. Rice is sown in November-December and harvested in March-April.Aus (autumn): This is a minor rice growing season in India and other South Asian countries. Rice is sown in March-April and harvested in June-July.',
        
    callToAction: 'This is the info provides on the wheat'
    },
    location: {
    name: 'Wheat',
    address: 'Warm climate with good amount of water',
    rating: 4,
    facilities: ['Karif','Rabi','Aus'],
    coords: {
    lat: 51.455041,
    lng: -0.9690884
    },
    openingTimes: [{
    days: 'October-December',
    opening: 'Morning',
    closing: 'Night',
    closed: false
    }, {
    days: 'Machinary Required',
    opening: 'Tractors',
    closing: 'Plough',
    closed: false
    }, {
    days: 'Cultivators',
    closed: true
    }],
    reviews: [{
    author: 'Simon Holmes',
    rating: 5,
    timestamp: '16 July 2013',
    reviewText: 'Correct information'
    }, {
    author: 'Charlie Chaplin',
    rating: 3,
    timestamp: '16 June 2013',
    reviewText: 'Useful'
    }]
        
    }
    });
    };

        module.exports.locationInfo1 = function(req, res) {
            res.render('location-info1', {
            title: 'Millets',
            pageHeader: {
            title: 'Millets'
            },
            sidebar: {
            context: 'Millets are a group of small-seeded grasses, widely grown around the world as cereal crops or grains for human food and as fodder.',
            
            callToAction: 'This is the info on millets.'
            },
            location: {
            name: 'Millets',
            address: 'Monsoon season,more rain',
            rating: 3,
            facilities: ['Korle','Sanwa','Pearl'],
            coords: {
            lat: 51.455041,
            lng: -0.9690884
            },
            openingTimes: [{
            days: 'May-September',
            opening: 'Morning',
            closing: 'Night',
            closed: false
            }, {
            days: 'Machinary',
            opening: 'Tractors,plough',
            closing: 'Cultivators',
            closed: false
            }, {
            days: 'Planters',
            closed: true
            }],
            reviews: [{
            author: 'Simon Holmes',
            rating: 5,
            timestamp: '16 July 2013',
            reviewText: 'correct'
            }, {
            author: 'Charlie Chaplin',
            rating: 3,
            timestamp: '16 June 2013',
            reviewText: 'Useful'
            }]
            
            }
            });
            };

            module.exports.locationInfo2 = function(req, res) {
                res.render('location-info2', {
                title: 'Beans',
                pageHeader: {
                title: 'Beans'
                },
                sidebar: {
                context: 'Beans are a type of legume that is a good source of protein, fiber, and other nutrients.',
                
                callToAction: 'Information on beans.'
                },
                location: {
                name: 'Beans',
                address: 'Summer season grown',
                rating: 3,
                facilities: ['Fibre','Protien','iron'],
                coords: {
                lat: 51.455041,
                lng: -0.9690884
                },
                openingTimes: [{
                days: 'March-April',
                opening: 'Morning',
                closing: 'Night',
                closed: false
                }, {
                days: 'Machinary',
                opening: 'Tractors',
                closing: 'Plough',
                closed: false
                }, {
                days: 'Planters',
                closed: true
                }],
                reviews: [{
                author: 'Simon Holmes',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'Correct infomation.'
                }, {
                author: 'Charlie Chaplin',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'Useful'
                }]
                
                }
                });
                };

                module.exports.addReview = function(req, res) {
                    res.render('location-review-form', {
                    title: 'Review Starcups on FarmerProtal',
                    pageHeader: {
                    title: 'Wheat'
                    }
                    });
                    };