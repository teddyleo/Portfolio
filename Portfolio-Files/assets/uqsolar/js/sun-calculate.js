// DESCRIPTION
//
//   Provides sunrise and sunset times for specified date and position.
//   All dates are UTC.  Year is 4-digit.  Month is 1-12.  Day is 1-31.
//   Longitude is positive for east, negative for west. Latitude is
//   positive for north, negative for south.
//
// SAMPLE USAGE
//
//   var tokyo = new SunriseSunset( 2011, 1, 19, 35+40/60, 139+45/60);
//   tokyo.sunriseUtcHours()      --> 21.8199 = 21:49 GMT
//   tokyo.sunsetUtcHours()       --> 7.9070  = 07:54 GMT
//   tokyo.sunriseLocalHours(9)   --> 6.8199  = 06:49 at GMT+9
//   tokyo.sunsetLocalHours(9)    --> 16.9070 = 16:54 at GMT+9
//   tokyo.isDaylight(1.5)        --> true
//
//   var losangeles = new SunriseSunset( 2011, 1, 19, 34.05, -118.233333333 );
//   etc.
 
var SunriseSunset = function( utcFullYear, utcMonth, utcDay, latitude, longitude ) {
	"use strict";
    this.zenith = 90 + 50/60; 
	//   offical      = 90 degrees 50'
   //   civil        = 96 degrees
   //   nautical     = 102 degrees
   //   astronomical = 108 degrees
 
    this.utcFullYear = utcFullYear;
    this.utcMonth = utcMonth;
    this.utcDay = utcDay;
    this.latitude = latitude;
    this.longitude = longitude;
 
    this.rising = true; // set to true for sunrise, false for sunset
    this.lngHour = this.longitude / 15;
};
 
SunriseSunset.prototype = {
    
	sin: function( deg ) { "use strict"; return Math.sin( deg * Math.PI / 180 ); },
    cos: function( deg ) { "use strict"; return Math.cos( deg * Math.PI / 180 ); },
    tan: function( deg ) { "use strict"; return Math.tan( deg * Math.PI / 180 ); },
    asin: function( x ) { "use strict"; return (180/Math.PI) * Math.asin(x); },
    acos: function( x ) { "use strict"; return (180/Math.PI) * Math.acos(x); },
    atan: function( x ) { "use strict"; return (180/Math.PI) * Math.atan(x); },
 
    getDOY: function() {
        "use strict";
		var month = this.utcMonth,
            year = this.utcFullYear,
            day = this.utcDay;
 
        var N1 = Math.floor( 275 * month / 9 );
        var N2 = Math.floor( (month + 9) / 12 );
        var N3 = (1 + Math.floor((year - 4 * Math.floor(year / 4 ) + 2) / 3));
        var N = N1 - (N2 * N3) + day - 30;
        return N;
    },
 
    approximateTime: function() {
       "use strict";
	    var doy = this.getDOY();
        if ( this.rising ) {
            return doy + ((6 - this.lngHour) / 24);
        } else {
            return doy + ((18 - this.lngHour) / 24);
        }
    },
 
    meanAnomaly: function() {
       "use strict";
	    var t = this.approximateTime();
        return (0.9856 * t) - 3.289;
    },
 
    trueLongitude: function() {
        "use strict";
		var M = this.meanAnomaly();
        var L = M + (1.916 * this.sin(M)) + (0.020 * this.sin(2 * M)) + 282.634;
        return L % 360;
    },
 
    rightAscension: function() {
        "use strict";
		var L = this.trueLongitude();
        var RA = this.atan(0.91764 * this.tan(L));
        RA %= 360;
 
        var Lquadrant  = (Math.floor( L/90)) * 90;
        var RAquadrant = (Math.floor(RA/90)) * 90;
        RA = RA + (Lquadrant - RAquadrant);
        RA /= 15;
 
        return RA;
    },
 
    sinDec: function() {
       "use strict";
	    var L = this.trueLongitude(),
            sinDec = 0.39782 * this.sin(L);
 
        return sinDec;
    },
 
    cosDec: function() {
       "use strict";
	    return this.cos(this.asin(this.sinDec()));
    },
 
    localMeanTime: function() {
       "use strict";
	   var cosH = (this.cos(this.zenith) - (this.sinDec() * this.sin(this.latitude))) /  (this.cosDec() * this.cos(this.latitude)); 
 
        if (cosH >  1) {
            return "the sun never rises on this location (on the specified date)";
        } else if (cosH < -1) {
            return "the sun never sets on this location (on the specified date)";
        } else {
            var H = this.rising ? 360 - this.acos(cosH) : this.acos(cosH);
            H /= 15;
            var RA = this.rightAscension();
            var t = this.approximateTime();
            var T = H + RA - (0.06571 * t) - 6.622;
            return T;
        }
    },
 
    hoursRange: function( h ) {
        "use strict";
		return (h+24) % 24;
    },
 
    UTCTime: function() {
        "use strict";
		var T = this.localMeanTime();
        var UT = T - this.lngHour;
        return this.hoursRange( UT );
        //if ( UT < 0 ) UT += 24;
        //return UT % 24;
    },
 
    sunriseUtcHours: function() {
        "use strict";
		this.rising = true;
        return this.UTCTime();
    },
 
    sunsetUtcHours: function() {
        "use strict";
		this.rising = false;
        return this.UTCTime();
    },
 
    sunriseLocalHours: function(gmt) {
        "use strict";
		return this.hoursRange( gmt + this.sunriseUtcHours() );
    },
 
    sunsetLocalHours: function(gmt) {
       "use strict";
	    return this.hoursRange( gmt + this.sunsetUtcHours() );
    },
 
    // utcCurrentHours is the time that you would like to test for daylight, in hours, at UTC
    // For example, to test if it's daylight in Tokyo (GMT+9) at 10:30am, pass in
    // utcCurrentHours=1.5, which corresponds to 1:30am UTC.
    isDaylight: function( utcCurrentHours ) {
        "use strict";
		var sunriseHours = this.sunriseUtcHours(),
            sunsetHours = this.sunsetUtcHours();
 
        if ( sunsetHours < sunriseHours ) {
            // Either the sunrise or sunset time is for tomorrow
            if ( utcCurrentHours > sunriseHours ) {
                return true;
            } else if ( utcCurrentHours < sunsetHours ) {
                return true;
            } else {
                return false;
            }
        }
 
        if ( utcCurrentHours >= sunriseHours ) {
            return utcCurrentHours < sunsetHours;
        }
 
        return false;
    }
};
 
 
var dateObj = new Date();
var month = dateObj.getMonth() + 1; //months from 1-12
var day = dateObj.getDate();
var year = dateObj.getFullYear();

