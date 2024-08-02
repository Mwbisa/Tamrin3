const fullName="Mobina Abdollahi";

const space=fullName.indexOf(" ");
const firstName=fullName.slice(0,space);
console.log("Firstname : "+firstName)

const del=fullName.replace(firstName,"Lastname :");
console.log(del)
