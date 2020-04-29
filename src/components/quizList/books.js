const getImage = (id) => {
  switch (id) {
    case 1:
      return "https://m.media-amazon.com/images/I/51UoqRAxwEL._SY346_.jpg";
    case 2:
      return "https://m.media-amazon.com/images/I/51OZerWcGCL.jpg";
    case 3:
      return "https://m.media-amazon.com/images/I/51NuYi4-XoL._SY346_.jpg";
    case 4:
      return "https://m.media-amazon.com/images/I/51Vjb2qJwzL._SY346_.jpg";
    case 5:
      return "https://m.media-amazon.com/images/I/51-zRYQweBL._SY346_.jpg";
    case 6:
      return "https://m.media-amazon.com/images/I/51myHyjJsyL._SY346_.jpg";
    case 7:
      return "https://m.media-amazon.com/images/I/51d1HdwwlOL._SY346_.jpg";
    case 8:
      return "https://images-na.ssl-images-amazon.com/images/I/51xJofIPBzL._SX316_BO1,204,203,200_.jpg";
    default:
      return null;
  }
};

export default getImage;
