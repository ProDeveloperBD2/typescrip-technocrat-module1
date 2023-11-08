{
  // ================================ //
  /* -----Union and Intersection Types----- */
  // ================================//
  type FrontendDeveloper1 = "FakibazDeveloper" | "JuniorDeveloper";
  type FullstackDeveloper1 = "FrontendDeveloper" | "ProDeveloper";
  type Developer = FrontendDeveloper1 | FullstackDeveloper1;
  const newDeveloper: FrontendDeveloper1 = "FakibazDeveloper";
  type User = {
    name: string;
    email: string;
    gender: "Male" | "Famale";
    bloodGroup: "A+" | "O+" | "AB-" | "A-" | "AB+";
  };
  const user1: User = {
    name: "Asratul Hasan",
    email: "mdnahid.phero@gmail.com",
    gender: "Male",
    bloodGroup: "A-",
  };

  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };
  type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;
  const fullstackDeveloper: FullstackDeveloper = {
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "Typescript",
      "React",
      "Next.js",
      "Redux",
      "MongoDB",
      "PostgreSQL",
    ],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
