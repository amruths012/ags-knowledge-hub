const realNumbers = {
  id: "real-numbers",
  title: "Real Numbers",
  level: "10th Standard",
  subject: "Mathematics",

  overview:
    "Real Numbers is a foundational chapter covering number systems, Euclid's division algorithm, HCF, LCM, prime factorisation, irrational numbers and decimal expansions.",

  learningGoals: [
    "Understand different types of numbers.",
    "Classify numbers as rational or irrational.",
    "Apply Euclid's division algorithm.",
    "Find HCF and LCM using different methods.",
    "Understand prime factorisation.",
    "Identify terminating and non-terminating decimal expansions.",
    "Solve examination-level problems confidently."
  ],

  prerequisites: [
    "Basic arithmetic",
    "Fractions and decimals",
    "Factors and multiples",
    "Basic division"
  ],

  topics: [
    {
      id: "number-systems",
      title: "Number Systems",
      description:
        "Understand natural numbers, whole numbers, integers, rational numbers, irrational numbers and real numbers.",

      concepts: [
        {
          title: "Rational Numbers",
          explanation:
            "A rational number can be written in the form p/q, where p and q are integers and q is not zero.",

          formula:
            "p/q, where p, q ∈ Z and q ≠ 0",

          examples: [
            "1/2 is rational.",
            "5 is rational because 5 = 5/1.",
            "-3/7 is rational."
          ]
        },

        {
          title: "Irrational Numbers",
          explanation:
            "An irrational number cannot be expressed as p/q where p and q are integers and q is not zero.",

          examples: [
            "√2 is irrational.",
            "√3 is irrational.",
            "π is irrational."
          ]
        },

        {
          title: "Real Numbers",
          explanation:
            "Real numbers consist of both rational and irrational numbers."
        }
      ]
    },

    {
      id: "euclid",
      title: "Euclid's Division Algorithm",
      description:
        "Learn how Euclid's division algorithm is used to find the HCF of two positive integers.",

      concepts: [
        {
          title: "Euclid's Division Lemma",
          explanation:
            "For positive integers a and b, there exist unique integers q and r such that a = bq + r, where 0 ≤ r < b.",

          formula:
            "a = bq + r",

          steps: [
            "Divide the larger number by the smaller number.",
            "Use the remainder as the new divisor.",
            "Continue the division process.",
            "The last non-zero remainder is the HCF."
          ]
        }
      ]
    },

    {
      id: "prime-factorisation",
      title: "Fundamental Theorem of Arithmetic",
      description:
        "Understand prime factorisation and its applications to HCF and LCM.",

      concepts: [
        {
          title: "Prime Factorisation",
          explanation:
            "Every composite number can be expressed as a product of prime numbers in a unique way, apart from the order of the factors.",

          examples: [
            "60 = 2 × 2 × 3 × 5",
            "84 = 2 × 2 × 3 × 7"
          ]
        }
      ]
    },

    {
      id: "decimal-expansion",
      title: "Decimal Expansions",
      description:
        "Determine whether the decimal expansion of a rational number terminates or continues indefinitely.",

      concepts: [
        {
          title: "Terminating Decimal",
          explanation:
            "A rational number has a terminating decimal expansion when, in lowest form, its denominator has no prime factors other than 2 and 5."
        },

        {
          title: "Non-Terminating Recurring Decimal",
          explanation:
            "If the denominator in lowest form contains a prime factor other than 2 or 5, the decimal expansion is non-terminating recurring."
        }
      ]
    }
  ],

  revision: [
    "Remember the difference between rational and irrational numbers.",
    "Use Euclid's algorithm systematically to find HCF.",
    "Prime factorisation is useful for finding HCF and LCM.",
    "Check the denominator in lowest form to determine decimal expansion."
  ],

  examTips: [
    "Write every step clearly in Euclid's algorithm questions.",
    "Always reduce fractions to lowest form before checking decimal expansion.",
    "Memorise the condition for terminating decimals.",
    "Show prime factorisation clearly in HCF and LCM problems."
  ],

  commonMistakes: [
    "Forgetting that the denominator cannot be zero.",
    "Calling every non-terminating decimal irrational.",
    "Checking decimal expansion before reducing the fraction.",
    "Stopping Euclid's algorithm before reaching the last non-zero remainder."
  ],

  test: [],

  sources: [
    {
      title: "NCERT Mathematics",
      note: "Reference textbook material for the Real Numbers chapter.",
      url: "https://ncert.nic.in/"
    }
  ]
};

module.exports = realNumbers;
