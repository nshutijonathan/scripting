export const randomEmails = () => {
  let chars = "abcdefghijklmnopqrstuvwxyz1234567890";
  let string = "";
  for (let ii = 0; ii < 15; ii++) {
    string += chars[Math.floor(Math.random() * chars.length)];
  }
  return string + "@example.com";
};
