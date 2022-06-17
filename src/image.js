const images = {
    aesthetic1: {
        avatar: 'avatar1',
        hashtag: '#aesthetic',
        description: 'Classically Cait| Clean Beauty| Fashion | Lifestyle',
    },
    interior1: {
        avatar: 'avatar4',
        hashtag: '#interior',
        description: 'What is Japandi Style How to Incorporate Japandi Design in Each Room',
    },
    food2: {
        avatar: 'avatar8',
        hashtag: '#food',
        description:'12 Tips for Styling Your Food Photography Yummy Food Photos',
    },
    webdesign2: {
        avatar: 'avatar14',
        hashtag: '#design',
        description:'UI Kit – Lombok By Delightful Design',
    },
    aesthetic2: {
        avatar: 'avatar2',
        hashtag: '#aesthetic',
        description: 'This is love',
    },
    animal1: {
        avatar: 'avatar16',
        hashtag: '#animal',
        description:'The Ultimate Guide to Peru - Peru - Lisa Homsy',
    },
    interior4: {
        avatar: 'avatar19',
        hashtag: '#interior',
        description: 'Loft style apartment design',
    },
    nature2: {
        avatar: 'avatar11',
        hashtag: '#nature',
        description:'Cool rope bridge over a cliff in Punta Christo You definitely need to go there',
    },
    food3: {
        avatar: 'avatar9',
        hashtag: '#food',
        description:'Healthy Little Cravings',
    },
    webdesign3: {
        avatar: 'avatar15',
        hashtag: '#design',
        description:'Modular Muse Showit Template',
    },
    animal2: {
        avatar: 'avatar17',
        hashtag: '#animal',
        description:'World, Meet Orson our Miniature Schnauzer',
    },
    interior3: {
        avatar: 'avatar6',
        hashtag: '#interior',
        description: 'Gorgeous Bathroom Design TipsAdaptable',
    },
    nature1: {
        avatar: 'avatar10',
        hashtag: '#nature',
        description:'Lac rose, plage rouge, antelope canyon, ces destinations instagrammables',
    },
    food4: {
        avatar: 'avatar20',
        hashtag: '#food',
        description: 'Aspargus',
    },
    animal3: {
        avatar: 'avatar18',
        hashtag: '#animal',
        description:'Top 10 Cutest Dog Breeds — Small Cutest Dogs We Can not Get Enough Of',
    },
    aesthetic3: {
        avatar: 'avatar3',
        hashtag: '#aesthetic',
        description: 'ДИЗАЙН | SMM |КОНТЕНТ',
    },
    interior2: {
        avatar: 'avatar5',
        hashtag: '#interior',
        description: 'H&M Home furniture and decoration spring summer 2020 the new essentials for the home',
    },
    food1: {
        avatar: 'avatar7',
        hashtag: '#food',
        description:'100+ Breakfast Item to Gain a Healthy Physic',
    },
    nature3: {
        avatar: 'avatar12',
        hashtag: '#nature',
        description:'Living-In-Van-Life-Travel-Photography',
    },
    webdesign1: {
        avatar: 'avatar13',
        hashtag: '#design',
        description:'MNTN Website Template',
    },
}

//image в виде массива
// const images = [];
//     images[0] = {
//         'aesthetic1': {
//         avatar: 'avatar1',
//         hashtag: '#aesthetic',
//         description: 'Classically Cait| Clean Beauty| Fashion | Lifestyle',
//     }},
//     images[1] = {
//         'interior1': {
//         avatar: 'avatar4',
//         hashtag: '#interior',
//         description: 'What is Japandi Style How to Incorporate Japandi Design in Each Room',
//     }},
//     images[2] = {
//         'food2': {
//         avatar: 'avatar8',
//         hashtag: '#food',
//         description:'12 Tips for Styling Your Food Photography Yummy Food Photos',
//     }},
//     images[3] = {
//         'webdesign2': {
//         avatar: 'avatar14',
//         hashtag: '#design',
//         description:'UI Kit – Lombok By Delightful Design',
//     }},
//     images[4] = {
//         'aesthetic2': {
//         avatar: 'avatar2',
//         hashtag: '#aesthetic',
//         description: 'This is love',
//     }},
//     images[5] = {
//         'interior4': {
//         avatar: 'avatar19',
//         hashtag: '#interior',
//         description: 'Loft style apartment design',
//     }},
//     images[6] = {
//         'nature2': {
//         avatar: 'avatar11',
//         hashtag: '#nature',
//         description:'Cool rope bridge over a cliff in Punta Christo You definitely need to go there',
//     }},
//     images[7] = {
//         'food3': {
//         avatar: 'avatar9',
//         hashtag: '#food',
//         description:'Healthy Little Cravings',
//     }},
//     images[8] = {
//         'webdesign3': {
//         avatar: 'avatar15',
//         hashtag: '#design',
//         description:'Modular Muse Showit Template',
//     }},
//     images[9] = {
//         'animal2': {
//         avatar: 'avatar17',
//         hashtag: '#animal',
//         description:'World, Meet Orson our Miniature Schnauzer',
//     }},
//     images[10] = {
//         'interior3': {
//         avatar: 'avatar6',
//         hashtag: '#interior',
//         description: 'Gorgeous Bathroom Design TipsAdaptable',
//     }},
//     images[11] = {
//         'animal1': {
//         avatar: 'avatar16',
//         hashtag: '#animal',
//         description:'The Ultimate Guide to Peru - Peru - Lisa Homsy',
//     }},
//     images[12] = {
//         'nature1': {
//         avatar: 'avatar10',
//         hashtag: '#nature',
//         description:'Lac rose, plage rouge, antelope canyon, ces destinations instagrammables',
//     }},
//     images[13] = {
//         'food4': {
//         avatar: 'avatar20',
//         hashtag: '#food',
//         description: 'Aspargus',
//     }},
//     images[14] = {
//         'animal3': {
//         avatar: 'avatar18',
//         hashtag: '#animal',
//         description:'Top 10 Cutest Dog Breeds — Small Cutest Dogs We Can not Get Enough Of',
//     }},
//     images[15] = {
//         'aesthetic3': {
//         avatar: 'avatar3',
//         hashtag: '#aesthetic',
//         description: 'ДИЗАЙН | SMM |КОНТЕНТ',
//     }},
//     images[16] = {
//         'interior2': {
//         avatar: 'avatar5',
//         hashtag: '#interior',
//         description: 'H&M Home furniture and decoration spring summer 2020 the new essentials for the home',
//     }},
//     images[17] = {
//         'food1': {
//         avatar: 'avatar7',
//         hashtag: '#food',
//         description:'100+ Breakfast Item to Gain a Healthy Physic',
//     }},
//     images[18] = {
//         'nature3': {
//         avatar: 'avatar12',
//         hashtag: '#nature',
//         description:'Living-In-Van-Life-Travel-Photography',
//     }},
//     images[19] = {
//         'webdesign1': {
//         avatar: 'avatar13',
//         hashtag: '#design',
//         description:'MNTN Website Template',
//     }}

    

