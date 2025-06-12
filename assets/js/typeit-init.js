import TypeIt from "typeit";

new TypeIt("#headline-typeit", {
  speed: 100,
  cursor: true,
})
  .type("Breaking, building, and learning in cybersecurity.")
  .pause(2000)
  .delete()
  .type("Hands-on learner. Growing every day.")
  .go();