const ageInDays = () => {
  const birthYear = prompt("What year you born... Good friend?");
  const result = (2018 - birthYear) * 365;
  const h1 = document.createElement('h1')
  const textAnswer = document.createTextNode('You are ' + result + ' days old.')
  h1.setAttribute('id', 'ageInDays');
  h1.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h1);
  console.log(result);
}

const reset = () => {
  document.getElementById('flex-box-result').innerHTML = ""
  //OR
  // document.getElementById('ageInDays').remove();
}
