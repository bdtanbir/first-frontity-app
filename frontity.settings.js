const settings = {
  "name": "first-frontity-app",
  "state": {
    "frontity": {
      "url": "http://test-plugins.test",
      "title": "ImDeveloper",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Hello",
              "/tag/hello/"
            ],
            [
              "Travel",
              "/category/travel/"
            ],
            [
              "Japan",
              "/tag/japan/"
            ],
            [
              "About Us",
              "/about/"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "http://test-plugins.test/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
