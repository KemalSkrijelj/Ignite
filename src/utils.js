export const smallImg = (imagePath, size) => {
  const image = imagePath.match(/media\/screenshots/)
    ? imagePath.replace(
        "media/screenshots",
        `media/resize/${size}/-/screenshots`
      )
    : imagePath.replace("/media/games/", `/media/resize/${size}/-/games`);
  return image;
};
//Koristimo da bi ubrzali sajt i da ne bi slika bila toliko velika!!