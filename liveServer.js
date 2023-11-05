function ChangeCSS(from,to,class_){
    var var1 = $(from);

    if(class_){
        var1.removeClass(from.slice(1)).addClass(to.slice(1));
        value = null;
    }else{
        value = document.getElementById(from.slice(1));
    }
    
    return value;
}

function sleep(ms) {
    var date = new Date();
    var curDate = null;

    do { 
        curDate = new Date(); 
    }
    while(curDate-date < ms);
}




function showDashboard(){
    ChangeCSS(".dashboard-hidden",".dashboard-visible",true);
    ChangeCSS(".viewport-active",".viewport-hovered",true);
    ChangeCSS(".cover-image-alt",".cover-image",true);
}; 
    
function hideDashboard(){
   ChangeCSS(".dashboard-visible",".dashboard-hidden",true);
   ChangeCSS(".viewport-hovered",".viewport-active",true);
   ChangeCSS(".cover-image",".cover-image-alt",true);
   //ChangeCSS("#cover-image","cover-image",false).style.opacity="100%";
}; 

