
function packageTextForStorage(text) {
  // Escaping special characters like quotes, backslashes, etc.
  let escapedText = text.replace(/\\/g, '\\\\') // Escape backslashes first
                         .replace(/"/g, '\\"')  // Escape double quotes
                         .replace(/'/g, "\\'")  // Escape single quotes
                         .replace(/\n/g, '\\n') // Replace newline characters
                         .replace(/\r/g, '\\r'); // Replace carriage returns

  return escapedText;
}

function unpackTextForDisplay(escapedText) {
  let unescapedText = escapedText
    .replace(/\\n/g, '\n') // Convert \n to newline
    .replace(/\\r/g, '\r') // Convert \r to carriage return
    .replace(/\\"/g, '"')  // Unescape double quotes
    .replace(/\\'/g, "'")  // Unescape single quotes
    .replace(/\\\\/g, '\\'); // Unescape backslashes
  return unescapedText;
}

export {
  packageTextForStorage,
  unpackTextForDisplay
}


let originalText = `Every tomorrow has two handles; we can take hold of the handle of anxiety, or the handle of faith. And the first battle is won, my brothers and sisters, when we fight for belief in ourselves, and find that it has come to us while we are still battling. We must not allow petty things to color our lives and stimulate them into vast proportions of evil. To dwell on every slight and clutch it close to our breast and nourish it will corrode our thinking. We're on the move now, and as Frederick Dougless said, "Power concedes nothing without a struggle." It never has, and it never will.

The United States can no longer afford /the luxury of costly morally, \religiously, and ethically wrong racial discrimination. For America needs all of her citizens with their abilities developed to make a fuller contribution to the future. Many problems scream loudly in this country. The thousands of black citizens disenfranchised, living under degrading conditions. The millions of poor in this nation, white and black, who lack the bare rudiments for fruitful living. The rapidly growing numbers of children caught in a web of disillusionment which destroys their will to learn. The increasing numbers of aged who do not even look forward to rest or retirement.

And...`;
let packagedText = packageTextForStorage(originalText);
console.log(`packaged text is here:`, packagedText);  // Output: Hello, \"world\"!\\nThis is a test.

let unpackedText = unpackTextForDisplay(packagedText);
console.log(`unpacked:`, unpackedText); // Output: Hello, "world"!
                           // This is a test.



