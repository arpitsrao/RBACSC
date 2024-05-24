const RBACSC = artifacts.require("RBACSC");

module.exports = function (deployer) {
  deployer.deploy(RBACSC, "Test Organization");
};