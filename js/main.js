let container_bg = document.querySelector(".header .container");
let bar = document.getElementById("bar");
let links = document.querySelector(".header .links");
let links_li = document.querySelectorAll(".header .links li");

links_li.forEach((el) => {
  el.addEventListener("click", (li) => {
    links_li.forEach((li) => {
      li.classList.remove("active");
    });
    li.currentTarget.classList.add("active");

    let section = document.querySelectorAll("section");
    let sectiontarget = li.currentTarget.dataset.filter;
    section.forEach((sec) => {
      if (sec.classList.contains(sectiontarget)) {
        sec.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});
// change bg header
window.addEventListener("scroll", () => {
  window.scrollY > 100
    ? container_bg.classList.add("scrol")
    : container_bg.classList.remove("scrol");
});

bar.addEventListener("click", () => {
  bar.classList.toggle("fa-times");
  links.classList.toggle("open");
});

// section landing for change bg rendom
let landing = document.querySelector(".section")
let imgArray = ["bg-6.jpg","bg-2.jpg","1.jpg","bg-5.jpg"]

setInterval(function() {
let randomnumber = Math.floor(Math.random()*imgArray.length)
landing.style.backgroundImage = 'url("imgs/'+imgArray[randomnumber]+'")'
},10000)

// btn for go to section ahadith
let browsingbtn = document.querySelector(".content .btn");
hadithsection = document.querySelector(".hadith");
browsingbtn.addEventListener("click", () => {
  hadithsection.scrollIntoView({
    behavior: "smooth",
  });
});

 

// start hadith

let hadith_container = document.querySelector(".hadith-container") ;
let btnNuxt = document.querySelector(".buttons .next");
let btnPrev = document.querySelector(".buttons .prev");
let btnNumer = document.querySelector(".buttons .number");
let hadithIndex = 0;
hadithcanged()
function hadithcanged() {
    fetch("https://api.hadith.gading.dev/books/muslim?range=1-300")
    .then(response => response.json())

    .then(data =>{

        let hadiths = data.data.hadiths;

        btnNuxt.addEventListener('click', ()=>{
            hadithIndex == 299 ? hadithIndex = 0 : hadithIndex++;
            changehadith()
        })
        btnPrev.addEventListener('click', ()=>{
            hadithIndex == 0 ? hadithIndex = 299 : hadithIndex--;
            changehadith()
        })
        function changehadith(){

            hadith_container.innerText = hadiths[hadithIndex].arab ;
            btnNumer.innerText = `300 / ${hadithIndex + 1}`;
        }
        changehadith();
    })
}

// End hadith

// start zekr


let zekrsabah = "https://ahegazy.github.io/muslimKit/json/azkar_sabah.json";
let zekrmassa = "https://ahegazy.github.io/muslimKit/json/azkar_massa.json";
let PostPrayer = "https://ahegazy.github.io/muslimKit/json/PostPrayer_azkar.json";
let zekr_Sabah  = document.querySelector(".zekr-Sabah").onclick = ()=>{Sabah() }
let zekr_Massa = document.querySelector(".zekr-Massa").onclick = ()=>{Msa() }
let afterPrayer = document.querySelector(".zekr-afterPrayer").onclick = ()=>{Prayer() }
let zekr_slep = document.querySelector(".zekr-slep").onclick = ()=>{Sleep() }

function Prayer() {
  let parer_pop = document.querySelector(" .parer-pop");
  let parerpoup = document.querySelector(" .parerpoup");
  let close = document.querySelector(".parerpoup .close");
      fetch(PostPrayer)
      .then((Response) => Response.json())
      .then((data) => {
        let parerdata = data.content;
        
             parerdata.forEach((zekr)=>{
                       close.onclick = ()=>{
                         parerpoup.classList.remove("active")
                       }
                       parerpoup.classList.add("active");
                       parer_pop.innerHTML +=`
                   
                       <div>   
                                
                                [${zekr.bless  }]
                                 <br/><br/>
                                 { ${zekr.zekr}}
                                 <br/>  
                                  (${zekr.repeat}):التكرار
                                  </div>
                       `
                     })
                  
      })
}
function Sabah() {
  let poup = document.querySelector(".poup ");
let sabah_pop = document.querySelector(".poup .sabah-pop");
let close = document.querySelector(".poup .close");
      fetch(zekrsabah)
      .then((Response) => Response.json())
      .then((data) => {
        let sabahdata = data.content;
       
        
          
             sabahdata.forEach((zekr)=>{
                       close.onclick = ()=>{
                         poup.classList.remove("active")
                       }
                       poup.classList.add("active");
                       sabah_pop.innerHTML +=

                       `
                       
                      
                       <div>   
                               
                                [${zekr.bless  }]
                                 <br/><br/>
                                 { ${zekr.zekr}}
                                 <br/>  
                                  (${zekr.repeat}):التكرار
                                  </div>
                       `
                     })
                    
          
      
      
      })
    
    
  

}
function Msa() {
  let msa_pop = document.querySelector(" .msa-pop");
  let msapoup = document.querySelector(" .msapoup");
  let close = document.querySelector(".msapoup .close");

      fetch(zekrmassa)
      .then((Response) => Response.json())
      .then((data) => {
        let msadata = data.content;
       
        
          
             msadata.forEach((zekr)=>{
                       close.onclick = ()=>{
                         msapoup.classList.remove("active")
                       }
                       msapoup.classList.add("active");
                       msa_pop.innerHTML +=`
                       <div>   
                                
                                [${zekr.bless  }]
                                 <br/><br/>
                                 { ${zekr.zekr}}
                                 <br/>  
                                  (${zekr.repeat}):التكرار
                                  </div>
                       `
                     })
                    
          
      
      
      })
    
    
  

}
function Sleep() {
  let sleep_pop = document.querySelector(" .sleep-pop");
  let sleeppoup = document.querySelector(" .sleeppoup");
  let close = document.querySelector(".sleeppoup .close");

      fetch("azkarsleep.json")
      .then((Response) => Response.json())
      .then((data) => {
        let slepdata = data.content;
       
        
          
             slepdata.forEach((zekr)=>{
                       close.onclick = ()=>{
                         sleeppoup.classList.remove("active")
                       }
                       sleeppoup.classList.add("active");
                       sleep_pop.innerHTML +=`
                       <div>   
                                
                                
                                 { ${zekr.zekr}}
                                 <br/>  
                                  (${zekr.repeat}):التكرار
                                  </div>
                       `
                     })
                    
          
      
      
      })
    
    
  

}




   
// End zekr

// start lecture
let list_video = document.querySelector(".video-list ");
let mainvideo = document.querySelector(".main-video video");
let titel = document.querySelector(".main-video .titel");
fetch("Lectures.json")
.then(response =>response.json())
.then((data) => {
  let Alldata = data;
  Alldata.map((item) => {
    list_video.innerHTML +=`
    <div class="vid-lec ">
    <video src="${item.FilePath}"  autoplay muted></video>
  <h3 class="titel">${item.Lectures}</h3>
  </div>
    
    `
    let listvideo = document.querySelectorAll(".video-list .vid-lec");
    listvideo.forEach((video) => {
      video.onclick = () => {
        listvideo.forEach((vid) => vid.classList.remove("active"));
        video.classList.add("active");
        if (video.classList.contains("active")) {
          let src = video.children[0].getAttribute("src");
          mainvideo.src = src;
          let title = video.children[1].innerHTML;
          titel.innerHTML = title;
        }
      };
    });
  })
})

// End lecture

// start Quran

let Quran_container = document.querySelector(".Quran-container")
Getsurah();
function Getsurah() {
    // fetch surah meta-data (sourse of surah)
    fetch("http://api.alquran.cloud/v1/meta")
    .then(response => response.json())
    .then(data =>{
        let suras = data.data.surahs.references
        let NumberOfSuras = data.data.surahs.count

       for (let i = 0; i < NumberOfSuras; i++) {
        Quran_container.innerHTML += `
        <div class="surah">
            <p> ${suras[i].name}</p>
            <p>${suras[i].englishName}</p>
          </div>

        `

       }
       let surah_title = document.querySelectorAll(".surah")
      let popup = document.querySelector(".surah-popup")
      let closebtn = document.querySelector(".surah-popup .close")
      closebtn.addEventListener("click",() => {
        popup.classList.remove("active")

      })
      let ayah_container = document.querySelector(".ayah")
      surah_title.forEach((title, index) =>{
        
        title.addEventListener('click',()=>{
            fetch(`http://api.alquran.cloud/v1/surah/${index +1}`)
            .then(response => response.json())
            .then(data => {
                ayah_container.innerHTML = "";
                let ayat = data.data.ayahs
                
                ayat.forEach((aya) =>{
                    popup.classList.add("active");
                    ayah_container.innerHTML += `
                    
                    <p> <span>{${aya.numberInSurah}}</span> ${aya.text}</p>

                    `
                })
            })
        })
      })
    })

}

// End Quran
// start Prayer Times
let table_container = document.querySelector(".table")

function getprayertime() {
    fetch("http://api.aladhan.com/v1/timingsByCity/22-09-2023?city=Cairo&country=egypt+Arab+Emirates&method=8")
    .then(response => response.json())
    .then(data => {
        let NameTimes = data.data.timings;

        // table_container.innerHTML = "";
        for(let Numbertime in NameTimes){
            table_container.innerHTML += `
            <table>
            
            <tbody>
            <tr class:"color">
              <th>
                <td >${NameTimes[Numbertime]}</td>
                <td>${Numbertime}</td>
              </th>
              </tr>
            </tbody>
          </table>

            `
        }

    })
}

getprayertime();
// End Prayer Times

// https://ahegazy.github.io/muslimKit/json/  // لينك الاذكار كلها


// loading
let loadedd = document.querySelector('.loading')
let cover = document.querySelector('.cover')
console.log(loadedd);
console.log(cover);


function disnone() {
    
    cover.style.opacity = 0;
    cover.style.display = 'none';
    cover.style.transition = 'display 1s';
}
let stop =  setTimeout (disnone, 16000)

window.onload = stop

