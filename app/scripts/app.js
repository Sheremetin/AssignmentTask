'use strict';

angular.module('confusionApp', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

        // route for the home page
            .state('app', {
                url: '/',
                views: {
                    'header': {
                        templateUrl: 'views/header.html'
                    },
                    'content': {
                        templateUrl: 'views/home.html',
                        controller: 'IndexController'
                    },
                    'footer': {
                        templateUrl: 'views/footer.html'
                    }
                }

            })

            // route for the aboutus page
            .state('app.aboutus', {
                url: 'aboutus',
                views: {
                    'content@': {
                        templateUrl: 'views/aboutus.html',
                        controller: 'AboutController'
                    }
                }
            })

            // route for the contactus page
            .state('app.contactus', {
                url: 'contactus',
                views: {
                    'content@': {
                        templateUrl: 'views/contactus.html',
                        controller: 'ContactController'
                    }
                }
            })

            // route for the menu page
            .state('app.menu', {
                url: 'menu',
                views: {
                    'content@': {
                        templateUrl: 'views/menu.html',
                        controller: 'MenuController'
                    }
                }
            })

            // route for the dishdetail page
            .state('app.dishdetails', {
                url: 'menu/:id',
                views: {
                    'content@': {
                        templateUrl: 'views/dishdetail.html',
                        controller: 'DishDetailController'
                    }
                }
            });

        $urlRouterProvider.otherwise('/');
    })
;


//'use strict';
//angular.module('confusionApp', ['ui.router'])
//    .config(function ($stateProvider, $urlRouterProvider) {
//        $stateProvider
//        // route for the home page
//            .state('app', {
//                url: '/',
//                views: {
//                    'header': {
//                        templateUrl: 'views/header.html'
//                    },
//                    'content': {
//                        template: '<h1>To be Completed</h1>',
//                        controller: 'IndexController'
//                    },
//                    'footer': {
//                        templateUrl: 'views/footer.html'
//                    }
//                }
//            })
//            // route for the aboutus page
//            .state('app.aboutus', {
//                url: 'aboutus',
//                views: {
//                    'content@': {
//                        template: '<h1>To be Completed</h1>'
//                    }
//                }
//            })
//            // route for the contactus page
//            .state('app.contactus', {
//                url: 'contactus',
//                views: {
//                    'content@': {
//                        templateUrl: 'views/contactus.html',
//                        controller: 'contactController'
//                    }
//                }
//            })
//
//            // route for the menu page
//            .state('app.menu', {
//                url: 'menu',
//                views: {
//                    'content@': {
//                        templateUrl: 'views/menu.html',
//                        controller: 'menuController'
//                    }
//                }
//            })
//
//            // route for the dishdetail page
//            .state('app.dishdetails', {
//                url: 'menu/:id',
//                views: {
//                    'content@': {
//                        templateUrl: 'views/dishdetail.html',
//                        controller: 'dishDetailController'
//                    }
//                }
//            });
//        $urlRouterProvider.otherwise('/');
//    })


    //angular.module('confusionApp', ['ngRoute'])

//.config(function ($routeProvider) {
//    $routeProvider
//    // route for the contactus page
//        .when('/contactus', {
//            templateUrl: 'contactus.html',
//            controller: 'contactController'
//        })
//        // route for the menu page
//        .when('/menu', {
//            templateUrl: 'menu.html',
//            controller: 'menuController'
//        })
//        // route for the dish details page
//        .when('/menu/:id', {
//            templateUrl: 'dishdetail.html',
//            controller: 'dishDetailController'
//        })
//        .otherwise('/contactus');
//    })


