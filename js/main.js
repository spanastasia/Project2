var API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImIzZmEwZGYxM2M1NDllMGMxMzZjZDFhNWUwZTAzNTZlMmFhZWQyNzkwZTcwNzdiNWU1OWMzMjcyNTYzYjBjMGRlYTRiYmM2MTZhOTU2NThjIn0.eyJhdWQiOiIxMCIsImp0aSI6ImIzZmEwZGYxM2M1NDllMGMxMzZjZDFhNWUwZTAzNTZlMmFhZWQyNzkwZTcwNzdiNWU1OWMzMjcyNTYzYjBjMGRlYTRiYmM2MTZhOTU2NThjIiwiaWF0IjoxNTkwNTAyMTExLCJuYmYiOjE1OTA1MDIxMTEsImV4cCI6MTkwNjAzNDkxMSwic3ViIjoiMjIwOCIsInNjb3BlcyI6WyJ1c2VyQmFzZUluZm8iLCJ1c2VyRGV0YWlsZWRJbmZvIiwidXNlckNvdXJzZUluZm8iXX0.zuB1Gn--j_9AylxrwYFgQIBpAAuZS_aYecl2mbojpIX9D0AII19jXp8sDJoOP0PSXXUE60pXVMILlv7kazLJr44LE8gTNidnY9YTb2LaBtWyzJUA8APlCsODhUW-N_xDBdKCANvjf80ex5-GvXKafX6ghYhMfHGwZYWAQo5eQYqBfwkrDRbGI5ptHnlom6UFczJzEhWky6KWmGoZ31iSXX-LkqPwIcM4GHrGXXJ5adSWk_l4YX7nAU8QMV1NPBtxbQjpWLVyW-TxOCEadvlool6-HMP-M-NFg1UsK7rVBt7I6vIJG6bBMzoUwKwxQE1OeqZ2yDYMbyJb2zpPzSB8-JoNUaqyn4bkZWPOmioSql3HBT1LZmxiRixrsNBgPUoj2m5uHyrf5in5t3ohY4uR95tDC63x44o0ZNScYhRlliQAlpw40_fFM3Dp3sabtPuYx806Sk0jKC2CMXCb1vFiTQZECI6RTkK9MckBv2-XZPAPMMhX-MVgufS8qX_7yB2jEY0hw4--rDdczImpBBscHUkjGvNDoNMIitdvLAXOpUzqCEXTTe4GMZzo2lDlWzFNbxcq3AepwEAYWuCJtDqzSI24grU_KiohcN7LCUSfLTVsTDEie1WWtfDbW-l0FN158i9-WYg3I36a15mi9EV8N8CHirzDv-bR0p8vBs4w24w';
  var client = new INTITAClient({
    key: API_KEY,
 });

client.getUserDetails(function(error, data) {
    let userPhoto = document.getElementById('avatar');
    if (userPhoto) {
        userPhoto.setAttribute('src', data.avatar);
    }
    if (document.getElementById('name'))
    document.getElementById('name').innerText = " " + data.firstName;
    if (document.getElementById('second_name'))
    document.getElementById('second_name').innerText = " " + data.secondName;
    if (document.getElementById('education'))
    document.getElementById('education').innerText = " " + data.education;
    if (document.getElementById('address'))
    document.getElementById('address').innerText = " " + data.country + ", " + data.city + ", " + data.address;
    if (document.getElementById('phone'))
    document.getElementById('phone').innerText = " " + data.phone;
    if (document.getElementById('email'))
    document.getElementById('email').innerText = " " + data.email;
});

client.getUserCoursesAndModules(function(error, data) {
    let modulesWrapper = document.getElementById('planets');
    let modulesMain = document.getElementById('my_planets');
    let content = '';
    if (modulesWrapper) {
        for (let i = 0; i < data.modules.length; i++) {
            if (i == 3) break;
            content = '<div class=\"planets__card\"\><div class=\"planets__img\"\><img src=\"./img/planet' + (i + 1) + '.png\" alt=\"planet image\"\></div\><h3>' +  data.modules[i].title + '</h3\></div\>'
        }
        modulesWrapper.innerHTML = content;
    } else if (modulesMain) {
        for (let i = 0; i < data.modules.length; i++) { 
            content += '<div class=\"planets__card\"\><div class=\"planets__img\"\><img src=\"./img/planet' + (i < 9 ? (i + 1) : (i % 9 + 1)) + '.png\" alt=\"planet image\"\></div\><h3>' +  data.modules[i].title + '</h3\></div\>' 
        }
        modulesMain.innerHTML = content;
    }
});