$('#date').append(day+"/"+month+"/"+year);

var uq = new SunriseSunset(year, month, day, -(27+1/2), 153);

var sunriseDecimalTime = uq.sunriseLocalHours(10);
var sunsetDecimalTime = uq.sunsetLocalHours(10);
var rMinutes = Math.floor((sunriseDecimalTime - Math.floor(sunriseDecimalTime))*60);
var rHours = Math.floor(sunriseDecimalTime);

var sMinutes = Math.floor((sunsetDecimalTime - Math.floor(sunsetDecimalTime))*60);
var sHours = Math.floor(sunsetDecimalTime);

console.log(rHours+":"+rMinutes+" AM");
console.log(sHours+":"+sMinutes+" PM");

if(rMinutes>9 && sMinutes>9){
	var rTime = rHours+":"+rMinutes+" AM";
	var sTime = sHours+":"+sMinutes+" PM";
}else if(rMinutes>9 && sMinutes<10){
	var rTime = rHours+":"+rMinutes+" AM";
	var sTime = sHours+":0"+sMinutes+" PM";
}else if(rMinutes<10 && sMinutes>9){
	var rTime = rHours+":0"+rMinutes+" AM";
	var sTime = sHours+":"+sMinutes+" PM";
}else{
	var rTime = rHours+":0"+rMinutes+" AM";
	var sTime = sHours+":0"+sMinutes+" PM";
}
	
$('#sunrisetime').append(rTime);

$('#sunsettime').append(sTime);

/* var today =year+"-"+month+"-"+day;
log.console(today); */
document.getElementById("choosedate").value = "2016-05-16";

var input = document.getElementById( 'choosedate' ).value;
var pickdate = new Date( input );
var cyear;
var cmonth;
var cday;
if ( !!pickdate.valueOf() ) { // Valid date
    cyear = pickdate.getFullYear();
    cmonth = pickdate.getMonth()+1;
    cday = pickdate.getDate();
} else { window.alert("Wrong Date!");}

console.log(cyear+"/"+cmonth+"/"+cday);



