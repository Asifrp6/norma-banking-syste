// deposite
document.getElementById('deposite-btn').addEventListener('click',function(){
    const newdepositMoney=document.getElementById('deposite-input');
    const addmoney=newdepositMoney.value;
    const newaddmoney=parseFloat(addmoney);


    const privicedeposite= document.getElementById('deposit-text');
    const olddeposite=privicedeposite.innerText;
    const newolddeposite=parseFloat(olddeposite);

    const currentdeposite=newolddeposite + newaddmoney;
    privicedeposite.innerText=currentdeposite;

    // input field clear
    newdepositMoney.value ='';

    // balance add
   const balance= document.getElementById('balance-text');
   const blancetext=balance.innerText;
   const balancenum=parseFloat(blancetext);
   const newblance=balancenum+currentdeposite;
   balance.innerText=newblance;
   
})

// widthrow
document.getElementById('widhrow-btn').addEventListener('click',function(){
    const widhtowMoney=document.getElementById('widhrow-input');
    const removemoneytext=widhtowMoney.value;
    const removemoney=parseFloat(removemoneytext);
    
    const widthowotext= document.getElementById('widthrow-text');
    const newwidthowotext=widthowotext.innerText;
    const newwidhrow=parseFloat(newwidthowotext);
    
    const totalwidhroe=removemoney+newwidhrow;
    widthowotext.innerText=totalwidhroe;


    // input field clear
    widhtowMoney.value ='';

    // remove from balance
    const wbalance=document.getElementById('balance-text');
    const wbalancetext=wbalance.innerText;
    const wbalancenum=parseFloat(wbalancetext);
    const wnewbalnce=wbalancenum-removemoney;
    wbalance.innerText=wnewbalnce;
   
})