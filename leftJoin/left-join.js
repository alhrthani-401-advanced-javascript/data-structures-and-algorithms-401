'use strict';


function LeftJoin(ht1,ht2){
  console.log(ht1.entries);
  console.log(ht1.entries);

  ht1.entries.forEach(item=>{
    let key =Object.keys(item.head.value)[0];
    let value=item.head.value[key];
    let secondValue=ht2.get(key)==='Key not found' ? null : ht2.get(key);
    ht1.update(key,[value,secondValue])
  })
  return ht1;
}

module.exports=LeftJoin;




