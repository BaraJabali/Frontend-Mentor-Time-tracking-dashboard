console.log("hello");


const info = [
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
];

window.onload = function () {
  //in default it will desplay the daily 
  document.getElementById("Daily").style.color = "black";
  const times = document.getElementsByClassName("timesInfo");

  for (let i = 0; i < times.length; i++) {
    times[i].innerHTML = '<p class="hours">' + info[i].timeframes.daily.current + 'hrs</p><p class="last">Previous - ' + info[i].timeframes.daily.previous + 'hrs</p>';

  }

  //  document.getElementById("list").children[0].style.color="white";
}

function clicke(id) {
  document.getElementById("Daily").style.color = "white";
  document.getElementById("Weakly").style.color = "white";
  document.getElementById("Monthly").style.color = "white";


  if (id === "Daily") {
    document.getElementById("Daily").style.color = "black";
    const times = document.getElementsByClassName("timesInfo");

    for (let i = 0; i < times.length; i++) {
      times[i].innerHTML = '<p class="hours">' + info[i].timeframes.daily.current + 'hrs</p><p class="last">Previous - ' + info[i].timeframes.daily.previous + 'hrs</p>';

    }

  } else if (id === "Weakly") {
    document.getElementById("Weakly").style.color = "black";
    const times = document.getElementsByClassName("timesInfo");

    for (let i = 0; i < times.length; i++) {
      times[i].innerHTML = '<p class="hours">' + info[i].timeframes.weekly.current + 'hrs</p><p class="last">Previous - ' + info[i].timeframes.weekly.previous + 'hrs</p>';

    }

  } else if (id === "Monthly") {
    document.getElementById("Monthly").style.color = "black";
    const times = document.getElementsByClassName("timesInfo");

    for (let i = 0; i < times.length; i++) {
      times[i].innerHTML = '<p class="hours">' + info[i].timeframes.monthly.current + 'hrs</p><p class="last">Previous - ' + info[i].timeframes.monthly.previous + 'hrs</p>';

    }

  }

}