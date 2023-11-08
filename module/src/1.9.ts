{
  // ================================ //
  /* -----Type Alias----- */
  // ================================//
  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo: string;
    address: string;
  };

  const student1: Student = {
    name: "Asraul Hasan Nahid",
    age: 17,
    gender: "Male",
    contactNo: "01775368894",
    address: "Lakshmipur, Ramganj, Bangladesh",
  };
  const student2: Student = {
    name: "Nizam",
    age: 27,
    gender: "Male",
    contactNo: "01675456788",
    address: "Khulna, Douloadpur, Bangladesh",
  };
  type MyName = string;
  type MyAge = number;
  type MyWife = boolean;
  const myName: MyName = "Asratul";
  const myAge: MyAge = 17;
  const myWife: MyWife = false;
  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
}
