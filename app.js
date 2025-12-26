/**
 * Created by kriz_web on 09-09-2020.
 */
angular.module("testApp", [])

    .controller("testController", function($scope) {

        $scope.randomizeThumbs = function() {
            var j = $('.thumbs img').length;
            var i = 0;
            var list = [];

            //Making a list of all image URLs
            for(i=0;i<j;i++) {
                list.push($('.thumbs img').eq(i).attr('src'));
                $('.thumbs img').eq(i).attr('src', '');
            }

            //Randomly setting image URLs for each thumb position
            for(i=0;i<j;i++) {
                var k = Math.floor(Math.random() * (j-i));
                $('.thumbs img').eq(i).attr('src', list[k]);
                list.splice(k,1);
            }
            $('.mainImg img').attr('src', $('.thumbs img').eq(0).attr('src'));
        };
        $scope.randomizeThumbs();

        $(document).on("click", function(e) {
            if ($(e.target).is('.dropdown') === false) {
                $('.dropdown').removeClass("active");
            }
        });

        $scope.itemCount = 0;
        $scope.itemPrice = 999.99;

        $scope.activeButton = function() {
            $(event.target).toggleClass('active');
        };

        //Setting main image on click of thumb image
        $scope.imageSwitch = function() {
            var a = $(event.target).attr('src');
            $('.mainImg img').attr('src', $(event.target).attr('src'));
            $('.thumbs img').removeClass('active');
            $(event.target).addClass('active');
        };

        $('input[type=radio][name=size]').change(function() {
            $scope.itemPrice = 999.99;
            var i = ($(this).next().html() - 6) * 50;
            $scope.itemPrice = $scope.itemPrice + i;
            $('.price').html("$ " + $scope.itemPrice);
        });


    });