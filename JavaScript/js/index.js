"use strict";

// Task 1 - 3

let progress = document.querySelector('.progress');
let progressBar = document.querySelector('.progress-bar');
let alert = document.querySelector('.alert');
let width = parseFloat(getComputedStyle(progressBar).width);
let button = document.querySelector('.btn');
let warning = document.querySelector('.warning');
let sendInterval;
button.onclick = function()
{
    sendInterval = setInterval(() =>
    {
        proccess();
    }, 200)

    progress.onmouseout = function()
    {
        proccess();
        warning.classList.add('d-none');
        sendInterval = setInterval(() =>
        {
            proccess();
        }, 200)
    }
    progress.onmouseover = function()
    {
        clearInterval(sendInterval);
        warning.classList.remove('d-none');
    }
    progress.onclick = function()
    {
        progress.onmouseout = function()
        {
            clearInterval(sendInterval);
            warning.classList.add('d-none');
        }
    }
    function proccess()
    {
        width = width + 1;
        if(width === 100)
        {
            clearInterval(sendInterval);
            progress.style.opacity = 0;
            alert.classList.remove('d-none');
            button.classList.add('d-none');
        }
        progressBar.style.width = width + '%';
        progressBar.innerHTML = width + '%';
    }
}

// Task 4

let index = 0;
const sliderMain = document.querySelector('.slider-main');
const lentaLi = document.querySelectorAll('.lenta li');
const lenta = document.querySelector('.lenta');
const icon = document.querySelector('.fa-times-circle');

    [...document.querySelectorAll('.slider-list li')].map((li, ind) =>
        {
            li.onclick = function()
            {
              index = ind;
                slide();
                sliderMain.classList.remove('d-none');
                document.querySelector('.slider-list').classList.add('d-none');

                icon.onclick = function()
                {
                    sliderMain.classList.add('d-none');
                    document.querySelector('.slider-list').classList.remove('d-none');
                };

                [...document.querySelectorAll('.arrow')].forEach(arr => 
                    {
                        arr.onclick = function()
                        {
                            
                            if(this.classList.contains('arrow-left'))
                            {
                                slideLeft();
                            }
                            else
                            {
                                slideRight();
                            }
                           
                        }
                        
                    })
            }
        })

function slide()
{
    lenta.style.left = -1110 * index + 'px';
}
function slideLeft()
{
    index--;
    if(index < 0)
    {
        index = lentaLi.length - 1;
    }
    slide();
}
function slideRight()
{
    index++;
    if(index === lentaLi.length)
    {
        index = 0;
    }
    slide();
}
let slideInterval = setInterval(() =>
{
slideRight();
}, 2000)

document.querySelector('.window').onmouseover = function()
{
    clearInterval(slideInterval);
}
document.querySelector('.window').onmouseout = function()
{
    slideInterval = setInterval(() =>
    {   
        slideRight();
    }, 2000)
}

// Task 5

