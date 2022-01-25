import { USERS } from './users';
export const POSTS = [
    {
        imageUrl: 'https://image.shutterstock.com/image-photo/sunset-coast-lake-nature-landscape-600w-1960131820.jpg',
        user: USERS[0].user,
        likes: 333,
        caption: 'Train Ride to Hogwarts, WOW! This buld looks fire, Train Ride to Hogwarts, WOW! This buld looks fire. ',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'theqazman',
                comment: 'WOW! This buld looks fire.'
            },
            {
                user: 'theqazman2',
                comment: 'WOW! This buld looks fire and beautiful.'
            },
        ],
    },
    {
        imageUrl: 'https://image.shutterstock.com/image-photo/still-water-reflections-trees-silluette-600w-1609115782.jpg',
        user: USERS[1].user,
        likes: 787000,
        caption: 'Train Ride to Hogwarts and coming back.',
        profile_picture: USERS[1].image,
        comments: [
            {
                user: 'theqazman3',
                comment: 'WOW! This buld looks fire.'
            },
            {
                user: 'theqazman4',
                comment: 'WOW! This buld looks fire and beautiful.'
            },
        ],
    },
]