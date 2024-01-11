function changeIcon(){
        const bar = document.querySelector('.bar');
        const xMark = document.querySelector('.x_mark');
        const dropDown = document.querySelector('.dropDown-navbar');
        bar.classList.toggle('open');
        if(bar.classList.contains('open')){
                console.log('correct');
                bar.style.display= 'none';
                xMark.style.display='block';
                dropDown.style.display = 'flex';
        }
        bar.classList.remove('open');
}
function changeXIcon(){
        const bar = document.querySelector('.bar');
        const xMark = document.querySelector('.x_mark');
        const dropDown = document.querySelector('.dropDown-navbar');
        xMark.classList.toggle('open');
        if(xMark.classList.contains('open')){
                console.log('correct');
                bar.style.display= 'block';
                xMark.style.display='none';
                dropDown.style.display = 'none';
        }else{
                bar.style.display= 'block';
                xMark.style.display='none';
        }
        xMark.classList.remove('open');
}