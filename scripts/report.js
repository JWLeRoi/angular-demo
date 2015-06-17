/**
 * Created by Jack on 6/16/2015.
 */
var report = angular.module("weather", []);

report.controller("WeatherController", function()
{
  this.readings = data;

});

report.controller("TabController", function()
{
  this.tab = 1;

  this.selectTab = function(setTab)
  {
    this.tab = setTab;
  };

  this.isSelected = function(checkTab)
  {
    return this.tab === checkTab;

  };

});

var data =
  [
    {
      date: '2015-06-01',
      high: '81F',
      low: '52F',
      rain: '0.01',
      snow: '0.00'
    },
    {
      date: '2015-06-02',
      high: '86F',
      low: '50F',
      rain: '0.00',
      snow: '0.00'
    },
    {
      date: '2015-06-03',
      high: '82F',
      low: '50F',
      rain: '0.00',
      snow: '0.00'
    },
    {
      date: '2015-06-04',
      high: '80F',
      low: '51F',
      rain: '0.05',
      snow: '0.00'
    },
    {
      date: '2015-06-05',
      high: '74F',
      low: '51F',
      rain: '0.49',
      snow: '0.00'
    },
    {
      date: '2015-06-06',
      high: '73F',
      low: '48F',
      rain: '0.24',
      snow: '0.00'
    },
    {
      date: '2015-06-07',
      high: '75F',
      low: '50F',
      rain: '0.01',
      snow: '0.00'
    },
    {
      date: '2015-06-08',
      high: '80F',
      low: '47F',
      rain: '0.00',
      snow: '0.00'
    },
    {
      date: '2015-06-09',
      high: '85F',
      low: '54F',
      rain: '0.00',
      snow: '0.00'

    },
    {
      date: '2015-06-10',
      high: '81F',
      low: '60F',
      rain: '0.01',
      snow: '0.00'

    }

  ]

