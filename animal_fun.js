const fs = require('fs');


// fs.readFile('./animals.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     data = data.split('\n');
//     console.log(process.argv[2]);
//     arr = data.filter((word) => {
//       if (word[0] === process.argv[2]){
//         return word;
//       }
//     });
//       console.log(arr);
//       fs.writeFile(`${process.argv[2]}_animals.txt`, `${arr.join('\n')}`, error => {
//         if (error) {
//           console.log(error);
//         } else {
//           console.log("file successfully written!");
//         }
//       });
//   }
// });
const querystring = require('querystring');
const http = require('http');

const server = http.createServer((req, res) => {
  let arr;
  let result;
  let letter = querystring.parse()
  console.log(res);
  fs.readFile('./animals.txt', 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    }
    else if (letter ===''){
        arr = data.split('\n')
    }
    else {
      data = data.split('\n');
      arr = data.filter((word) => {
        if (word[0] === letter){
          return word;
        }
      });
    }
    result = arr.join('\n')
  });
  res.write(`${result}`);
  res.end();
});

server.listen(8000, () => console.log("I'm listening on port 8000!"));
