let newStr = "";
for (i = str.length - 1; i >= 0; i--) {
  newStr += str[i];
}
if (newStr == str) {
  console.log("Yes");
} else {
  console.log("No");
}
