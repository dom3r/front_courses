const helloFunction = (hi,name) => {
  console.log(hi + name);
};

helloFunction('Hi ', 'Hitla');

const helloFunctionNoArgument = () =>{
  console.log("Hello Mike");
};
helloFunctionNoArgument();

const helloFunctionReturn = (a =3,b=2) => a+b;

console.log(helloFunctionReturn(1));
console.log(helloFunctionReturn());

const checkInput = (resultHandler, ...arguments) =>{
  let hasEmptyText=false;
  for(const arg in arguments){
    if(!arg){
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText){
    resultHandler();
  }
}

checkInput( 
  () =>{
  console.log('All not empty!');
},
'Hello',
'12',
''
);