const btn = document.querySelector('.send');
btn.onclick = function()
{
   const ad = document.querySelector('#ad').value.trim();
   const soyad = document.querySelector('#soyad').value.trim();
   const email = document.querySelector('#email').value.trim();
   const parol = document.querySelector('#parol').value.trim();
   const adAlert = document.querySelector('.ad-alert');
   const soyadAlert = document.querySelector('.soyad-alert');
   const emailAlert = document.querySelector('.email-alert');
   const parolAlert = document.querySelector('.parol-alert');
   if(ad === '')
    {
       adAlert.innerHTML += 'Boş buraxıla bilməz !';
       adAlert.classList.remove('d-none');
    }
    else if(ad.length < 3)
    {
       adAlert.innerHTML += 'Minimum 3 hərfli olmalıdır !';
       adAlert.classList.remove('d-none');
    }
    if(soyad === '')
    {
       soyadAlert.innerHTML += 'Boş buraxıla bilməz !';
       soyadAlert.classList.remove('d-none');
    }
    else if(soyad.length < 3)
    {
       soyadAlert.innerHTML += 'Minimum 3 hərfli olmalıdır !';
       soyadAlert.classList.remove('d-none');
    }
    if(email === '')
    {
       emailAlert.innerHTML += 'Boş buraxıla bilməz !';
       emailAlert.classList.remove('d-none');
    }
    else if(email.indexOf('@') === -1 || email.indexOf('.') === -1 
    || email.indexOf('@') === 0 || email.indexOf('.') === 0
    || email.lastIndexOf('@') === email.length-1 
    || email.lastIndexOf('.') === email.length-1
    || email.indexOf('@.') !== -1
    || email.indexOf('.@') !== -1)
    {
       emailAlert.innerHTML += 'Düzgün email daxil edin !';
       emailAlert.classList.remove('d-none');
    }
    if(parol === '')
    {
       parolAlert.innerHTML += 'Boş buraxıla bilməz !';
       parolAlert.classList.remove('d-none');
    }
    else if(parol.length < 8)
    {
       parolAlert.innerHTML += 'Minimum 8 simvol olmalıdır !';
       parolAlert.classList.remove('d-none');
    }

    let parolChracter = parol.split('');

    if(parolChracter.every(par => !isNaN(+par)))
    {
        parolAlert.innerHTML += 'En azı bir hərf olmalıdır !';
        parolAlert.classList.remove('d-none');
        
    }
    else if(parolChracter.every(par => isNaN(+par)))
    {
        parolAlert.innerHTML += 'En azı bir rəqəm olmalıdır !';
        parolAlert.classList.remove('d-none');
    }
    else if(parol.indexOf('@') === -1 && parol.indexOf('!') === -1 && parol.indexOf('#') === -1 && parol.indexOf('_') === -1)
    {
        parolAlert.innerHTML += '@, !, #, _ xüsusi simvollarından biri olmalıdır !';
        parolAlert.classList.remove('d-none');
    }
   
    else
    {
        document.querySelector('form').classList.add('d-none');
        document.querySelector('.send').classList.add('d-none');
        document.querySelector('.alert-registration').classList.remove('d-none');
    }
   
}

// Task 6

const countries = ['Azerbaijan', 'Turkey', 'Russia', 'Georgia', 'Latvia', 'Czech'];
const cities = [
    {name: 'Baku', country: 'Azerbaijan'}, 
    {name: 'Sumgayit', country: 'Azerbaijan'}, 
    {name: 'Barda', country: 'Azerbaijan'}, 
    {name: 'Istanbul', country: 'Turkey'}, 
    {name: 'Ankara', country: 'Turkey'},
    {name: 'Moscow', country: 'Russia'}, 
    {name: 'Saint Petersburg', country: 'Russia'},
    {name: 'Tiblisi', country: 'Georgia'}, 
    {name: 'Batumi', country: 'Georgia'},
    {name: 'Daugavpils', country: 'Latvia'}, 
    {name: 'Jēkabpils', country: 'Latvia'},
    {name: 'Prague', country: 'Czech'}, 
    {name: 'Brno', country: 'Czech'},
];

const dropdownMenu = document.querySelector('.dropdown-menu');

for(const countr of countries)
{
    const a = document.createElement('a');
    a.classList.add('dropdown-item');
    a.href = '#!';
    a.innerText = countr;
    dropdownMenu.appendChild(a);
}

const btn1 = document.querySelector('#dropdownMenu1');

btn1.onclick = function()
{
    document.querySelector('.dropdown-menu').classList.toggle('d-block');
}
const btn2 = document.querySelector('#dropdownMenu2');

btn2.onclick = function()
{
    document.querySelectorAll('.dropdown-menu')[1].classList.toggle('d-block');
};

[...document.querySelectorAll('.dropdown-menu a')].map(a => 
    {
        a.onclick = function()
        {
            const country = this.innerText;
            document.querySelector('.dropdown-menu').classList.remove('d-block');
            btn1.innerText = country;
            let city;
            [...document.querySelectorAll('.dropdown-menu')[1].querySelectorAll('a')].map((a) => a.remove());
            for(city of cities)
            {
                if(city.country === country)
                {
                    const a = document.createElement('a');
                    a.classList.add('dropdown-item');
                    a.href = '#!';
                    a.innerText = city.name;
                    document.querySelectorAll('.dropdown-menu')[1].appendChild(a);
                }
                
            }
            btn2.innerText = document.querySelectorAll('.dropdown-menu')[1].children[1].innerHTML;
        }
    })
    
// Task 7

// console.log('Hello World');

