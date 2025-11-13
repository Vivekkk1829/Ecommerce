const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id:
    "ATszH4kWAZBb18cevVjgc7cx8a6eleRwt6XMouwin0qiAv7Tt0bRcgTtXxgAI-97rEpkpPePQv45xYnD",
  client_secret:
    "ELDSA6T8osmy2gbMC-2HNU-jK0YVIBywMx-hWbfzly-Fx76s0Z7zjrebDbWwMpxmwt875Ji49f5r05nL",
});

module.exports = paypal;