
        fetch('/header.html')
            .then(response => response.text())
            .then(data => {
                document.querySelector(".header_wrap").innerHTML += data
                  // 모바일 메뉴 버튼을 클릭했을 때 메뉴 나오기
                let btn_gnb = this.document.querySelector("#btn_gnb")
                let btn_close_gnb = this.document.querySelector("#btn_close_gnb")
                let hidden_gnb = this.document.querySelector(".hidden_gnb")
                let header = document.querySelector("header")

                btn_gnb.addEventListener("click",function(){
                    hidden_gnb.classList.add("on")
                })
                btn_close_gnb.addEventListener("click",function(){
                    hidden_gnb.classList.remove("on")
                })

                
                setInterval(function(){
                     header.style.transition = "all 0.5s ease 0s"
                    hidden_gnb.style.transition = "all 0.5s ease 0s"
                },100)
               
            })
            .catch(error => console.log("에러 : ",error))

        fetch('/head.html') 
            .then(response => response.text())
            .then(data => {
                document.head.innerHTML += data
            })
            .catch(error => console.log("에러 : ",error))
            

            fetch('/footer.html') 
            .then(response => response.text())
            .then(data => {
                document.querySelector("footer").innerHTML += data
            })
            .catch(error => console.log("에러 : ",error))
           
            fetch('/fixed_menu.html') 
            .then(response => response.text())
            .then(data => {
                document.querySelector(".fixed_menu").innerHTML += data

                let fixed_menu = this.document.querySelector(".fixed_menu")
                let lastScrollTop = 0
                let hideTimeout 

                setTimeout(function(){
                    fixed_menu.style.transition = " all 0.5s ease 0s"
                },100)

              
                this.window.addEventListener("scroll",function(){
                  // 스크롤을 했을 때 동작이 실행된다.
                  let scrollTop = this.document.documentElement.scrollTop 
                  // 위에서 스크롤바가 얼마나 내려왔는지 계산하여 변수에 저장한다.
                   if(scrollTop < lastScrollTop){
                      //  마우스 휠을 위로 올렸을 때
                      fixed_menu.classList.add("on")
                     
                      // 이미 존재하는 예약 타임이 있다면 제거
                      if(hideTimeout){
                          this.clearTimeout(hideTimeout)
                      }
                     
                      hideTimeout = this.setTimeout(function(){
                      fixed_menu.classList.remove("on")
                      // 2초 뒤에는 고정메뉴가 살아진다.
                     },2000)
                   }else{
                      // 마우스 휘를 아래로 내렸을 때
                      fixed_menu.classList.remove("on")
                   }
                   lastScrollTop = scrollTop
                  }) 
                  // 하단메누에 마우스를 올리면 기존에 설정되어있었던 2초뒤에 사라지는 동작이 취소됨
                  fixed_menu.addEventListener("mouseover",function(){
                      clearTimeout(hideTimeout)
                  })
                  fixed_menu.addEventListener("mouseover",function(){
                      hideTimeout = this.setTimeout(function(){
                          fixed_menu.classList.remove("on")
                          // 2초 뒤에는 고정메뉴가 살아진다.
                         },2000)
                  })
                  let btn_top = this.document.querySelector("#btn_top")
                  btn_top.addEventListener("click",function(e){
                     e.preventDefault()
                     window.scrollTo({top:0,behavior:"smooth"})
              
                      
                  })

                  let design_ver = "client"




                  
                  let btn_admin = document.querySelector("#btn_admin")
                  let admin_img = document.querySelector("#admin_img")
                  btn_admin.addEventListener("click",function(e){
                    e.preventDefault()
                    // a태그를 클릭했을 때 스크롤바가 위로 이동되는 기본기능을 억제

                    if(design_ver=="client"){
                        document.body.classList.add("admin")
                        design_ver = "admin"
                        admin_img.setAttribute("src","/img/btn_close.svg")

                    }else{
                        document.body.classList.remove("admin")
                        design_ver = "client"
                        admin_img.setAttribute("src","/img/Vector.svg")
                    }
                 
                  })

            })
            .catch(error => console.log("에러 : ",error))

            window.addEventListener("load",function(){

                let modal1 = this.document.querySelector(".modal1")
                if(modal1){
                    this.setTimeout(function(){
                        modal1.style.transition = "all 0.5s ease 0s"
                    },100)
                }
            })
        


          