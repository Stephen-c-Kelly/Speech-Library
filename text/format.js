
function packageTextForStorage(payload) {
 
 payload.text = payload.text.replace(/\\/g, '\\\\') // Escape backslash
                         .replace(/"/g, '\\"')  // Escape double quotes
                         .replace(/'/g, "\\'")  // Escape single quotes
                         .replace(/\n/g, '\\n') // Replace newline characters
                         .replace(/\r/g, '\\r'); // Replace carriage returns
return payload
}

function unpackTextForDisplay(payload) {
  
  payload.text = payload.text
    .replace(/\\n/g, '\n')   // Convert \n to newline
    .replace(/\\r/g, '\r')   // Convert \r to carriage return
    .replace(/\\"/g, '"')    // Unescape double quotes
    .replace(/\\'/g, "'")    // Unescape single quotes
    .replace(/\\\\/g, '\\'); // Unescape backslashes
  
  
  return payload
}

export {
  packageTextForStorage,
  unpackTextForDisplay
}




