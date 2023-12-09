const Book = require("../model/bookOfTheWeek");

async function getNewArrivals() {
  try {
    const endDate = new Date(); // Today's date
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - 90); // 90 days before today

    const newArrivals = await Book.find({
      publishedDate: {
        $gte: startDate,
        $lte: endDate,
      },
    })
      .sort({ viewCount: -1 })
      .exec();

    return newArrivals;
  } catch (error) {
    throw error;
  }
}

async function getTrending() {
  try {
    // Replace 10 with the number of trending books you want to retrieve
    const trendingBooks = await Book.find()
      .sort({ viewCount: -1 }) // Sort by viewCount in descending order
      .limit(12) // Limit the results to the top 10 trending books
      .exec();

    return trendingBooks;
  } catch (error) {
    throw error;
  }
}

async function getLanguage(selectedLanguage) {
  try {
    // Use Mongoose to query the database based on the selected language
    const books = await Book.find({ language: selectedLanguage }).exec();
    return books;
  } catch (error) {
    throw error;
  }
}

async function getSelectedGenre(selectedGenre) {
  try {
    // Use Mongoose to query the database based on the selected language
    const books = await Book.find({ genre: { $in: [selectedGenre] } }).exec();
    return books;
  } catch (error) {
    throw error;
  }
}

getTopPicksOfTheMonth = async () => {
  try {
    const topPicks = await Book.find({ isTopPick: true }); // Adjust the limit as needed
    return topPicks;
  } catch (err) {
    throw new Error("Error fetching top picks of the month");
  }
};

// Add more service functions for other categories

module.exports = {
  getNewArrivals,
  getTrending,
  getLanguage,
  getSelectedGenre,
  getTopPicksOfTheMonth,
  // Add more service functions here
};
