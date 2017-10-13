# AJAX

* Download a zip of this `ws_ajax` repository or (preferably) clone it thus:
```bash
git clone https://github.com/portsoc/ws_ajax.git
```
*  From your new local `ws_ajax` folder, open `index.html` in a browser to see which tests fail.
*  Edit `index.js`; improving and adding code until all the tests pass.

## Examples

TODO:
We have two sets of examples: modern, using `fetch()`, in `examples/`; and for historical completeness, in `examples/legacy_xhr/` **not done yet**

### Modern:

TODO

### Legacy XHR:

#### Synchronous
The simplest blocking form of AJAX a sychronous request.

#### ReadyStateChange
XHR the original asynchronous way: where you have to care about HTTP status codes.

#### Evented Callbacks
The better way to do asynchronous with XHR.  Includes examples of load and error events.

#### User triggered AJAX
Using a button to provoke content loading.

#### Loading data
Loading a JSON file and adding it to the DOM using JS.
