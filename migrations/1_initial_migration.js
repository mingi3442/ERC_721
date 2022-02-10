const Migrations = artifacts.require("Migrations");
const ExperimentNFT = artifacts.require("ExperimentNFT.sol");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(ExperimentNFT);
};
