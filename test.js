QUnit.config.reorder = false;
const { test } = QUnit;


test(

  'Create a function `showMessage` that takes two parameters: an element and a string that is a URL. The function will fetch the URL and put the response text into the text content of the provided element.',

  function (assert) {
    if (!assert.functionExists('showMessage', ['elem', 'url'])) return;

    assert.equal(
      window.message.textContent,
      '',
      'Before running the function, the message is empty.',
    );

    showMessage(window.message, 'http://jacek.soc.port.ac.uk/tmp/ws/hello');

    const done = assert.async(1);
    assert.expect(4);

    setTimeout(step1, 500);
    setTimeout(step2, 1000);

    function step1() {
      assert.equal(
        window.message.textContent,
        'Live long and prosper!\n',
        'The message from the server should be there.',
      );

      // step1 completed, trigger getting a new message for step2
      showMessage(window.message, 'http://jacek.soc.port.ac.uk/tmp/ws/bye');
    }

    function step2() {
      assert.equal(
        window.message.textContent,
        'See you soon!\n',
        'When called the second time with a different URL, a new message from the server should be there.',
      );

      // step2 completed, mark test as passing
      window.message.parentElement.classList.add('done');
      done();
    }
  },
);


test(

  'Create a function `showList` that takes two parameters: an element and a string that is a URL. The function will fetch the URL, parse the retrieved data as JSON; the data is guaranteed to be an array of strings. The function will then, like the `filler` function in `ws_dom`, put the contents of the array as list items into the provided element.',

  function (assert) {
    assert.ok(
      typeof showList === 'function',
      'Create a `showList` function.',
    );

    assert.equal(
      window.list1.children.length,
      0,
      'Before running the function, the list is empty.',
    );

    showList(window.list1, 'http://jacek.soc.port.ac.uk/tmp/ws/arr8');

    const done = assert.async(1);
    assert.expect(6);

    setTimeout(step1, 500);
    setTimeout(step2, 1000);

    function step1() {
      assert.equal(
        window.list1.children.length,
        8,
        'After retrieving wsarr1, there are 8 elements.',
      );

      assert.equal(
        window.list1.children[5].textContent,
        'Return of the Jedi',
      );

      // step1 completed, trigger getting a new message for step2
      showList(window.list2, 'http://jacek.soc.port.ac.uk/tmp/ws/arr2');
    }


    function step2() {
      assert.equal(
        window.list2.children.length,
        2,
        'After retrieving wsarr2, there are 2 elements.',
      );

      assert.equal(
        window.list2.children[1].textContent,
        'Leia',
      );

      window.list1.parentElement.classList.add('done');
      done();
    }
  },
);


test(

  'Create a function `startShowingMessage` that takes two parameters: an element and a string that is a URL. The function will use `setInterval` to make the following task every 1s: fetch the URL and put the response text into the text content of the provided element.',

  function (assert) {
    assert.ok(
      typeof startShowingMessage === 'function',
      'Create a `startShowingMessage` function.',
    );

    assert.equal(
      window.message2.textContent,
      '',
      'Before running the function, the message is empty.',
    );

    startShowingMessage(window.message2, 'http://jacek.soc.port.ac.uk/tmp/ws/dyn1');

    const done = assert.async(2);

    setTimeout(checkMessage, 1500);
    setTimeout(checkMessage, 3000);

    let oldMessage = '';
    function checkMessage() {
      assert.notEqual(
        window.message2.textContent,
        oldMessage,
        'The message should be changing.',
      );
      oldMessage = window.message2.textContent;
      done();
    }

    window.message2.parentElement.classList.add('done');
  },
);


test(

  "Create a function 'handleError' that accepts an element and a url as a parameter, and shows the fetched text from the server in the element. If there is an error, the function should set the textContent of the element to 'OH DEAR'.",

  function (assert) {
    assert.ok(
      typeof handleError === 'function',
      'Create a `handleError` function.',
    );

    assert.equal(
      window.message3.textContent,
      '',
      'Before running the function, the message is empty.',
    );

    handleError(window.message3, 'http://jacek.soc.port.ac.uk/tmp/ws/hello');

    const done = assert.async(1);

    setTimeout(step1, 500);
    setTimeout(step2, 1000);

    function step1() {
      assert.strictEqual(
        window.message3.textContent,
        'Live long and prosper!\n',
        'The message from the server should be there.',
      );

      // step1 done, prep step2
      handleError(window.message3, 'http://jacek.soc.port.ac.uk/tmp/ws/404');
    }

    function step2() {
      assert.strictEqual(
        window.message3.textContent,
        'OH DEAR',
        "The message should say 'OH DEAR' if there is an error.",
      );

      window.message3.parentElement.classList.add('done');
      done();
    }
  },
);


test(
  "Create a function `drawBox', which accepts two parameters: a canvas element, and a URL which refers to a simple object with coordinates that you should fetch from a server. The function draws a box at the given coordinates. Update the coordinates and redraw the box every 1 second.",

  function (assert) {
    assert.ok(
      typeof drawBox === 'function',
      'Create a `drawBox` function.',
    );

    let oldPicture = window.canvas3.toDataURL();

    drawBox(window.canvas3, 'http://jacek.soc.port.ac.uk/tmp/ws/dyn2');

    assert.ok(
      true,
      'You need to check with your eyes that there is a box changing coordinates every second.',
    );

    const done = assert.async(2);

    setTimeout(checkPicture, 1500);
    setTimeout(checkPicture, 3000);

    function checkPicture() {
      const newPicture = window.canvas3.toDataURL();
      assert.ok(
        newPicture !== oldPicture,
        'The picture should be changing.',
      );
      oldPicture = newPicture;
      done();
    }
    window.canvas3.parentElement.classList.add('done');
  },
);
