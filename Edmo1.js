function SearchingChallenge(str) {
  let varOcg = "";
  let varPcb = 0;
  let varFiltersCg = null;

  const words = str.split(" ");

  for (let w = 0; w < words.length; w++) {
    const word = words[w];
    const freq = {};
    let localMax = 0;

    for (let i = 0; i < word.length; i++) {
      const ch = word[i];
      freq[ch] = (freq[ch] || 0) + 1;
      if (freq[ch] > localMax) localMax = freq[ch];
    }

    if (localMax >= 2 && localMax > varPcb) {
      varPcb = localMax;
      varOcg = word;
      varFiltersCg = freq;
    }
  }

  return varOcg === "" ? -1 : varOcg;
}

console.log(SearchingChallenge(readline()));
