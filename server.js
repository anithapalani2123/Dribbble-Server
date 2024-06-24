const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3006;

app.use(cors());

const techCategories = {
  "categories": [
    {
      "name": "Discover",
      "cards": [
        {
          "id": 1,
          "image_url": "http://localhost:3006/images/dis1.jpg",
          "title": "Exploring New Tech",
          "views": 1500,
          "likes": 250
        }
      ]
    },
    {
      "name": "Animation",
      "cards": [
        {
          "id": 21,
          "image_url": "http://localhost:3006/images/anim2.gif",
          "title": "Tech Animation Designs",
          "views": 1200,
          "likes": 200
        },{
          "id": 22,
          "image_url": "http://localhost:3006/images/anim3.gif",
          "title": "Tech Animation Designs",
          "views": 1200,
          "likes": 200
        },{
          "id": 23,
          "image_url": "http://localhost:3006/images/anim4.gif",
          "title": "Tech Animation Designs",
          "views": 1200,
          "likes": 200
        },{
          "id": 24,
          "image_url": "http://localhost:3006/images/anim5.gif",
          "title": "Tech Animation Designs",
          "views": 1200,
          "likes": 200
        },{
          "id": 25,
          "image_url": "http://localhost:3006/images/anim6.gif",
          "title": "Tech Animation Designs",
          "views": 1200,
          "likes": 200
        },{
          "id": 26,
          "image_url": "http://localhost:3006/images/anim7.gif",
          "title": "Tech Animation Designs",
          "views": 1200,
          "likes": 200
        },{
          "id": 27,
          "image_url": "http://localhost:3006/images/anim8.gif",
          "title": "Tech Animation Designs",
          "views": 1200,
          "likes": 200
        },{
          "id": 28,
          "image_url": "http://localhost:3006/images/anim9.gif",
          "title": "Tech Animation Designs",
          "views": 1200,
          "likes": 200
        },{
          "id": 29,
          "image_url": "http://localhost:3006/images/anim10.gif",
          "title": "Tech Animation Designs",
          "views": 1200,
          "likes": 200
        }
      ]
    },
    {
      "name": "Branding",
      "cards": [
        {
          "id": 31,
          "image_url": "http://localhost:3006/images/brand1.jpg",
          "title": "Tech Branding",
          "views": 2500,
          "likes": 400
        },
        {
          "id": 32,
          "image_url": "http://localhost:3006/images/brand2.jpg",
          "title": "Tech Branding",
          "views": 2500,
          "likes": 400
        },
        {
          "id": 33,
          "image_url": "http://localhost:3006/images/brand3.png",
          "title": "Tech Branding",
          "views": 2500,
          "likes": 400
        },
        {
          "id": 34,
          "image_url": "http://localhost:3006/images/brand4.png",
          "title": "Tech Branding",
          "views": 2500,
          "likes": 400
        },{
          "id": 35,
          "image_url": "http://localhost:3006/images/brand5.jpg",
          "title": "Tech Branding",
          "views": 2500,
          "likes": 400
        }
        ,{
          "id": 36,
          "image_url": "http://localhost:3006/images/brand6.png",
          "title": "Tech Branding",
          "views": 2500,
          "likes": 400
        },{
          "id": 37,
          "image_url": "http://localhost:3006/images/brand7.jpg",
          "title": "Tech Branding",
          "views": 2500,
          "likes": 400
        },{
          "id": 38,
          "image_url": "http://localhost:3006/images/brand8.png",
          "title": "Tech Branding",
          "views": 2500,
          "likes": 400
        },{
          "id": 39,
          "image_url": "http://localhost:3006/images/brand9.png",
          "title": "Tech Branding",
          "views": 2500,
          "likes": 400
        },{
          "id": 40,
          "image_url": "http://localhost:3006/images/brand10.png",
          "title": "Tech Branding",
          "views": 2500,
          "likes": 400
        }
      ]
    },
    {
      "name": "Illustration",
      "cards": [
        {
          "id": 41,
          "image_url": "http://localhost:3006/images/ima.jpg",
          "title": "Tech Illustrations",
          "views": 1500,
          "likes": 250
        },{
          "id": 42,
          "image_url": "http://localhost:3006/images/ima1.jpg",
          "title": "Tech Illustrations",
          "views": 1500,
          "likes": 250
        },{
          "id": 43,
          "image_url": "http://localhost:3006/images/ima2.png",
          "title": "Tech Illustrations",
          "views": 1500,
          "likes": 250
        },{
          "id": 44,
          "image_url": "http://localhost:3006/images/ima3.png",
          "title": "Tech Illustrations",
          "views": 1500,
          "likes": 250
        },{
          "id": 45,
          "image_url": "http://localhost:3006/images/ima4.jpg",
          "title": "Tech Illustrations",
          "views": 1500,
          "likes": 250
        },{
          "id": 46,
          "image_url": "http://localhost:3006/images/ima5.jpg",
          "title": "Tech Illustrations",
          "views": 1500,
          "likes": 250
        },{
          "id": 47,
          "image_url": "http://localhost:3006/images/ima6.png",
          "title": "Tech Illustrations",
          "views": 1500,
          "likes": 250
        },{
          "id": 48,
          "image_url": "http://localhost:3006/images/ima7.png",
          "title": "Tech Illustrations",
          "views": 1500,
          "likes": 250
        },{
          "id": 49,
          "image_url": "http://localhost:3006/images/ima8.jpg",
          "title": "Tech Illustrations",
          "views": 1500,
          "likes": 250
        },{
          "id": 50,
          "image_url": "http://localhost:3006/images/ima9.png",
          "title": "Tech Illustrations",
          "views": 1500,
          "likes": 250
        },{
          "id": 51,
          "image_url": "http://localhost:3006/images/ima10.png",
          "title": "Tech Illustrations",
          "views": 1500,
          "likes": 250
        },
        
      ]
    },
    {
      "name": "Mobile",
      "cards": [
        {
          "id": 61,
          "image_url": "http://localhost:3006/images/mob1.png",
          "title": "Mobile Tech",
          "views": 1700,
          "likes": 280
        },
        {
          "id": 62,
          "image_url": "http://localhost:3006/images/mob2.png",
          "title": "Smartphone Innovations",
          "views": 2200,
          "likes": 390
        },
        {
          "id": 63,
          "image_url": "http://localhost:3006/images/mob3.png",
          "title": "Mobile App Development",
          "views": 1600,
          "likes": 260
        }
      ]
    },
    {
      "name": "Print",
      "cards": [
        {
          "id": 71,
          "image_url": "http://localhost:3006/images/print1.jpg",
          "title": "Print Technology",
          "views": 1600,
          "likes": 260
        },
        {
          "id": 72,
          "image_url": "http://localhost:3006/images/print2.png",
          "title": "3D Printing",
          "views": 2900,
          "likes": 470
        },
        {
          "id": 73,
          "image_url": "http://localhost:3006/images/print3.jpg",
          "title": "Print Design",
          "views": 1500,
          "likes": 250
        }
      ]
    },
    {
      "name": "Product Design",
      "cards": [
        {
          "id": 81,
          "image_url": "http://localhost:3006/images/pd1.png",
          "title": "Tech Product Design",
          "views": 2500,
          "likes": 400
        },
        {
          "id": 82,
          "image_url": "http://localhost:3006/images/pd2.png",
          "title": "Tech Product Design",
          "views": 2500,
          "likes": 400
        },
        {
          "id": 83,
          "image_url": "http://localhost:3006/images/pd3.jpg",
          "title": "Tech Product Design",
          "views": 2500,
          "likes": 400
        },
        {
          "id": 84,
          "image_url": "http://localhost:3006/images/pd4.png",
          "title": "Tech Product Design",
          "views": 2500,
          "likes": 400
        },
        {
          "id": 85,
          "image_url": "http://localhost:3006/images/pd55.png",
          "title": "Tech Product Design",
          "views": 2500,
          "likes": 400
        }
        
      ]
    },
    {
      "name": "Typography",
      "cards": [
        {
          "id": 91,
          "image_url": "http://localhost:3006/images/typo1.jpg",
          "title": "Tech Typography",
          "views": 1500,
          "likes": 250
        },
        {
          "id": 92,
          "image_url": "http://localhost:3006/images/typo2.png",
          "title": "Digital Fonts",
          "views": 3000,
          "likes": 500
        },
        {
          "id": 93,
          "image_url": "http://localhost:3006/images/typo3.png",
          "title": "Typography in Tech",
          "views": 1200,
          "likes": 200
        },
        {
          "id": 94,
          "image_url": "http://localhost:3006/images/typo4.png",
          "title": "Typography in Tech",
          "views": 1200,
          "likes": 200
        }
      ]
    },
    {
      "name": "Web Design",
      "cards": [
        {
          "id": 101,
          "image_url": "http://localhost:3006/images/web1.png",
          "title": "Modern Web Design",
          "views": 1500,
          "likes": 250
        },
        {
          "id": 102,
          "image_url": "http://localhost:3006/images/web2.png",
          "title": "Website Development",
          "views": 3000,
          "likes": 500
        },
        {
          "id": 103,
          "image_url": "http://localhost:3006/images/web3.png",
          "title": "Responsive Design",
          "views": 1200,
          "likes": 200
        },
        {
          "id": 104,
          "image_url": "http://localhost:3006/images/web4.png",
          "title": "Responsive Design",
          "views": 1200,
          "likes": 200
        },
        {
          "id": 105,
          "image_url": "http://localhost:3006/images/web5.png",
          "title": "Responsive Design",
          "views": 1200,
          "likes": 200
        }
      ]
    }
  ]
};
const specialFilter1 = {
  "Following": [
    {
      "id": 101,
      "image_url": "http://localhost:3006/images/ima4.jpg",
      "title": "Following Tech Trends",
      "views": 1300,
      "likes": 230
    }
  ]
};

const specialFilter2 = {
  "Popular": [
    {
      "id": 201,
      "image_url": "http://localhost:3006/images/brand1.jpg",
      "title": "Popular Tech",
      "views": 1800,
      "likes": 300
    }
   
  ]
};
const specialFilter3 = {
  "NewAndNoteworthy": [
    {
      "id": 201,
      "image_url": "http://localhost:3006/images/print1.jpg",
      "title": "Popular Tech",
      "views": 1800,
      "likes": 300
    }
   
  ]
};


app.use(express.static(path.join(__dirname, 'public')));

app.get('/image/:imagename', (req, res) => {
  res.sendFile(path.join(__dirname, `public/${req.params.imagename}`));
});

app.get('/api/categories', (req, res) => {
  console.log('Categories requested');
  res.json(techCategories);
  
});
app.get('/api/following', (req, res) => {
  console.log('Following requested');
  res.json(specialFilter1);
  
});

app.get('/api/popular', (req, res) => {
  res.json(specialFilter2);
});

app.get('/api/newAndNoteworthy', (req, res) => {
  console.log('New & Noteworthy requested');
  res.json(specialFilter3);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

