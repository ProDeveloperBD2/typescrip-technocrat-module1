{
  // ============================================================== //
  /* -----Ternary Operator & Optional Chaining & Nullish Coalescing Operator----- */
  // ============================================================== //
  const age: number = 12;
  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Not Adult");
  }
  const isAdult = age >= 18 ? "Adult 2" : "Not Adult 2";
  console.log({ isAdult });
  const isAuthencated = undefined;
  const result = isAuthencated ?? "Guest";
  console.log({ result });
  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };
  const user: User = {
    name: "Asratul Hasan",
    address: {
      city: "Khulna",
      road: "Minakkhi",
      presentAddress: "Khulna, Doulatpur, Deana",
      permanentAddress: "Lakshmipur, Ramganj, Kanchanpur",
    },
  };
  const permanentAddress =
    user?.address?.permanentAddress ?? "No Permanet Address";
  console.log({ permanentAddress });
}
