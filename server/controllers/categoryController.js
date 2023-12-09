const categoryService = require("../services/categoryService");

async function getNewArrivals(req, res) {
  try {
    const newArrivals = await categoryService.getNewArrivals();
    res.status(200).json(newArrivals);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getTrending(req, res) {
  try {
    const trending = await categoryService.getTrending();
    res.status(200).json(trending);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getLanguage(req, res) {
  const { language } = req.query;

  try {
    const book = await categoryService.getLanguage(language);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getSelectedGenre(req, res) {
  const { selectedGenre } = req.query;
  try {
    const genre = await categoryService.getSelectedGenre(selectedGenre);
    res.status(200).json(genre);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

getTopPicksOfTheMonth = async (req, res) => {
  try {
    const topPicks = await categoryService.getTopPicksOfTheMonth();
    res.json(topPicks);
  } catch (err) {
    res.status(500).json({ error: "Error fetching top picks of the month" });
  }
};

module.exports = {
  getNewArrivals,
  getTrending,
  getLanguage,
  getSelectedGenre,
  getTopPicksOfTheMonth,
};
