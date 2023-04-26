export const secondsToDate = (seconds, nanoseconds) => {
  const output = new Date(
    seconds * 1000 + nanoseconds / 1000000
  ).toLocaleDateString("en-US", {
    timeZone: "UTC",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return output;
};
