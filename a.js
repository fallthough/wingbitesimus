const escpos = require('escpos');
 
// Select the adapter based on your printer type
const device  = new escpos.USB();
// const device  = new escpos.Network('localhost');
// const device  = new escpos.Serial('/dev/usb/lp0');
 
const options = { encoding: "GB18030" /* default */ }
// encoding is optional
 
const printer = new escpos.Printer(device, options);
 
 module.exports.print = (d, text1, text2,text3, text4) => {
   console.log('Printing');
    device.open(function(){
      printer
      .font('a')
      .align('ct')
      .style('bu')
      .size(1, 1)
      .text('SALES ORDER')
      .text('')
      .align('rt')
      .text(d)
      .text('')
      .align('lt')
      .text(text1)
      .text(text2)
      .text(text3)
      .text(text4)
      .cashdraw(5)
      .cut()
      .close()
    });

    return;
 }
 
