const RBACSC = artifacts.require("RBACSC");

contract("RBACSC", (accounts) => {
  let instance;

  beforeEach(async () => {
    instance = await RBACSC.deployed();
  });

  it("should add a user", async () => {
    const userAddress = accounts[1];
    const userRole = "UserRole";
    const userNotes = "User Notes";

    await instance.addUser(userAddress, userRole, userNotes, { from: accounts[0] });
    const user = await instance.usersAll(userAddress);

    assert.equal(user.userRole, userRole, "User role does not match");
    assert.equal(user.userNotes, userNotes, "User notes do not match");
  });

  // Add more tests here
});