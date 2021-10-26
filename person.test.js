function firstname(firstname1,firstname2){
  if(firstname1 === firstname2){
    return firstname1;
  }
  else if(firstname1.localeCompare(firstname2)){
    return firstname1;
  }
  else {
    return null;
  }
}

function lastname(lastname1, lastname2){
   if(lastname1 === lastname2){
     return lastname1;
   }
   else if(lastname1.localeCompare(lastname2)){
     return lastname1;
   }
   else {
     return null;
   }
}

describe("person comparison", () => {
  test("it should compare two people by first and last name", () => {
    expect(firstname("Connor", "connor")).toBe("Connor");

    expect(lastname("Bender", "bender")).toBe("Bender");
  });
});
