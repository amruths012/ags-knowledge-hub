const knowledge = {
  categories: [
    {
      id: "education",
      name: "Education",
      icon: "📚",
      description:
        "Structured learning for school, college and competitive exams.",

      levels: [
        {
          id: "10th-standard",
          name: "10th Standard",

          subjects: [
            {
              id: "mathematics",
              name: "Mathematics",

              chapters: [
                {
                  id: "real-numbers",
                  name: "Real Numbers",
                  status: "active",
                  lastUpdated: "2026-08-21",
                },
              ],
            },
          ],
        },
      ],
    },

    {
      id: "government-exams",
      name: "Government Exams",
      icon: "🏛️",
      description:
        "Current preparation material, notifications and exam resources.",

      exams: [],
    },

    {
      id: "careers",
      name: "Careers",
      icon: "💼",
      description:
        "Skills, jobs, career paths and industry knowledge.",

      topics: [],
    },

    {
      id: "technology",
      name: "Technology",
      icon: "💻",
      description:
        "Technology, software, AI and emerging developments.",

      topics: [],
    },

    {
      id: "world",
      name: "World",
      icon: "🌍",
      description:
        "Important developments, discoveries and knowledge from around the world.",

      topics: [],
    },
  ],
};

module.exports = knowledge;
