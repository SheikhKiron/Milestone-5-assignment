function getId(id) {
  return document.getElementById(id);
}
//hearts clicks
let hearts = document.getElementsByClassName('fa-heart');
for (let heart of hearts) {
  heart.addEventListener('click', function () {
    let heartBtn = getId('heart-btn'); 
    let btn = Number(heartBtn.innerText);
    heartBtn.innerText = btn + 1;
  })
}

//call button
let time = new Date().toLocaleTimeString()
let calls = document.getElementsByClassName('call-btn');
for (let call of calls) {
  let serviceTitle = call.parentNode.parentNode.childNodes[3].innerText;
  let serviceTitleBangla = call.parentNode.parentNode.childNodes[1].innerText;
let serviceNumber = call.parentNode.parentNode.childNodes[5].innerText;
  call.addEventListener('click', function () {
    let coins = getId('call-coin');
    let coinsNumberConvert = Number(coins.innerText);
    if (coins.innerText >=20) {
      alert('📞 Callig ' + serviceTitle+' '+serviceNumber+'...')
      coins.innerText = coinsNumberConvert - 20;
          let div = document.createElement('div');
          div.innerHTML = `<div class="flex justify-between items-center mt-4 bg-[#fafafa] p-5 rounded-lg">
            <div>
              <h1 class="font-bold noto">${serviceTitleBangla}</h1>
              <p class="text-[#5C5C5C]">${serviceNumber}</p>
            </div>
            <h1 class="font-bold">${time}</h1>
          </div>
    `;
          getId('container').appendChild(div);
    }
    else {
      alert('❌ আপনার পর্যাপ্ত কয়েন নাই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।')
    }  

  })
}

// clear btn
getId('clear-btn').addEventListener('click', function () {
  getId('container').innerText = '';
})
//  copy button
let copyBtn = document.getElementsByClassName('copy-btn');
for (let copy of copyBtn) {
   let number = copy.parentNode.parentNode.childNodes[5].innerText;
   console.log(number);
  copy.addEventListener('click', function () {
     let countCopy = getId('copy');
    let countCopyNumber = Number(countCopy.innerText);
    countCopy.innerText = countCopyNumber + 1;
    navigator.clipboard.writeText(number);
    alert('নম্বর কপি হয়েছেঃ ' + number);
  })
}