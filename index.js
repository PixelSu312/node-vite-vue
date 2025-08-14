
function sleep(s) {
  return new Promise(resolve => setTimeout(resolve, s));
}

async function run() {
  // const div = document.createElement('div');
  // div.style.height = '100px';
  // div.style.width = '100px';
  // div.style.backgroundColor = 'green';
  await sleep(3000);
  console.log('yellow');
  // div.style.backgroundColor = 'yellow';
  await sleep(1000);
  console.log('red');
  // div.style.backgroundColor = 'red';
  await sleep(2000);
  console.log('green');
  run()
}
// run()
//


function testTryCatch() {
  try {
    console.log('try');
    return 1
  } catch (e) {
    console.log('catch');
    return 2
  }finally {
    console.log('finally');
    return 3
  }
}

const res = testTryCatch();
console.log(res);
