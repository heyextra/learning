
const weatherApi = { 
    key: '36d482a7a9c845e73c6ca8ab30a7eae0',
    base: 'https://api.openweathermap.org/data/2.5/weather?',
    end: '&units=metric&APPID='

  }
  const geoApi = {
    key: weatherApi.key,
    base: 'http://api.openweathermap.org/geo/1.0/direct?q=',
    end: '&limit=3&appid='
  }

  var City = Backbone.Model.extend({
    defaults:{
        state: "null"
    }
  })

var Cities = Backbone.Collection.extend({
    model: City,
    parse: function(response) {
        return response.results;
      },
      page: "oakland",

    initialize:function(){
        this.fetch({
            success: function(){
                console.log("fetched")
            }
        })
    },
    url: function(){
        return geoApi.base + this.page + geoApi.end + geoApi.key
    }

})

var cities = new Cities()
