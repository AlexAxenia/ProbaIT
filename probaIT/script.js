$('.owl-carousel').owlCarousel({
    loop: true,
    // margin: 10,
    nav: true,
    navText: ["<img src='imagini/left.png' class='arrow-resize'>","<img src='imagini/right.png' class='arrow-resize'>"],
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      575: {
        items: 2
      },
    }
  })

          document.querySelector("#show-login").addEventListener("click",function()
          {
              document.querySelector(".popup").classList.add("active");
              document.querySelector("#bgpopup").classList.add("active");
          });

          document.querySelector(".popup .close-btn").addEventListener("click",function()
          {
              document.querySelector(".popup").classList.remove("active");
              document.querySelector("#bgpopup").classList.remove("active");
          });


          document.querySelector("#show-register").addEventListener("click",function()
          {
              document.querySelector(".popup1").classList.add("active");
              document.querySelector("#bgpopup").classList.add("active");
          });
  
          document.querySelector(".popup1 .close-btn").addEventListener("click",function()
          {
              document.querySelector(".popup1").classList.remove("active");
              document.querySelector("#bgpopup").classList.remove("active");
          });


          document.querySelector("#inregistreaza-te").addEventListener("click",function()
        {
            document.querySelector(".popup1").classList.add("active");
            document.querySelector(".popup").classList.remove("active");
        });


        document.querySelector("#predau").addEventListener("click",function()
        {
            document.querySelector(".popup1").classList.add("active");
            document.querySelector("#bgpopup").classList.add("active");
        });

        document.querySelector("#invat").addEventListener("click",function()
        {
            document.querySelector(".popup1").classList.add("active");
            document.querySelector("#bgpopup").classList.add("active");
        });


        function handleResponse(responseData) {
            console.log(responseData);
        
            // if(responseData.statusCode != 200 && responseData.statusCode != 201) {
            //     document.getElementById("error").innerHTML = responseData.error ?
            //     responseData.error : responseData.message;
            //}
        }
        
        function handleSubmit(e) {
            const data = {
                "email" : document.getElementById("email").value,
                "password" : document.getElementById("password").value
            };
        
            const token = localStorage.getItem("token");
            const bobocToken = "d85df28b-476f-4e23-93d9-b39d3e37c9fa";
            const url = "https://proba2021.lsacbucuresti.ro/auth/login";
        
            fetch(url,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                    'boboc-token': bobocToken
                },
                body: JSON.stringify(data)
            }).then(response => response.json()).then(handleResponse);
        }


        function handleSubmit1(e) {
            const data = {
                "email": document.getElementById("emailregister").value,
                "firstname": document.getElementById("prenumeregister").value,
                "lastname": document.getElementById("numeregister").value,
                "password": document.getElementById("parolaregister").value,
                "confirmation_password": document.getElementById("reparolaregister").value,
                "role": document.getElementById("gen").value
            };
        
            const token = localStorage.getItem("token");
            const bobocToken = "d85df28b-476f-4e23-93d9-b39d3e37c9fa";
            const url = "https://proba2021.lsacbucuresti.ro/auth/register";
        
            fetch(url,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                    'boboc-token': bobocToken
                },
                body: JSON.stringify(data)
            }).then(response => response.json()).then(handleResponse);
        }


        function handleSubmit2(e) {
            const data = {
                "name": document.getElementById("nume").value,
                "email": document.getElementById("emailmesaj").value,
                "message": document.getElementById("mesaj").value
            };
        
            const token = localStorage.getItem("token");
            const bobocToken = "d85df28b-476f-4e23-93d9-b39d3e37c9fa";
            const url = "https://proba2021.lsacbucuresti.ro/contact-requests";
        
            fetch(url,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                    'boboc-token': bobocToken
                },
                body: JSON.stringify(data)
            }).then(response => response.json()).then(handleResponse);
        }
