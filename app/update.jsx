export const weights = [[1, 2, 3, 4],
                [2, 4, 3, 1],
                [3, 1, 4, 2]];

export const questions = [
    "Question 1?",
    "Question 2?",
    "Question 3?"
    // Add all your questions here
    ];

export const answers = [
    ["Answer 1A", "Answer 1B", "Answer 1C", "Answer 1D"],
    ["Answer 2A", "Answer 2B", "Answer 2C", "Answer 2D"],
    ["Answer 2A", "Answer 2B", "Answer 2C", "Answer 2D"],
    // Add corresponding answers here
  ];

var userAnswers = []

export const updateUserAnswers = (array) => {
    userAnswers = array
}

export const getUserAnswers = () => {
    return userAnswers;
}
