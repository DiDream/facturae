'use strict';
if (!rawTemplate) {
  throw 'El template no ha sido encontrado';
}

const linesTemplate = rawTemplate.split("\n");
const keysTemplate = (function parseTemplate(lines){
  let keys = {};
  lines.forEach( (line, lineNumber) => {
    let key = line.match(/\[(\w+)\]/);
    if (key) {
      key = key[1]; // quedarse con el nombre

      (keys[key])? keys[key].push(lineNumber) : keys[key] = [lineNumber];

      /*
      // para el caso de no haber claves repetidas...
      keys[key] = lineNumber;
      */

    }
  });
  return keys;
})(linesTemplate);
console.log('CLAVES ENCONTRADAS', keysTemplate);

const $separator = $('#separator');

$('#uploader-input').on('change', function(){
  const file = this.files[0];

  if (file){
    let r = new FileReader();

    r.onload = function(e){
      const csv = e.target.result;
      const separator = $separator.val() != ''? $separator.val() : ',';
      try {
        const invoicesInfo = csv2json(csv, { separator })

        let zip = new JSZip();
        invoicesInfo.forEach( (invoiceInfo, invoiceNumber) => {
          let invoice = [...linesTemplate];

          Object.keys(invoiceInfo).forEach(key => {
            if (keysTemplate[key]) {
              let lines = keysTemplate[key];
              lines.forEach(line => {
                invoice[line] = invoice[line].replace(`[${key}]`, invoiceInfo[key]);
              })
            }
          })


          zip.file(`facturae_${invoiceNumber+1}.xml`, invoice.join("\n"));
        });

        /* DESCARGAR EL ZIP */
        zip.generateAsync({
          type: "blob"
        }).then(function(blob) {

          // LIBRERÍA FileSaver.js
          saveAs(blob, "facturas.zip");
        }, function(err) {
          console.log('error al crear la descarga.');
        });

      }
      catch(err) {
        console.error('HA OCURRIDO UN ERROR AL PROCESAR EL FICHERO');
        console.error(err);
      }
    }
    r.readAsText(file);
  }
});
