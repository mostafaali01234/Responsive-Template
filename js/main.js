// let winH = screen.availHeight,
//     upNavH = document.querySelector(".up-nav").offsetHeight,
//     navH = document.querySelector(".navbar").offsetHeight,
//     slider = document.querySelector(".slider"),
//     carouselItem = document.querySelector(".carousel-item");

//     slider.style.height = `${winH - (upNavH + navH)}px`;
//     carouselItem.style.height = `${winH - (upNavH + navH)}px`;

// window.onload = function(){
//     // slider.offsetHeight =  winH - (upNavH + navH);
    
// }

/////////////////////////////////////////////////////   Featured Work       /////////////////////////////////////////////////////
let featuredWorkBtns = document.querySelectorAll(".featured-work ul li"),
    allWorkImgs = document.querySelectorAll(".featured-work img"),
    Workoverlay = document.querySelectorAll(".featured-work .workover");

//  console.log(allWorkImgs[0].parentElement.children[1].classList[0])

for(let i = 0; i < featuredWorkBtns.length; i++){
    featuredWorkBtns[i].onclick = function(){

        //  remove active from other button
        document.querySelector('.featured-work .active').classList.remove('active');
        featuredWorkBtns[i].classList.add('active');

        //--------------------------------------------   FIRST WAY FADE-----------------------------------------------
        //  load only imgs with certain class
        for(let j = 0; j < allWorkImgs.length; j++){

            //////  Button 'ALL' -----------------------
            if(featuredWorkBtns[i].classList[1] == 'all'){
                allWorkImgs[j].style.transform = 'none';
                allWorkImgs[j].style.position = 'relative';

                if(allWorkImgs[j].parentElement.children[1].classList[0] == 'workOverlayDown')
                    allWorkImgs[j].parentElement.children[1].style.top = '50%';

                allWorkImgs[j].parentElement.parentElement.style.transform = 'none';
                allWorkImgs[j].parentElement.parentElement.style.position = 'relative';
                Workoverlay.forEach(el => el.style.height = '50%');
               
            }else{
                 //////  class not match -----------------------
               if(featuredWorkBtns[i].classList[1] != allWorkImgs[j].classList[0]){
                    allWorkImgs[j].style.transform = 'scale(0.0005)';
                    allWorkImgs[j].style.position = 'absolute'; 

                    if(allWorkImgs[j].parentElement.children[1].classList[0] == 'workOverlayDown')
                        allWorkImgs[j].parentElement.children[1].style.top = '0';
                         

                    allWorkImgs[j].parentElement.parentElement.style.transform = 'none';
                    if(allWorkImgs[j].parentElement.parentElement.children[1].children[0].style.position == 'absolute' 
                            && allWorkImgs[j] != allWorkImgs[j].parentElement.parentElement.children[1].children[0]
                        ||
                        allWorkImgs[j].parentElement.parentElement.children[0].children[0].style.position == 'absolute')
                    {
                        allWorkImgs[j].parentElement.parentElement.style.transform = 'scale(0.0005)';
                        allWorkImgs[j].parentElement.parentElement.style.position = 'absolute';        
                    }
                    Workoverlay.forEach(el => el.style.height = '100%');
                   
               }else{
                 //////  class match -----------------------
                allWorkImgs[j].style.transform = 'none';
                allWorkImgs[j].style.position = 'relative';

                allWorkImgs[j].parentElement.parentElement.style.transform = 'none';
                allWorkImgs[j].parentElement.parentElement.style.position = 'relative';
                Workoverlay.forEach(el => el.style.height = '100%');

                if(allWorkImgs[j].parentElement.children[1].classList[0] == 'workOverlayDown')
                    allWorkImgs[j].parentElement.children[1].style.top = '0';               
               }    
            }
       }

/*
        //--------------------------------------------   FIRST WAY FADE-----------------------------------------------
        //  load only imgs with certain class
        for(let j = 0; j < allWorkImgs.length; j++){

            //////  Button 'ALL' -----------------------
            if(featuredWorkBtns[i].classList[1] == 'all'){
                allWorkImgs[j].style.transform = 'none';
                allWorkImgs[j].style.position = 'relative';
                allWorkImgs[j].parentElement.style.transform = 'none';
                allWorkImgs[j].parentElement.style.position = 'relative';

            }else{
                 //////  class not match -----------------------
               if(featuredWorkBtns[i].classList[1] != allWorkImgs[j].classList[0]){
                    allWorkImgs[j].style.transform = 'scale(0.0005)';
                    allWorkImgs[j].style.position = 'absolute'; 
                     if(allWorkImgs[j].parentElement.children[0].style.position == 'absolute' && allWorkImgs[j].parentElement.children[1].style.position == 'absolute')
                     {
                         allWorkImgs[j].parentElement.style.transform = 'scale(0.0005)';
                         allWorkImgs[j].parentElement.style.position = 'absolute'; 
                     }

               }else{
                 //////  class match -----------------------
                allWorkImgs[j].style.transform = 'none';
                allWorkImgs[j].style.position = 'relative';
                allWorkImgs[j].parentElement.style.transform = 'none';
                allWorkImgs[j].parentElement.style.position = 'relative';
               }
            }
       }
*/
       //--------------------------------------------   SECOND WAY  OPACITY-----------------------------------------------
        //  load imgs with certain class and lower the opacity of others //// remove col-lg-3 from all in html
        /*for(let j = 0; j < allWorkImgs.length; j++){
             if(featuredWorkBtns[i].classList[1] == 'all'){
                 allWorkImgs[j].parentElement.style.opacity = '1';
             }else{
                if(featuredWorkBtns[i].classList[1] != allWorkImgs[j].classList[0]){
                    allWorkImgs[j].parentElement.style.opacity = '0.08';
                }else{
                    allWorkImgs[j].parentElement.style.opacity = '1';
                }
             }
        }*/

    }
}
///////////////////////////////////////////     Statistic Counter   //////////////////////////////////////////////////////////////

window.addEventListener('scroll', function(){
    var place = window.scrollY;
    var alertOn = document.querySelector("div.statistcs"),
    counters = document.querySelectorAll("div.statistcs span");;

    if(place > (alertOn.offsetTop - alertOn.scrollHeight)){
        counters.forEach((c) => {
            let max = Number(c.innerHTML);
            var current = 1;
            var stepTime = Math.abs(Math.floor(2000 / max));

            var timer = setInterval(function() {
                if(max < 1000)
                    current = current + 1;
                else if(max > 1000 && max < 10000)
                    current = current + 10;
                    else if(max > 10000)
                    current = current + 1500;
                    
                c.innerHTML = current;
                if (current >= max) {
                    clearInterval(timer);
                }
            }, stepTime);
        });
      this.removeEventListener('scroll', arguments.callee, false);
    }
});

 
///////////////////////////////////////////////////////////////////////////////////////////
