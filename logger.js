let
  svr = "http://rjb.soc.port.ac.uk",
  now = Date.now(),
  runid = "run " + id() + " " + now,
  order = 0,
  tests = [],
  modules = {},

  runRecord = {
    "id": runid,
    "uid": id(),
    "topic": window.topic,
    "time": now,
    "browser": {
      // record details about what kind of dev platform is being used
      // for a run of tests - super useful when bugs can't be reproduced.
      "platform": navigator.platform,
      "vendor": navigator.vendor,
      "product": navigator.product,
      "userAgent": navigator.userAgent,
    },
    "testsSucceeded": [],
    "testsFailed": [],
  };

/**
 * This gets called every time a unit test assertion runs (pass or fail)
 */
QUnit.log(
  function( details ) {
    // ensure whatever this module is is recorded in the list of modules.
    let key = details.module.toLowerCase().replace(/[^a-zA-Z\d]/gi, "_");
    modules[key] = details.module;

    // record test instance details
    details.time = Date.now();
    details.order = order++;
    details.runid = runid;
    details.moduleid = key;

    // record the individual test
    tests.push(details);
  }
);

/**
 * This gets called every time a whole unit test runs (pass or fail)
 */
QUnit.testDone(function( details ) {
    // ensure whatever this module is is recorded in the list of modules.
    let moduleid = details.module.toLowerCase().replace(/[^a-zA-Z\d]/gi, "_");

    let testName = moduleid + '/' + details.name;
    if (testName.length > 70) testName = testName.substring(0, 69) + '…';

    // if a test fails any assertion, it will be recorded as failed
    if (details.failed) {
      runRecord.testsFailed.push(testName);
    } else {
      runRecord.testsSucceeded.push(testName);
    }
});

/**
 * This gets called after the last test has run.
 */
QUnit.done(function( details ) {
  runRecord.summary = details;
  addStudent();
  addModules();
  addRunRecord();
  // addTests();
});

function sendData(what, url) {
  let xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send( JSON.stringify(what) );
}

function addRunRecord() {
  sendData( runRecord, svr+"/runs/" );
}

// this overloads the server
// function addTests() {
//   var url = svr + "/records/";
//   for (var t=0; t<tests.length; t++) {
//     sendData(tests[t], url);
//   }
// }

function addStudent() {
    sendData(
      {
        "id": id(),
        "fn": fn(),
        "sn": sn()
      },
      svr + "/students/"
    );
}


function addModules() {
  let url = svr + "/modules/";
  for (let key in modules) {
    if (modules.hasOwnProperty(key)) {
      sendData(
        {
          "id": key,
          "name": modules[key]
        },
        url
      );
    }
  }

}
