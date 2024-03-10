// Authors
let authors = [
    {
      id: 1,
      name: "John Doe",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 2,
      name: "Jane Smith",
      info: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 3,
      name: "Alice Johnson",
      info: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  ];
  
  // Categories
  let categories = [
    {
      id: 1,
      name: "Technology",
      info: "Articles related to technology and innovation."
    },
    {
      id: 2,
      name: "Science",
      info: "Articles related to scientific discoveries and research."
    },
    {
      id: 3,
      name: "Health",
      info: "Articles related to health and wellness."
    }
  ];
  
  // Articles
  let articles = [
    {
      id: 1,
      title: "Introduction to Artificial Intelligence",
      heading: "What is Artificial Intelligence?",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus varius lacus, id commodo dolor molestie vitae.",
      author_id: 1,
      date: "2024-03-11",
      category_id: 1
    },
    {
      id: 2,
      title: "The Latest Breakthrough in Quantum Computing",
      heading: "Exploring Quantum Computing",
      paragraph: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author_id: 2,
      date: "2024-03-10",
      category_id: 1
    },
    {
      id: 3,
      title: "Benefits of Meditation for Mental Health",
      heading: "The Power of Meditation",
      paragraph: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      author_id: 3,
      date: "2024-03-09",
      category_id: 3
    }
  ];
  
  export default {authors, articles, categories}