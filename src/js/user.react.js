var user = [
	{
		name: 'Albert Eincage',
		img: '../src/images/Albert.jpg',
		ratings: {
			happy: 79,
			sad: 313
		},
		sales: 101,
		purchases: 321,
		location: {
			lat: 40.25778275366141,
			lng: -111.67842864990234
		}
	},
	{
		name: 'Father Cage',
		img: '../src/images/cage-satan.jpg',
		ratings: {
			happy: 500,
			sad: 200
		},
		sales: 144,
		purchases: 356,
		location: {
			lat: 40.242060631186895,
			lng: -111.67842864990234
		}
	},
	{
		name: 'Baby Cage',
		img: '../src/images/Baby.jpg',
		ratings: {
			happy: 1245,
			sad: 2
		},
		sales: 1233,
		purchases: 32,
		location: {
			lat: 40.22476207835184,
			lng: -111.66572570800781
		}
	},
	{
		name: 'Jon Cage',
		img: '../src/images/JonSnow.jpg',
		ratings: {
			happy: 0,
			sad: 1500
		},
		sales: 1500,
		purchases: 0,
		location: {
			lat: 40.23839161044003,
			lng: -111.64787292480469
		}
	},
	{
		name: 'Mohandas Karamchand Cage',
		img: '../src/images/Gahndi.jpg',
		ratings: {
			happy: 799,
			sad: 0
		},
		sales: 455,
		purchases: 344,
		location: {
			lat: 40.293514,
			lng: -111.699368
		}
	},
	{
		name: 'Heisencage',
		img: '../src/images/HeisenBurg.jpg',
		ratings: {
			happy: 4000,
			sad: 0
		},
		sales: 4000,
		purchases: 0,
		location: {
			lat: 40.303301,
			lng: -111.689326
		}
	}
];

var secondary_users = [
	
	{
		name: 'Jean Luc Picage',
		img: '../src/images/JeanLucPicard.jpg',
		ratings: {
			happy: 500,
			sad: 500
		},
		sales: 600,
		purchases: 400,
		location: {
			lat: 40.26066474660849,
			lng: -111.66091918945312
		}
	},
	{
		name: 'Mona Licage',
		img: '../src/images/MonaLisa.jpg',
		ratings: {
			happy: 799,
			sad: 0
		},
		sales: 455,
		purchases: 344,
		location: {
			lat: 40.25935476503279,
			lng: -111.65748596191406
		}
	},
	{
		name: 'John Rambocage',
		img: '../src/images/Rambo.jpg',
		ratings: {
			happy: 450,
			sad: 450
		},
		sales: 445,
		purchases: 455,
		location: {
			lat: 40.266166392246355,
			lng: -111.68941497802734
		}
	},
	{
		name: 'Tywenn Lannistercage',
		img: '../src/images/Tywenn.jpg',
		ratings: {
			happy: 0,
			sad: 755
		},
		sales: 455,
		purchases: 300,
		location: {
			lat: 40.24808787647332,
			lng: -111.69181823730469
		}
	}
];

var products = [
    {
        name: 'Digital Camera',
        category: 'Electronics',
        description: 'A camera so digital that it has pixels. Mind blown.',
        image: 'https://images-na.ssl-images-amazon.com/images/G/01/electronics/cameras/samsung/2011/c26-B004OZ922E-1-l.jpg',
        seller: user[0]
    },
    {
        name: 'Adorable puppy',
        category: 'Pets',
        description: 'My dog had puppies. Can\'t keep them all, so please give them a loving home! <3',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHJrap7s8HRCCC4KOhkd1SrZ94jvS0F1_h8Ohmme0iJPUszS1czjl-8Uc4',
        seller: user[1]
    },
    {
        name: 'Fireworks',
        category: 'Misc',
        description: 'Why do I still have fireworks? Independence day was like, forever ago.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQNjV0yjQGauptx9bibYS80StBiDwoMxOeFtA0xahzbiy6MMCn',
        seller: user[2]
    },
    {
        name: 'Cheetos',
        category: 'Misc',
        description: 'These are stale. I don\'t want them.',
        image: 'https://macmalloryo.edublogs.org/files/2014/03/cheetosawesome-1sa4d06.jpg',
        seller: user[3]
    },
    {
        name: 'Ghetto Blaster',
        category: 'Electronics',
        description: 'Blew my hearing away. Don\'t need it anymore.',
        image: 'http://thumbs.dreamstime.com/z/retro-ghetto-blaster-18850075.jpgQ==',
        seller: user[4]
    },
    {
        name: 'Couch',
        category: 'Furniture',
        description: 'Grew its own ecosystem. Go take it sledding.',
        image: 'http://www.theresilientfamily.com/wp-content/uploads/2012/01/old-couch.jpg',
        seller: user[5]
    }
];

