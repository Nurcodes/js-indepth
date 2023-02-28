const sentenceGen = async function* (sentence) {
  if (!sentence || typeof sentence !== "string") return;
  const vowels = ["a", "e", "i", "o", "u"];
  let i = 0;
  while (i < sentence.length) {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        vowels.includes(sentence[i])
          ? resolve("*")
          : resolve(sentence[i].toUpperCase());
      }, 100);
    });
    i++;
  }
};

const sentenceObj = sentenceGen("Monkeys are the coolest animal!");

async function getSentence() {
  for await (const letter of sentenceObj) {
    console.log(letter);
  }
}

getSentence();
