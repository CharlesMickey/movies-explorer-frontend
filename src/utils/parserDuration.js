function parserDuration(duration) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  if (duration % 60) {
    const time = `${hours}ч ${minutes}м`;
    return time;
  }
}

export default parserDuration;
