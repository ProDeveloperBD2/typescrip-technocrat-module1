{
  // ================================ //
  /* -----Destructuring----- */
  // ================================//
  const user = {
    id: 453,
    name: {
      firstName: "Asratul",
      middleName: "Hasan",
      lastName: "Nahid",
    },
    contactNo: "01775368894",
    address: "Bangladesh",
  };
  const {
    contactNo,
    name: { firstName: frName },
  } = user;
  const myFriends = ["Shamim", "Tanvir", "Sabbir", "Abir"];
  const [, bestFriend, ...rest] = myFriends;
}
