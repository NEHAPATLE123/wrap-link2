 let cl = console.log;
 
 let info = document.getElementById("info")

 cl(info.innerHTML.trim());

 let text = info.innerHTML.trim();

 // I daily visit https//:wertyui.com
 
 let arr = text.split(" ");
// cl(arr);

var result = '';

 for(let i=0; i < arr.length; i++){
	 cl(arr[i]);
	  if(arr[i].indexOf('http') > -1){                                            //  if(arr[i].indexOf('http') > -1){
		  result += ` <a href=" ${arr[i]} " target="_blank"> ${arr[i]} </a> `
	 }else{
		  result += arr[i] + ' '; 
	 };
 };

 info.innerHTML = result;



 let infostbody = document.getElementById("info-tect")
 cl(infostbody);
 cl(infostbody.innerHTML.trim());

 let text1 = infostbody.innerHTML.trim();
 
 let arr1 = text1.split(" ");
 // cl(arr1);

 var result1 = '';

 for (i =0; i<arr1.length; i++){
	cl(arr1[i]);
	if(arr1[i].indexOf("http") > -1){
		result1 += `<a href=" ${arr1[i]} " target="_blank"> ${arr1[i]} </a> `
	}else {
		result1 += arr1[i] + " ";
	}
};

 infostbody.innerHTML = result;
 
 
 let flower = document.getElementById("info-tect12");
 cl(flower);
 cl(flower.innerHTML.trim());
 
 let textin = flower.innerHTML.trim();
 
 let arra2 = textin.split(" ");
  cl(arra2);
 
 var result3 = '';
  
 for(let i=0; i<arra2.length; i++){
	 cl(arra2[i]);
	 if(arra2[i].indexOf("http") <-1){
		 result3 += `<a href=" ${arra2[i]} " terget="_blank"> ${arra2[i]} </a>`
	 }else{
		 result3 += arra2[i] + " ";
	 }
 };
 
 flower.innerHTML = result;
 
 
 
 
 
 
 
 
 
 
 
 
 
 