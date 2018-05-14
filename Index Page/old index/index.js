function slideNav()
{
    // debugger;
    var slideBar = document.getElementById('mySlideBar');
    var main = document.getElementById('myMain');

    //closesile
    if (slideBar.offsetWidth > 0)
    {
    slideBar.style.width="0";
    slideBar.style.left="-120px";
    main.style.marginLeft="0";
    main.style.padding="12px 160px";
    }

    //open slide
    else
    {
        slideBar.style.width="120px";
        slideBar.style.left="0";
        main.style.marginLeft="120px";   
        main.style.padding="12px 280px";
    }
}