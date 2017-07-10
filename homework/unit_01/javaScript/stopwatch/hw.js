// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// Data & Core Business Logic ///

  const Stopwatch = {
    tickClock: function(){
      if (Stopwatch.isRunning) {
        setTimeout(Stopwatch.tickClock, 10); // trigger next clock tick
        Stopwatch.advanceTenMillisecs();
        AppController.handleClockTick();
      }
    },
    isRunning: false,
    mins: 0,
    secs: 0,
    millisecs: 0,
    laps: [],
    // DO NOT EDIT ABOVE THIS LINE
    advanceTenMillisecs: function(){
    // Increase the number of milliseconds by 10
    Stopwatch.millisecs += 10
    //if the Number of milliseconds is = 1000
    if (Stopwatch.millisecs === 1000) {
      //increase seconds by one
      Stopwatch.secs += 1
      //reset milliseconds
      Stopwatch.millisecs = 0
    }
    //if seconds is = 60
    if (Stopwatch.secs === 60) {
      Stopwatch.mins += 1
      //increse minutes by 1
      Stopwatch.secs = 0
      //reset seconds
    }

    },
    reset: function(){
    // changes minutes, seconds, and milliseconds to 0
      Stopwatch.mins = 0
      Stopwatch.secs = 0
      Stopwatch.millisecs = 0
    // resets the laps
      Stopwatch.laps = []
    },
    start: function(){
    // if stopwatch.isrunning === false
    if (Stopwatch.isRunning === false) {
      //change stopwatch.isrunning to true
      Stopwatch.isRunning = true
      //call the 'tickclock' function
      Stopwatch.tickClock()
    }

    },
    stop: function(){
    // if stopwatch.isrunning === true
    if (Stopwatch.isRunning === true) {
      Stopwatch.isRunning = false
      // change it to false (not running)
      }
    },
    lap: function(){
    // if stopwatch.isrunning === true
    if (Stopwatch.isRunning === true) {
      //Push the current value to the laps array
      Stopwatch.laps.push(`${Stopwatch.mins}: ${Stopwatch.secs}: ${Stopwatch.millisecs}`)
    }
    }
  };

  /// User Interface ///
  const ViewEngine = {
    updateTimeDisplay: function(mins, secs, millisecs){
        $('#mins').html(ViewHelpers.zeroFill(mins, 2))
        $('#secs').html(ViewHelpers.zeroFill(secs, 2))
        $('#millisecs').html(ViewHelpers.zeroFill(millisecs, 2))
    },
    updateLapListDisplay: function(laps){
      // Your Code Here
    },
  };
  const ViewHelpers = {
    zeroFill: function(number, length){
      // turn number into string
      var numToString = number.toString();
      var numberToZeros = length - numToString.length;
      if (numberToZeros === 1) {
        numToString = '0' + numToString;
      }
      if (numberToZeros === 2) {
        numToString = '00' + numToString;
      }
    },
  };

  /// Top-Level Application Code ///
  const AppController = {
    handleClockTick: function(){
    ViewEngine.updateTimeDisplay(Stopwatch.mins, Stopwatch.secs, Stopwatch.millisecs)
    },
    handleClickStart: function() {
      if (!Stopwatch.isRunning) {
        Stopwatch.start()
      }
    },
    handleClickStopReset: function(){
      // Your Code Here
    },
    handleClickLap: function(){
      //ypouir code here
    }
  };

  window.onload = function(){
    // Attach AppController methods to the DOM as event handlers here.
    $('#start').on('click', function() {
      AppController.handleClickStart()
    })
  };
