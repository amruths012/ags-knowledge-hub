const realNumbers = {
  id: "real-numbers",
  title: "Real Numbers",
  level: "10th Standard",
  subject: "Mathematics",

  overview:
    "Real Numbers is a fundamental chapter covering number systems, Euclid's division algorithm, HCF, LCM, prime factorisation, irrational numbers and decimal expansions.",

  learningGoals: [
    "Understand natural, whole, integer, rational, irrational and real numbers.",
    "Classify numbers correctly.",
    "Apply Euclid's division lemma.",
    "Use Euclid's algorithm to find HCF.",
    "Understand prime factorisation.",
    "Find HCF and LCM using prime factors.",
    "Understand irrational numbers.",
    "Determine whether a rational number has a terminating or recurring decimal expansion.",
    "Solve examination-level problems.",
  ],

  prerequisites: [
    "Basic arithmetic",
    "Factors and multiples",
    "Prime numbers",
    "Fractions",
    "Division",
    "Decimals",
    "Basic algebra",
  ],

  topics: [
    {
      id: "number-systems",
      title: "1. Number Systems",

      description:
        "Learn how different types of numbers are classified and related.",

      concepts: [
        {
          title: "Natural Numbers",
          explanation:
            "Natural numbers are the positive counting numbers.",
          rule: "1, 2, 3, 4, 5, ...",
          examples: [
            "1 is a natural number.",
            "25 is a natural number.",
            "100 is a natural number.",
          ],
        },

        {
          title: "Whole Numbers",
          explanation:
            "Whole numbers consist of zero and all natural numbers.",
          rule: "0, 1, 2, 3, 4, ...",
          examples: [
            "0 is a whole number.",
            "15 is a whole number.",
          ],
        },

        {
          title: "Integers",
          explanation:
            "Integers include negative numbers, zero and positive numbers.",
          examples: [
            "-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5",
          ],
        },

        {
          title: "Rational Numbers",
          explanation:
            "A rational number can be expressed in the form p/q, where p and q are integers and q is not zero.",
          rule: "p/q, where q ≠ 0",
          examples: [
            "3/5",
            "-7/2",
            "8 = 8/1",
            "0.25 = 1/4",
          ],
        },

        {
          title: "Irrational Numbers",
          explanation:
            "An irrational number cannot be expressed as p/q. Its decimal expansion is non-terminating and non-repeating.",
          examples: [
            "√2",
            "√3",
            "√5",
            "π",
          ],
        },

        {
          title: "Real Numbers",
          explanation:
            "Real numbers consist of both rational and irrational numbers.",
          rule:
            "Real Numbers = Rational Numbers + Irrational Numbers",
          examples: [
            "-5",
            "2/3",
            "√7",
            "π",
          ],
        },

        {
          title: "Number Classification",
          explanation:
            "Natural numbers are contained in whole numbers. Whole numbers are contained in integers. Integers are contained in rational numbers. Rational and irrational numbers together form real numbers.",
          examples: [
            "5 is natural, whole, integer, rational and real.",
            "-3 is an integer, rational and real number.",
            "√2 is irrational and real.",
          ],
        },
      ],

      examples: [
        {
          question: "Is -7 a rational number?",
          solution:
            "Yes. -7 can be written as -7/1, so it is rational.",
        },

        {
          question: "Is √2 rational?",
          solution:
            "No. √2 cannot be expressed as p/q using integers p and q. Therefore it is irrational.",
        },
      ],

      practice: [
        {
          question: "Which number is irrational?",
          options: ["4", "3/7", "√5", "0.75"],
          answer: "√5",
        },
      ],
    },

    {
      id: "euclid-division-lemma",
      title: "2. Euclid's Division Lemma",

      description:
        "Understand the division relationship between two positive integers.",

      concepts: [
        {
          title: "Euclid's Division Lemma",
          explanation:
            "For positive integers a and b, there exist unique integers q and r such that a = bq + r, where 0 ≤ r < b.",
          rule: "a = bq + r",
          examples: [
            "17 = 5 × 3 + 2",
            "23 = 7 × 3 + 2",
          ],
        },

        {
          title: "Meaning of the Symbols",
          explanation:
            "In a = bq + r, a is the dividend, b is the divisor, q is the quotient and r is the remainder.",
          examples: [
            "For 17 = 5 × 3 + 2, the dividend is 17, divisor is 5, quotient is 3 and remainder is 2.",
          ],
        },

        {
          title: "Remainder Condition",
          explanation:
            "The remainder must always be greater than or equal to zero and smaller than the divisor.",
          rule: "0 ≤ r < b",
          examples: [
            "If the divisor is 6, the remainder can be 0, 1, 2, 3, 4 or 5.",
          ],
        },
      ],

      examples: [
        {
          question:
            "Express 35 in the form a = bq + r when b = 6.",
          solution:
            "35 = 6 × 5 + 5. Therefore q = 5 and r = 5.",
        },
      ],

      practice: [
        {
          question:
            "In 29 = 7 × 4 + 1, what is the remainder?",
          options: ["7", "4", "1", "29"],
          answer: "1",
        },
      ],
    },

    {
      id: "euclid-algorithm",
      title: "3. Euclid's Division Algorithm",

      description:
        "Use repeated division to calculate the HCF of two positive integers.",

      concepts: [
        {
          title: "Finding HCF",
          explanation:
            "Divide the larger number by the smaller number. Continue dividing the previous divisor by the remainder until the remainder becomes zero. The last non-zero remainder is the HCF.",
          steps: [
            "Divide the larger number by the smaller number.",
            "Use the remainder as the next divisor.",
            "Continue the division.",
            "Stop when the remainder becomes zero.",
            "The last non-zero remainder is the HCF.",
          ],
          examples: [
            "48 = 18 × 2 + 12",
            "18 = 12 × 1 + 6",
            "12 = 6 × 2 + 0",
            "Therefore HCF = 6.",
          ],
        },
      ],

      examples: [
        {
          question: "Find the HCF of 135 and 225.",
          solution:
            "225 = 135 × 1 + 90. 135 = 90 × 1 + 45. 90 = 45 × 2 + 0. Therefore HCF = 45.",
        },
      ],

      practice: [
        {
          question:
            "The last non-zero remainder in Euclid's algorithm gives:",
          options: ["LCM", "HCF", "Product", "Quotient"],
          answer: "HCF",
        },
      ],
    },

    {
      id: "prime-factorisation",
      title: "4. Fundamental Theorem of Arithmetic",

      description:
        "Understand prime factorisation and its uniqueness.",

      concepts: [
        {
          title: "Prime Factorisation",
          explanation:
            "A composite number can be expressed as a product of prime numbers. This factorisation is unique apart from the order of the factors.",
          examples: [
            "60 = 2 × 2 × 3 × 5",
            "84 = 2 × 2 × 3 × 7",
            "180 = 2² × 3² × 5",
          ],
        },

        {
          title: "Prime Numbers",
          explanation:
            "A prime number has exactly two positive factors: 1 and itself.",
          examples: [
            "2, 3, 5, 7, 11, 13",
          ],
        },

        {
          title: "Composite Numbers",
          explanation:
            "A composite number has more than two positive factors.",
          examples: [
            "4, 6, 8, 9, 10, 12",
          ],
        },
      ],

      examples: [
        {
          question:
            "Find the prime factorisation of 72.",
          solution:
            "72 = 2 × 36 = 2 × 2 × 18 = 2 × 2 × 2 × 9 = 2³ × 3².",
        },
      ],

      practice: [
        {
          question:
            "Which is the prime factorisation of 30?",
          options: [
            "2 × 15",
            "3 × 10",
            "2 × 3 × 5",
            "5 × 6",
          ],
          answer: "2 × 3 × 5",
        },
      ],
    },

    {
      id: "hcf-lcm",
      title: "5. HCF and LCM",

      description:
        "Find HCF and LCM using prime factorisation.",

      concepts: [
        {
          title: "HCF",
          explanation:
            "HCF is the greatest positive integer that divides each given number exactly.",
          examples: [
            "HCF(12, 18) = 6",
          ],
        },

        {
          title: "LCM",
          explanation:
            "LCM is the smallest positive integer divisible by each of the given numbers.",
          examples: [
            "LCM(4, 6) = 12",
          ],
        },

        {
          title: "Using Prime Factors",
          explanation:
            "For HCF, use common prime factors with minimum powers. For LCM, use all prime factors with maximum powers.",
          examples: [
            "12 = 2² × 3",
            "18 = 2 × 3²",
            "HCF = 2 × 3 = 6",
            "LCM = 2² × 3² = 36",
          ],
        },

        {
          title: "HCF and LCM Relationship",
          explanation:
            "For two positive integers, the product of their HCF and LCM equals the product of the two numbers.",
          rule:
            "HCF(a,b) × LCM(a,b) = a × b",
        },
      ],

      examples: [
        {
          question:
            "Find HCF and LCM of 36 and 48.",
          solution:
            "36 = 2² × 3² and 48 = 2⁴ × 3. HCF = 12 and LCM = 144.",
        },
      ],

      practice: [
        {
          question: "Find the HCF of 12 and 18.",
          options: ["2", "3", "6", "12"],
          answer: "6",
        },
      ],
    },

    {
      id: "irrational-numbers",
      title: "6. Irrational Numbers",

      description:
        "Understand irrational numbers and their decimal representations.",

      concepts: [
        {
          title: "Definition",
          explanation:
            "An irrational number cannot be expressed in the form p/q where p and q are integers and q is not zero.",
          examples: [
            "√2",
            "√3",
            "√5",
            "π",
          ],
        },

        {
          title: "Decimal Representation",
          explanation:
            "The decimal expansion of an irrational number is non-terminating and non-repeating.",
          examples: [
            "√2 ≈ 1.4142135...",
            "π ≈ 3.1415926...",
          ],
        },

        {
          title: "Square Roots",
          explanation:
            "The square root of a positive integer that is not a perfect square is irrational.",
          examples: [
            "√2 is irrational.",
            "√7 is irrational.",
            "√9 = 3 is rational.",
          ],
        },
      ],

      examples: [
        {
          question: "Is √9 irrational?",
          solution:
            "No. √9 = 3, and 3 is rational.",
        },
      ],

      practice: [
        {
          question: "Which is irrational?",
          options: ["√4", "√9", "√16", "√7"],
          answer: "√7",
        },
      ],
    },

    {
      id: "decimal-expansion",
      title: "7. Decimal Expansion of Rational Numbers",

      description:
        "Determine whether a rational number has a terminating or non-terminating recurring decimal expansion.",

      concepts: [
        {
          title: "Terminating Decimal",
          explanation:
            "A terminating decimal ends after a finite number of digits.",
          examples: [
            "1/2 = 0.5",
            "3/4 = 0.75",
            "7/8 = 0.875",
          ],
        },

        {
          title: "Non-Terminating Recurring Decimal",
          explanation:
            "A recurring decimal continues indefinitely while repeating a pattern.",
          examples: [
            "1/3 = 0.333...",
            "2/11 = 0.181818...",
          ],
        },

        {
          title: "Condition for Termination",
          explanation:
            "When a rational number is in lowest terms, its decimal expansion terminates if the denominator has no prime factors other than 2 and 5.",
          rule:
            "Denominator = 2^m × 5^n",
          examples: [
            "3/8 terminates because 8 = 2³.",
            "7/20 terminates because 20 = 2² × 5.",
          ],
        },

        {
          title: "Condition for Recurring Decimal",
          explanation:
            "If the denominator in lowest terms contains a prime factor other than 2 or 5, the decimal expansion is non-terminating recurring.",
          examples: [
            "1/3 is recurring.",
            "5/6 is recurring because 6 contains factor 3.",
          ],
        },
      ],

      examples: [
        {
          question:
            "Does 7/40 have a terminating decimal expansion?",
          solution:
            "40 = 2³ × 5. Since the denominator contains only 2 and 5, the decimal terminates.",
        },

        {
          question:
            "Does 5/12 have a terminating decimal expansion?",
          solution:
            "12 = 2² × 3. Since 3 is present, the decimal is non-terminating recurring.",
        },
      ],

      practice: [
        {
          question:
            "Which fraction has a terminating decimal?",
          options: ["1/3", "2/7", "3/8", "5/9"],
          answer: "3/8",
        },
      ],
    },

    {
      id: "exam-problems",
      title: "8. Examination Problems",

      description:
        "Apply the complete chapter concepts to examination-style problems.",

      concepts: [
        {
          title: "Problem-Solving Strategy",
          explanation:
            "Identify the concept, write the relevant formula or theorem, substitute carefully, show the calculation and write the final answer clearly.",
          steps: [
            "Read the question carefully.",
            "Identify the concept.",
            "Write the formula or theorem.",
            "Substitute the values.",
            "Calculate carefully.",
            "Check the answer.",
          ],
        },
      ],

      examples: [
        {
          question:
            "Find the HCF of 867 and 255 using Euclid's algorithm.",
          solution:
            "867 = 255 × 3 + 102. 255 = 102 × 2 + 51. 102 = 51 × 2 + 0. Therefore HCF = 51.",
        },

        {
          question:
            "Determine whether 13/125 has a terminating decimal expansion.",
          solution:
            "125 = 5³. The denominator contains only the prime factor 5, so the decimal expansion terminates.",
        },
      ],

      practice: [
        {
          question:
            "If HCF(12,18) = 6 and LCM(12,18) = 36, what is their product?",
          options: ["36", "72", "216", "432"],
          answer: "216",
        },
      ],
    },
  ],

  revision: [
    "Natural numbers start from 1.",
    "Whole numbers contain zero and natural numbers.",
    "Integers include negative numbers, zero and positive numbers.",
    "Every integer is rational.",
    "Rational and irrational numbers together form real numbers.",
    "A rational number can be written as p/q where q ≠ 0.",
    "Euclid's division lemma is a = bq + r.",
    "The remainder satisfies 0 ≤ r < b.",
    "The last non-zero remainder gives the HCF.",
    "Prime factorisation is unique apart from order.",
    "HCF uses minimum powers of common prime factors.",
    "LCM uses maximum powers of all prime factors.",
    "HCF × LCM = product of two positive integers.",
    "A denominator containing only 2 and 5 gives a terminating decimal.",
    "A denominator containing another prime factor gives a recurring decimal.",
  ],

  examTips: [
    "Memorise a = bq + r and 0 ≤ r < b.",
    "Practise Euclid's algorithm step by step.",
    "Reduce fractions to lowest terms before checking decimal expansion.",
    "Use minimum powers for HCF.",
    "Use maximum powers for LCM.",
    "Do not confuse terminating and recurring decimals.",
    "Show complete working in numerical problems.",
    "Check calculations before submitting.",
  ],

  commonMistakes: [
    "Thinking zero is not a whole number.",
    "Thinking every non-terminating decimal is irrational.",
    "Forgetting to reduce a fraction before checking its decimal expansion.",
    "Using maximum powers for HCF.",
    "Using minimum powers for LCM.",
    "Writing a remainder greater than or equal to the divisor.",
    "Confusing HCF and LCM.",
    "Skipping steps in Euclid's algorithm.",
  ],

  test: [
    {
      question:
        "Which of the following is irrational?",
      options: ["4", "9/2", "√7", "0.25"],
      answer: "√7",
    },

    {
      question:
        "What is the condition on the remainder in Euclid's division lemma?",
      options: [
        "r > b",
        "r = b",
        "0 ≤ r < b",
        "r < 0",
      ],
      answer: "0 ≤ r < b",
    },

    {
      question:
        "What is the HCF of 36 and 48?",
      options: ["6", "8", "12", "18"],
      answer: "12",
    },

    {
      question:
        "Which is the prime factorisation of 60?",
      options: [
        "2 × 30",
        "2² × 3 × 5",
        "3 × 20",
        "5 × 12",
      ],
      answer: "2² × 3 × 5",
    },

    {
      question:
        "Which denominator gives a terminating decimal when the fraction is in lowest terms?",
      options: ["3", "7", "11", "40"],
      answer: "40",
    },

    {
      question:
        "What is the LCM of 4 and 6?",
      options: ["8", "10", "12", "24"],
      answer: "12",
    },

    {
      question:
        "Which number is both rational and real?",
      options: ["√2", "π", "3/5", "√7"],
      answer: "3/5",
    },

    {
      question:
        "What is the last non-zero remainder in Euclid's algorithm?",
      options: [
        "LCM",
        "HCF",
        "Product",
        "Quotient",
      ],
      answer: "HCF",
    },

    {
      question:
        "Which fraction has a terminating decimal expansion?",
      options: ["1/3", "2/7", "7/20", "5/9"],
      answer: "7/20",
    },

    {
      question:
        "What is HCF(18, 24)?",
      options: ["3", "6", "9", "12"],
      answer: "6",
    },
  ],

  sources: [
    {
      title: "NCERT Mathematics",
      url: "",
      note:
        "Use the official textbook and syllabus as a primary reference for school-level mathematics content.",
    },

    {
      title: "Karnataka State Board Resources",
      url: "",
      note:
        "Karnataka-specific curriculum resources will be connected here as verified sources are added.",
    },
  ],
};

export default realNumbers;
