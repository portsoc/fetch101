# AJAX

* Download a zip of this `ws_ajax` repository or (preferably) clone it thus:
```bash
git clone https://github.com/portsoc/ws_ajax.git
```
* In your new local `ws_ajax` folder, run `npm start` to start a simple HTTP server on port 8080.
* Connect to this server in a browser to see which tests fail.
  * If using your VM, just go to its IP address in your browser.
* Edit `index.js`; improving and adding code until all the tests pass.

## Examples

We have two sets of examples: modern, using `fetch()`, in `examples/`; and for historical completeness, in `examples/legacy_xhr/` we have XMLHttpRequest-based examples.

All the examples are served at `/examples`; if using your VM and its IP address is 10.11.12.13, the examples will be at `http://10.11.12.13/examples`.

### Modern:

* Get message.txt, put in the DOM
* Do the above at the press of a button
* Fetch JSON data and fill a list with it
* The first example above with promises but without async/await

### Legacy XHR:

* Synchronous
  – The simplest blocking form of AJAX a sychronous request.
* ReadyStateChange
  – XHR the original asynchronous way: where you have to care about HTTP status codes.
* Evented Callbacks
  – The better way to do asynchronous with XHR.  Includes examples of load and error events.
* User triggered AJAX
  – Using a button to provoke content loading.
* Loading data
  – Loading a JSON file and adding it to the DOM using JS.
