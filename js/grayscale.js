/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

/**
 * Get nth occurrence of a weekday for a given month
 * @param  {int} index
 * @param  {int} day
 * @param  {int} month
 * @param  {int} year
 * @return {date}
 */
function getNthDayOfMonth(index, day, month, year) {
    // Create date object
    var date = new Date();
    // Set to first day of month
    date.setDate(1);
    // If supplied - set the month
    if (month !== '' && month !== undefined) {
        // Set month
        date.setMonth(month);
    } else {
        month = date.getMonth();
    }
    // If supplied - set the year
    if (year !== '' && year !== undefined) {
        // Set year
        date.setFullYear(year);
    } else {
        year = date.getFullYear();
    }
    // Find daynumber
    firstDay = date.getDay();
    // Find first friday.
    while (date.getDay() != day) {
        date.setDate(date.getDate() + 1);
    }
    switch (index) {
        case 2:
            date.setDate(date.getDate() + 7);
            break;
        case 3:
            date.setDate(date.getDate() + 14);
            break;
        case 4:
            date.setDate(date.getDate() + 21);
            break;
        case 5:
            date.setDate(date.getDate() + 28);
            if (date.getMonth() !== month) {
                date = null;
            }
            break;
    }
    return date;
}

// Get the next upcoming Airport Day
var airportDay = getNthDayOfMonth(3, 2, 3);
if(airportDay < Date.now()) {
    var tmpDate = new Date();
    airportDay = getNthDayOfMonth(3, 2, 3, tmpDate.getFullYear() + 1);
}

$('.intro-text').prepend('<b>April ' + airportDay.getDate() + ', ' + airportDay.getFullYear() + '</b> &middot; ');
