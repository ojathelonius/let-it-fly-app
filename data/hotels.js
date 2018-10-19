const hotels = [
    {
        id: 0,
        name: 'Idol Hotel',
        distanceFromAirport: '14.2km',
        stars: 4,
        images: [
            require('../assets/images/hotel_reception_1.jpg'),
            require('../assets/images/hotel_room_1.jpg'),
            require('../assets/images/hotel_dining_1.jpg')
        ],
        pool: false,
        ac: true,
        nosmoking: true,
    },
    {
        id: 1,
        name: 'Châtillon-Montparnasse',
        distanceFromAirport: '11.4km',
        stars: 2,
        images: [
            require('../assets/images/hotel_reception_2.jpg'),
            require('../assets/images/hotel_room_2.jpg'),
            require('../assets/images/hotel_dining_2.jpg')
        ],
        pool: false,
        nosmoking: true
    },
    {
        id: 2,
        name: 'Hôtel de Bellecour',
        distanceFromAirport: '3.4km',
        stars: 3,
        images: [
            require('../assets/images/hotel_reception_3.jpg'),
            require('../assets/images/hotel_room_3.jpg'),
            require('../assets/images/hotel_dining_3.jpg')
        ],
        pool: true,
        ac: true,
        parking: true
    }
]

export default hotels;