'use strict';

function csv2json(csv, opt){
  let lines = csv.split("\n");

  const headers = lines.shift().split(opt.separator).map( header => header.replace(/["\r]+/g, ''));

  let result = [];

  lines.forEach( line => {
    if (line == '') return;

    line = line.split(opt.separator).map( l => l.replace(/^"(.*)"$/, '$1').replace("\n", " ").replace(/(\"\")/g, '"'));

    result.push(headers.reduce( (tmp, header, index) => {
      tmp[header] = line[index];
      return tmp;
    }, {}));
  })

  return result;
}
