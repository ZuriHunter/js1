//1.Bring up list of all Women Who Code meetups with RSVPs present and in the future
//2.Organize list of Women Who Code meetups based off of category
//3.Select Women Who Code meetup with list of RSVPS desired
//4.Search through RSVP for individual.
//5.Select confirmation button of attendance.
//6.Afrer event is over lead saves the information and it is saved as a csv file. 

'use strict';

var wwca = angular.module('wwca', ['ui.router']);

//ROUTES
    wwca.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home',{
              url:'/home',
              templateUrl: 'templates/home.tpl.html'
            })
            .state('dashboard', {
              url: '/dashboard',
              templateUrl: 'templates/dashboard.tpl.html'
            })
            .state('groups', {
              url: '/groups',
              templateUrl: 'templates/groups.tpl.html',
              controller: 'groupsController'
            })
            .state('events', {
              url: '/events',
              templateUrl: 'templates/events.tpl.html'
            })
            .state('rsvplist', {
              url: '/rsvplist',
              templateUrl: 'templates/rsvplist.tpl.html'
            })

            .state('about', {
                // we'll get to this in a bit
            });

    });
//SERVICES


//CONTROLLERS
  wwca.controller('groupsController', function($scope) {

    $scope.groups = [
    {
      name: "Algorithm Labs",
      image: "assets/images/rubickcube.png"
    },

    {
      name: "Android Labs",
      image:"assets/images/android.png"
    },

    {
      name: "Front End Labs",
      image:"assets/images/html5logo.png"
    },
    {
      name: "Ruby on Rails Labs",
      image: "assets/images/rubyonrails.png"
    },
    {
      name:"Python Labs",
      image: "assets/images/python.png"
    },
    {
      name: "Professional Development",
      image: "assets/images/pd.png"
    }

  ];
});
