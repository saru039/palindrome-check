const checkButton = document.getElementById("check-btn");
checkButton.addEventListener("click", () => {
  const inputField = document.getElementById("text-input");
  const resultField = document.getElementById("result");
  const inputText = inputField.value;

  // Check if input is empty
  if (!inputText.trim()) {
    alert("Please input a value");
    return;
  }

  // Palindrome logic
  const cleanedText = inputText.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const isPalindrome = cleanedText === cleanedText.split("").reverse().join("");

  // Update result field
  resultField.textContent = `${inputText} is ${
    isPalindrome ? "a palindrome" : "not a palindrome"
  }`;
});
