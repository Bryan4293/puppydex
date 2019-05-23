const chihuahuas = [
  {
    name: "Marlo",
    image:
      "https://thehappypuppysite.com/wp-content/uploads/2018/08/chihuahua-lifespan-long.jpg",
    description: "A timid little guy"
  },
  {
    name: "Sweetie",
    image:
      "https://www.rover.com/blog/wp-content/uploads/2018/11/chihuahua-810789_1920-960x540.jpg",
    description: "Smelling the roses"
  },
  {
    name: "Millie",
    image:
      "https://global-free-classified-ads-s02.r.worldssl.net/user_images/2674146.jpg",
    description: "Playful puppy"
  },
  {
    name: "Taco",
    image: "https://c1.staticflickr.com/5/4152/5026795972_03932050a6_b.jpg",
    description: "Loves to chase feet"
  }
];

const getChihuahuas = (req, res) => {
  res.json(chihuahuas);
};

const postChihuahua = (req, res) => {
  let chihuahua = req.body;
  chihuahuas.push(chihuahua);
  res.json(chihuahuas);
};

const editChihuahua = (req, res) => {
  console.log(req.body);
  console.log(req.params.name);
  const { name, image, description } = req.body;
  const index = chihuahuas.findIndex(element => {
    return element.name === req.params.name;
  });
  console.log(index);

  if (name !== "") {
    chihuahuas[index].name = name;
  }
  if (image !== "") {
    chihuahuas[index].image = image;
  }
  if (description !== "") {
    chihuahuas[index].description = description;
  }

  res.json(chihuahuas);
};

const deleteChihuahua = (req, res) => {
  console.log(req.params.name);
  console.log(chihuahuas[0].name);
  for (let i = 0; i < chihuahuas.length; i++) {
    if (chihuahuas[i].name === req.params.name) {
      chihuahuas.splice(i, 1);
    }
  }

  res.json(chihuahuas);
};

module.exports = {
  getChihuahuas,
  postChihuahua,
  editChihuahua,
  deleteChihuahua
};
