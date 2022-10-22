
    document.getElementById("toggleicon").addEventListener("click",function(){
        document.getElementById('sidebarMenu').classList.toggle('sidebar');

        document.querySelector('.toggleicon > .middle').classList.toggle('middle-hidden');
        document.querySelector('.toggleicon > .bottom').classList.toggle('bottom-rotate');
        document.querySelector('.toggleicon > .top').classList.toggle('top-rotate');
    });
    