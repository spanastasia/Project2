  var API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjAwNTY5ODIzYzMzMWZmNWMwZjNlNmQxNGYxN2RlMDg0MjA4NTI0MzUzY2RiNTNhZjkyYzRkNzk2MGI1N2U5MTc3NmNmZGQ2MjRjNWJhOTMxIn0.eyJhdWQiOiIxMCIsImp0aSI6IjAwNTY5ODIzYzMzMWZmNWMwZjNlNmQxNGYxN2RlMDg0MjA4NTI0MzUzY2RiNTNhZjkyYzRkNzk2MGI1N2U5MTc3NmNmZGQ2MjRjNWJhOTMxIiwiaWF0IjoxNTU0NDcyNzk1LCJuYmYiOjE1NTQ0NzI3OTUsImV4cCI6MTg3MDA5MTk5NSwic3ViIjoiMzUzIiwic2NvcGVzIjpbInVzZXJCYXNlSW5mbyIsInVzZXJEZXRhaWxlZEluZm8iLCJ1c2VyQ291cnNlSW5mbyJdfQ.sXiR3LWzxJvKF3HrQjY7SutrJj1J6hkBfso2SgNDEDoK7-1wpSG3SEM5vjk0ZSHFAjnCnUvFkBZ_AW8hjmcu69QAyBVpcXmldAYO5F1pTHMVrUcse50bM9F6ioov3erQhOPLDHkFrvGFYviWFFJbF4R77SzdbhUVZ-HEAZPYPFpP8JnkwkRALXwvjI96Rb2z5xO14geZP_Kcr4WJ06miF2X0uL58cJgn6zuYEMEzFMmPs7g8_rt45WxkHgxVpkV7RrVaUBmYvvWaWbcyJiYMVZoAYKDnkt2kIT7ItZJxiVUYkdCIuOQw46N_hEY0tMAaxZLMNByZFVGCp_6Fjk6O6KfUFdbT-gBJXPkLBfOGN1-Yxtym-ysYYIcajiUaGbYDBNLwDXd-3kxUzytKaPmHbIAxVOs6ej0J02uq3CqgJz3qjTrIQ57LQuEKrx5z7MofXNjYOLuiBOtrjGRe5Wsc3lHG3ePJyeVEzhlO9vu7I9apEx07Fok3209L4aZgAyI8-vXJucWPnJAseDF-jpkKTK-ubQ_tGxaGAMhCLcNmCduR7BDSmLX-cElA0jYUyfpRyy6WPukhggmuO-MYLeFvunsX1HGQOW4XU3x5ssFMPdjk1VXQnTWe6Fqccbl03urOnJyzr1sl3Nw9TLj_UFhSnT99G5P37KdP0VPCtB8sYqU';
  var client = new INTITAClient({
    key: API_KEY,
 });



  client.getUserDetails(function(data, error) {
  	console.log(error, data);
  });
  
  client.getUserCoursesAndModules(function(error, data) {
  	console.log(error, data);
  });

// var element = data.courses[0].id;
//  client.getCourseModules( element, function (error,modules) {
//  	console.log(element,error, modules);
//  });

// client.getModuleLectures(function(error, data) {
// 	console.log(error, data);
// })
 