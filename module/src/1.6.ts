{
  // ---------------------------- //
  /* /--Function--/ */
  // ---------------------------- //

  // ================================ //
  /* -----Normal Function----- */
  // ================================//
  function addSum(num1: number, num2: number): number {
    return num1 + num2;
  }
  addSum(3, 6);

  // ================================ //
  /* -----Arrow Function----- */
  // ================================//
  const addArrow = (num3: number, num4: number): number => {
    return num3 + num4;
  };

  // ========================== //
  const poorUser = {
    name: "Nahid",
    balance: 3,
    addBalance(balance: number): string {
      return `My new balance is : ${this.balance + balance}`;
    },
  };

  // =========================== //
  const arr: number[] = [2, 4, 6];
  const newArray = arr.map((elem: number): number => elem * elem);
}
