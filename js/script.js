"use strict";

let cookieSales =document.getElementById('cookieSales');

let wrokingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

function CookieStand (location, avgCookiesCustomer, max, min){

    this.location=location;
    this.costumerHour=0;
    this.avgCookiesCustomer=avgCookiesCustomer;
    this.finalRes=[];
    this.max=max;
    this.min=min;
    this.total=0;
    
    };

    CookieStand.prototype.getCustomer= function () {
        this.costumerHour = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        console.log(this.costumerHour)
        return this.costumerHour;
    };
    

    CookieStand.prototype.cookieHour=  function () {
        for (let i = 0; i < wrokingHours.length; i++) {
            let cookieHourNo = Math.floor(this.avgCookiesCustomer * this.getCustomer());
            console.log(cookieHourNo);
            this.finalRes.push(cookieHourNo);
            console.log(this.finalRes);
            this.total+=cookieHourNo;
            console.log(this.total);
            
         }  return this.finalRes;
    }
    
    CookieStand.prototype.render=function(){

        let divElement=document.createElement('div');
        cookieSales.appendChild(divElement)

        let tableEle= document.createElement('table');
        cookieSales.appendChild(tableEle);

        let tr1=document.createElement('tr');
        tableEle.appendChild(tr1);

        let th0=document.createElement('th');
        th0.textContent=`Location`;
        tr1.appendChild(th0);
        
        for (let i=0; i<wrokingHours.length;i++){
        let th1=document.createElement('th');
        th1.textContent=`${wrokingHours[i]}`;
        tr1.appendChild(th1);
          }
        let th3=document.createElement('th');
        th3.textContent=`Daily Location Total`;
        tr1.appendChild(th3);
        

        let tr2=document.createElement('tr');
        tableEle.appendChild(tr2);

        let th2=document.createElement('th');
            th2.textContent=`${this.location}`;
            tr2.appendChild(th2);
        
        for (let i=0; i<wrokingHours.length;i++){
            let td2=document.createElement('td');
            td2.textContent=`${this.finalRes[i]}`;
            tr2.appendChild(td2)
           
    
        }
        let td3=document.createElement('td');
        td3.textContent= `${this.total}`;
        tr2.appendChild(td3);
    }



let seattle=new CookieStand ('Seattle', 6.3, 65,23);
seattle.getCustomer();
seattle.cookieHour();
seattle.render();
let tokyo=new CookieStand ('Tokyo', 1.2, 24,3);
tokyo.getCustomer();
tokyo.cookieHour();
tokyo.render();
let dubai=new CookieStand ('Dubai', 3.7, 38,11);
dubai.getCustomer();
dubai.cookieHour();
dubai.render();
let paris=new CookieStand ('paris', 2.3, 38,20);
paris.getCustomer();
paris.cookieHour();
paris.render();
let lima=new CookieStand ('Lima', 4.6, 16,2);
lima.getCustomer();
lima.cookieHour();
lima.render();
