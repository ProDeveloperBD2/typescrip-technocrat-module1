{
  // ================================ //
  /* -----Spread Operator----- */
  // ================================//
  const bros1: string[] = ["Nizam", "Jhankar", "Nazim"];
  const bros2: string[] = ["Sahadad", "Saiful", "Riaz"];
  bros1.push(...bros2);
  const mentors1 = {
    typescipt: "Nahid",
    redux: "Nizam",
    next: "Riaz",
  };
  const mentors2 = {
    prisma: "Saiful",
    cloud: "Jhankar",
    dbms: "Nazim",
  };
  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  // ================================ //
  /* -----Rest Operator----- */
  // ================================//
  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
  };
  greetFriends("Abul", "Kabul", "Babul", "Chabul", "Labul");
}
