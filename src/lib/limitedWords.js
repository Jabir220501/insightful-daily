export const lengthCharacter = (characterLength, maxLength) => {
  if (characterLength.length > maxLength) {
    let splicedToMaxLength = characterLength
      .split(/\s+/)
      .slice(0, maxLength)
      .join(" ");
    let addDots = splicedToMaxLength.concat("...");
    return addDots;
  }
};