var seller_products = [
	[
	    {
	        name: 'Digital Camera',
	        category: 'Electronics',
	        description: 'A camera so digital that it has pixels. Mind blown.',
	        image: 'https://images-na.ssl-images-amazon.com/images/G/01/electronics/cameras/samsung/2011/c26-B004OZ922E-1-l.jpg',
	        seller: user[0]
	    },
	    {
	        name: 'High Pixel Camera',
	        category: 'Electronics',
	        description: 'Ultimate resolution.',
	        image: 'https://farm4.staticflickr.com/3487/cameras/72157602280763141_model_huge_7523f21cc2.jpg',
	        seller: user[0]
	    }
	],
	[
	    {
	        name: 'Adorable puppy',
	        category: 'Pets',
	        description: 'My dog had puppies. Can\'t keep them all, so please give them a loving home! <3',
	        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHJrap7s8HRCCC4KOhkd1SrZ94jvS0F1_h8Ohmme0iJPUszS1czjl-8Uc4',
	        seller: user[1]
	    },
	    {
	        name: 'Friendly Alligator',
	        category: 'Pets',
	        description: 'A very friendly Alligator',
	        image: 'http://muchmoremuchier.files.wordpress.com/2012/03/gator.jpg',
	        seller: user[1]
	    },
	    {
	        name: 'Rabid Hippo',
	        category: 'Pets',
	        description: 'crushed my cat...  must get rid of it.',
	        image: 'http://hippocritical.net/wp-content/uploads/2014/03/pet-hippo-Humphrey_2055153i.jpg',
	        seller: user[1]
	    }
    ],
    [
	    {
	        name: 'Fireworks',
	        category: 'Misc',
	        description: 'Why do I still have fireworks? Independence day was like, forever ago.',
	        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQNjV0yjQGauptx9bibYS80StBiDwoMxOeFtA0xahzbiy6MMCn',
	        seller: user[2]
	    },
    ],
    [
	    {
	        name: 'Cheetos',
	        category: 'Misc',
	        description: 'These are stale. I don\'t want them.',
	        image: 'https://macmalloryo.edublogs.org/files/2014/03/cheetosawesome-1sa4d06.jpg',
	        seller: user[3]
	    },
    ],
    [
	    {
	        name: 'Ghetto Blaster',
	        category: 'Electronics',
	        description: 'Blew my hearing away. Don\'t need it anymore.',
	        image: 'http://thumbs.dreamstime.com/z/retro-ghetto-blaster-18850075.jpgQ==',
	        seller: user[4]
	    },
    ],
    [
	    {
	        name: 'Couch',
	        category: 'Furniture',
	        description: 'Grew its own ecosystem. Go take it sledding.',
	        image: 'http://www.theresilientfamily.com/wp-content/uploads/2012/01/old-couch.jpg',
	        seller: user[5]
	    }
    ]
];

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

var productCategories = products.map(function(product) { return product.category || 'Misc'; }).filter(onlyUnique);
console.log('1')
var feedback = [
	{ id: 0, product: products[0], user: user[0], rating: 0, conversation: [{who: 'Them', message: 'Your camera didn\'t have a retina display. False advertising. I want to return this and get my money back.'}, {who: 'You', message: 'I\'m sorry to hear you don\'t like the camera. Where shall we meet to make the exchange?'}] },
	{ id: 1, product: products[1], user: user[1], rating: 1, conversation: [{who: 'Them', message: 'Your puppy was super cute. It won the lottery for me. Thanks!'}] },
	{ id: 2, product: products[2], user: user[2], rating: 0, conversation: [{who: 'Them', message: 'You showed up late, and I missed my kid\'s football game'}] },
	{ id: 3, product: products[3], user: user[2], rating: 1, conversation: [{who: 'Them', message: 'Delicious.'}] }
];
console.log('2')
var disputes = feedback.filter(function(item) { console.log(item); return item.rating === 0; });