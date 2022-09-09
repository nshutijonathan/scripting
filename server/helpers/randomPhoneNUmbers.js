export const randomPhoneNumbers = () => {
  let phoneNum = String(Math.random());
  return "078" + phoneNum.substring(2, 9);
};
