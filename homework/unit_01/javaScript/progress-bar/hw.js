// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function(timerValue){
    // Your Code Here
    document.getElementById('numeric-display').textContent = timerValue
  },
  drawProgressBars: function(timerValue){
    // Your Code Here
    var timeLeft = 100 - timerValue
    document.getElementsByClassName('progress-bar')[0].style.width = timeLeft + '%';
  },
  drawLitFuses: function(timerValue){
    // Your Code Here
    var litUp = timerValue / 100;
    var notLitUp = (1 - litUp);
    document.getElementsByClassName('unburnt')[0].style.width = (litUp * 98) + '%'
    document.getElementsByClassName('burnt')[0].style.width = (notLitUp * 98) + '%'
  },
  drawCrawlers: function(timerValue){
    // Your Code Here
    var timeLeft = 100 - timerValue
    document.getElementsByClassName('crawler')[0].style.marginLeft = (timeLeft * 10) + 'px';
    if (timerLeft % 2 === 0) {
      document.getElementsByClassName('crawler')[0].style.marginTop = '10px';
    }
    else {
      document.getElementsByClassName('crawler')[0].style.marginTop = '0px';
    }
  }
};
