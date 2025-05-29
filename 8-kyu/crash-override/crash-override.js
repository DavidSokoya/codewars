function aliasGen(first, last) {
  // Get the first character and convert it to uppercase
  let firstInitial = first.charAt(0).toUpperCase();
  let lastInitial = last.charAt(0).toUpperCase();
​
  // Check if the first character is a letter (A-Z)
  if (!(firstInitial in firstName) || !(lastInitial in surname)) {
    return 'Your name must start with a letter from A - Z.';
  }
​
  return `${firstName[firstInitial]} ${surname[lastInitial]}`;
}