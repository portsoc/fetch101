# Fetch

## Contents
Herein are:
  * examples of the `fetch` API.
  * Unit tests for practicing use of `fetch`.

## Installation & Use
1. Clone the repository thus:
   ```bash
   git clone https://github.com/portsoc/fetch101.git
   ```
2. Go into the locally cloned repo:
   ```bash
   cd fetch101
   ```
3. Start a simple HTTP server on port 8080 with:
   ```bash
   npm start
   ```
4. See the examples at [http://localhost:8080/examples/](http://localhost:8080/examples/)
5. Unit tests.
   * See the unit tests at [http://localhost:8080/](http://localhost:8080/)
   * Edit `index.js`; improving and adding code until all the tests pass.

## Examples
1. fetch_message
    * Get `message.txt`, from a sever and put in the DOM

2. fetch_on_button
    * When a button is pressed, get `message.txt`, from a sever and put in the DOM

3. json_data
    * When a button is pressed, get `data.json`,` from a sever, parse the data and populate an unordered list with it.

4. response_headers
    * The first example above, with promises, but without async/await (i.e. more ugly)

https://portsoc.github.io/fetch101/examples/1_fetch_message/
https://portsoc.github.io/fetch101/examples/2_fetch_on_button/
https://portsoc.github.io/fetch101/examples/3_json_data/
https://portsoc.github.io/fetch101/examples/4_fetch_promises/
https://portsoc.github.io/fetch101/examples/5_response_headers/
https://portsoc.github.io/fetch101/examples/6_other_peoples_data/