//angular.module('confusionApp', [])
//    .controller('menuController', ['$scope', function ($scope) {
//        $scope.tab = 1;
//        $scope.filtText = '';
//        $scope.showDetails = false;
//
//
//        $scope.dishes = [
//            {
//                name: 'Uthapizza',
//                image: 'images/uthapizza.png',
//                category: 'mains',
//                label: 'Hot',
//                price: '4.99',
//                description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
//                comment: ''
//            },
//            {
//                name: 'Zucchipakoda',
//                image: 'images/zucchipakoda.png',
//                category: 'appetizer',
//                label: '',
//                price: '1.99',
//                description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
//                comment: ''
//            },
//            {
//                name: 'Vadonut',
//                image: 'images/vadonut.png',
//                category: 'appetizer',
//                label: 'New',
//                price: '1.99',
//                description: 'A quintessential ConFusion experience, is it a vada or is it a donut?',
//                comment: ''
//            },
//            {
//                name: 'ElaiCheese Cake',
//                image: 'images/elaicheesecake.png',
//                category: 'dessert',
//                label: '',
//                price: '2.99',
//                description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
//                comment: ''
//            }
//        ];
//
//        $scope.select = function (setTab) {
//            $scope.tab = setTab;
//
//            if (setTab === 2) {$scope.filtText = "appetizer";}
//            else if (setTab === 3) {$scope.filtText = "mains";}
//            else if (setTab === 4) {$scope.filtText = "dessert";}
//            else {$scope.filtText = "";}
//        };
//
//        $scope.isSelected = function (checkTab) {
//            return ($scope.tab === checkTab);
//        };
//
//        $scope.toggleDetails = function(){
//            $scope.showDetails = !$scope.showDetails;
//        };
//    }])
//
//    .controller('contactController', ['$scope', function($scope){
//        $scope.feedback = {
//            mychannel:"",
//            firstName:"",
//            agree:false,
//            email:""
//        };
//        var channels = [{value: "tel", label: "Tel."}, {value: "Email", label: "Email"}];
//        $scope.channels = channels;
//        $scope.invalidChannelSelection = false;
//    }])
//
//    .controller('feedbackController', ['$scope', function ($scope) {
//        $scope.sendFeedback = function () {
//            console.log($scope.feedback);
//            if ($scope.feedback.agree && ($scope.feedback.mychannel == "")) {
//                $scope.invalidChannelSelection = true;
//                console.log('incorrect');
//            }
//            else {
//                $scope.invalidChannelSelection = false;
//                $scope.feedback = {
//                    mychannel: "", firstName: "", lastName: "",
//                    agree: false, email: ""
//                };
//                $scope.feedback.mychannel = "";
//
//                $scope.feedbackForm.$setPristine();
//                console.log($scope.feedback);
//            }
//        };
//    }])
//
//    .controller('dishDetailController', ['$scope', function ($scope) {
//
//        var sorting = [{value: "rating", label: "rating"},
//            {value: "-rating", label: "-rating"},
//            {value: "date", label: "date"},
//            {value: "-date", label: "-date"}];
//        $scope.sorting = sorting;
//
//        $scope.dish = {
//            name: 'Uthapizza',
//            image: 'images/uthapizza.png',
//            category: 'mains',
//            label: 'Hot',
//            price: '4.99',
//            description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
//            comments: [
//                {
//                    rating: 5,
//                    comment: "Imagine all the eatables, living in conFusion!",
//                    author: "John Lemon",
//                    date: "2012-10-16T17:57:28.556094Z"
//                },
//                {
//                    rating: 4,
//                    comment: "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
//                    author: "Paul McVites",
//                    date: "2014-09-05T17:57:28.556094Z"
//                },
//                {
//                    rating: 3,
//                    comment: "Eat it, just eat it!",
//                    author: "Michael Jaikishan",
//                    date: "2015-02-13T17:57:28.556094Z"
//                },
//                {
//                    rating: 4,
//                    comment: "Ultimate, Reaching for the stars!",
//                    author: "Ringo Starry",
//                    date: "2013-12-02T17:57:28.556094Z"
//                },
//                {
//                    rating: 2,
//                    comment: "It's your birthday, we're gonna party!",
//                    author: "25 Cent",
//                    date: "2011-12-02T17:57:28.556094Z"
//                }
//
//            ]
//        };
//    }])
//
//    .controller('DishCommentController', ['$scope', function ($scope) {
//
//        $scope.feedback = {
//            rating: "5",
//            author: "",
//            comment: "",
//            date: ""
//        };
//
//        console.log($scope.rating);
//        console.log($scope.feedback);
//
//
//        $scope.submitComment = function () {
//
//            console.log($scope.feedback);
//
//            $scope.feedback.date = new Date().toISOString();
//
//            $scope.dish.comments.push($scope.feedback);
//
//            $scope.feedback = {
//                rating: "",
//                author: "",
//                comment: "",
//                date: new Date().toISOString()
//            };
//
//            $scope.feedbackForm.$setPristine();
//            console.log($scope.feedback);
//        }
//    }])
//;

//angular.module('confusionApp', [])
//    .controller('menuController', ['$scope', function ($scope) {
//        $scope.tab = 1;
//        $scope.filtText = '';
//        $scope.showDetails = false;
//
//
//        $scope.dishes = [
//            {
//                name: 'Uthapizza',
//                image: 'images/uthapizza.png',
//                category: 'mains',
//                label: 'Hot',
//                price: '4.99',
//                description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
//                comment: ''
//            },
//            {
//                name: 'Zucchipakoda',
//                image: 'images/zucchipakoda.png',
//                category: 'appetizer',
//                label: '',
//                price: '1.99',
//                description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
//                comment: ''
//            },
//            {
//                name: 'Vadonut',
//                image: 'images/vadonut.png',
//                category: 'appetizer',
//                label: 'New',
//                price: '1.99',
//                description: 'A quintessential ConFusion experience, is it a vada or is it a donut?',
//                comment: ''
//            },
//            {
//                name: 'ElaiCheese Cake',
//                image: 'images/elaicheesecake.png',
//                category: 'dessert',
//                label: '',
//                price: '2.99',
//                description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
//                comment: ''
//            }
//        ];
//
//        $scope.select = function (setTab) {
//            $scope.tab = setTab;
//
//            if (setTab === 2) {$scope.filtText = "appetizer";}
//            else if (setTab === 3) {$scope.filtText = "mains";}
//            else if (setTab === 4) {$scope.filtText = "dessert";}
//            else {$scope.filtText = "";}
//        };
//
//        $scope.isSelected = function (checkTab) {
//            return ($scope.tab === checkTab);
//        };
//
//        $scope.toggleDetails = function(){
//            $scope.showDetails = !$scope.showDetails;
//        }
//    }])
//
//    .controller('contactController', ['$scope', function($scope){
//        $scope.feedback = {
//            mychannel:"",
//            firstName:"",
//            agree:false,
//            email:""
//        };
//    }])
//
//    .controller('feedbackController', ['$scope', function ($scope) {
//        $scope
//    }])
//;