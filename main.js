const button = document.getElementById("click");
button.onmouseenter = () =>{
    button.textContent = "don't click !!"
}
button.onmouseleave = () =>{
    button.textContent = "click me"
}
button.onclick = () =>{
    button.style.display = "none"
    const container = document.querySelector(".main-container");
    let image = document.createElement("img");
    image.src = "./footage/images/dde1f553755c0cd2ca99187b4b7d0b3a.jpg";
    container.appendChild(image)
    image.style.width = "40%";
    let text = document.createElement("p");
    container.appendChild(text);
    text.textContent  = "if you move you're gay"
    text.style.fontSize = "23px";
    text.style.position = "absolute"
    text.style.background = "rgba(0,0,0,0.45)"
    text.style.color = "#fff"
    text.style.width = "40%"
    text.style.textAlign = "center"
    text.style.padding = "5px 0"
    text.style.zIndex = "2"
    const bgmusic1 =   document.getElementById("cowboy");
    bgmusic1.play();        
    if(window.innerWidth <= 767){
        image.style.width = "100%"
        text.style.width = "100%"
    }
    setTimeout(() =>{
        image.src = "./footage/images/Cadasadssadpture-removebg-preview.png";
        image.style.height = "100%"
        image.style.objectFit = "contain"
        text.textContent = "عز الله يعزك"
        text.style.width = "fit-content"
        text.style.padding = "5px 10px"
        text.style.top = "30%"
        text.style.background = "#f00"
        bgmusic1.pause()
        const bgmuic2 = document.getElementById("sucsess");
        bgmuic2.play()
        setTimeout(()=>{
            let image2 = document.createElement("img");
            image2.src = "./footage/images/Comp_1_00000.png";
            container.appendChild(image2)
            image2.style.width = "40%";
            image2.style.height = "100%"
            image2.style.position = "absolute"
            image2.style.opacity = "0.5"
            image.src = "./footage/images/dde1f553755c0cd2ca99187b4b7d0b3a.jpg";
            image.style.height = "auto"
            text.textContent = "You moved !!!"
            text.style.background = "rgba(0,0,0,0.45)"
            text.style.color = "#fff"
            text.style.width = "40%"
            text.style.padding = "5px 0px";
            text.style.top = ""
            bgmuic2.pause();
            bgmusic1.play();
            if(window.innerWidth <= 767){
                image2.style.width = "100%"
                text.style.width = "100%"
            }
            setTimeout(()=>{
                image.src = "./footage/images/Untitled Project.jpg";
                image2.style.display = "none";
                text.style.display = "none"; 
                bgmusic1.pause()
                const bgmusic3 = document.getElementById("yay");
                bgmusic3.play()
                setTimeout(() =>{
                    image.style.display = "none";
                    image2.style.display = "none";
                    text.style.display = "none"
                    container.innerHTML = `
                    <div class="main-container">
                        <h1>vote for the new Ashirah leader</h1>
                        <div class="leaders">
                        <div class="new-leader">
                        <img src="./footage/images/12312312e.jpg" alt="satie">
                        <button id="satie" class="vote-button">vote</button>
                        </div>
                        <div class="new-leader">
                        <img src="./footage/images/321123123312231.jpg" alt="medo">
                        <button  id="medo" class="vote-button">vote</button>
                        </div>
                        <div class="new-leader">
                        <img src="./footage/images/123123123123.jpg" alt="p7r">
                        <button id="p7r" class="vote-button">vote</button>
                        </div>                        
                        </div>
                        <style>
                        body{
                            height:100vh;
                        }
                        .main-container{
                            justify-content:space-between;
                        }
                        h1{
                            font-size:30px;
                            text-transform:capitalize;
                            text-align:center;
                            margin:10px auto 0 auto;
                        }
                        .leaders{
                            width:80%;
                            height:90vh;
                            display:flex;
                            flex-direction:row;
                            justify-content:center;
                            align-items:center;
                            margin:10px auto;
                        }
                        .new-leader{
                            width:calc(80%/3);
                            height:100%;
                            margin: 0 30px;
                            display:flex;
                            flex-direction:column;
                            justify-content: center;
                            align-items: center;
                        }
                        .new-leader img{
                            width:100%;
                            height:80%;
                            object-fit:cover;
                        }
                        .new-leader button{
                            width: 80%;
                            height: 60px;
                            background-color: transparent;
                            color:#000;
                            border: 2px #000 solid;
                            font-size: 17px;
                            text-transform: uppercase;
                            letter-spacing: 1.2px;
                            cursor: pointer;
                            margin:10px 0;
                        }
                        .main-container button:hover{
                            background-color: #000;
                            color: #fff;
                            border: #000;
                        }
                        @media (max-width: 767px){
                            body{
                                height:190vh;
                            }
                            .leaders{
                                width:100%;
                                flex-direction:column;
                            }
                            .new-leader{
                                width:80%;
                            }
                        }
                        </style>
                    </div>
                    `
                    const vote = document.querySelectorAll(".vote-button");
                        for(let i= 0; i <=vote.length; i++){
                            vote[i].onclick =  () =>{                      
                            switch (vote[i].id){
                                case "satie": container.innerHTML = `
                                    <video autoplay muted controls loop>
                                        <source src="./footage/other/gayyyy.mp4" type="video/mp4" >
                                    </video>
                                    <style>
                                        video{
                                            width:50%;
                                            height:100%;
                                            object-fit:cover;
                                        }
                                    </style>
                                `
                                    break
                                case "medo": container.innerHTML =`
                                <video autoplay muted controls loop>
                                    <source src="./footage/other/sigma.mp4" type="video/mp4" >
                                </video>
                                <style>
                                    video{
                                        width:50%;
                                        height:100%;
                                        object-fit:cover;
                                    }
                                    @media (max-width:767px){
                                        video{
                                            width:100%;
                                        }
                                    }
                                </style>
                            `
                                    break
                                case "p7r": container.innerHTML =`
                                <video autoplay muted controls loop>
                                    <source src="./footage/other/nigga.mp4" type="video/mp4" >
                                </video>
                                <style>
                                    video{
                                        width:50%;
                                        height:100%;
                                        object-fit:cover;
                                    }
                                    @media (max-width:767px){
                                        video{
                                            width:100%;
                                        }
                                    }
                                </style>
                            `
                                    break
                            }
                        }                     
                    } 

                },2000)
            },3000)
        },1350)
    },5000);
}