document.addEventListener("DOMContentLoaded", function(event) { 
    var node = document.createElement("div");
    node.id='noti';
    node.setAttribute("style","right: 0px;bottom: 0px; position: fixed; z-index: 1050;");
    document.body.appendChild(node);
});

//type values-(success,info,danger,warning,mail)
var t = 0,f=0;
function confirmer(msg,callback)
{
     var outdiv = document.createElement("div");
     outdiv.className = '';
     outdiv.id = 'confirmer';
     outdiv.setAttribute("style","z-index: 999; width: 100%; height: 100%; top: 0; left: 0; display: none; position: absolute; background-color: rgba(0, 0, 0, 0.41); color: #aaaaaa; /*opacity: .4;*/ filter: alpha(opacity = 50); box-shadow: rgb(84, 117, 185) 5px 5px 15px;");
     outdiv.innerHTML = "<div style='padding:10px; width: 300px; height: 200px; position: absolute; color: #000000; background-color: #ffffff; top: 50%; left: 50%; margin-top: -100px; margin-left: -150px;border-radius: 10px;box-shadow: #3A3A3B 5px 5px 15px;'><div style='position: absolute;top: 40%;text-align: center;'><span style='text-align: center;font-size: 16px;color: #858383;font-weight: 400;'>"+msg+"</span><button class='btn btn-default' onclick=' chide(\"confirmer\");ipresscancel()' style='margin:5px'>Cancel</button><button class='btn btn-primary' onclick='chide(\"confirmer\");ipressok()' style='margin:5px'>Ok</button></div></div>";
     document.body.appendChild(outdiv);
     pop('confirmer');
     setInterval(function () {
        if(f==1)
        {
            if(t==0)
            {
                resetokcancel();
                callback('ok');
            }
            else if(t==1)
            {
                resetokcancel();
                callback('cancel');
            }
        }
     }, 500);
}
function resetokcancel()
{
    f = 0;
    t = 0;
}
function ipressok()
{
    f = 1;
    t = 0;
}
function ipresscancel()
{
    f = 1;
    t = 1;
}
function messenger(msg,type)
{
     var outdiv = document.createElement("div");
     outdiv.className = '';
     outdiv.id = 'messenger';
     outdiv.setAttribute("style","z-index: 999; width: 100%; height: 100%; top: 0; left: 0; display: none; position: absolute; background-color: rgba(0, 0, 0, 0.41); color: #aaaaaa; /*opacity: .4;*/ filter: alpha(opacity = 50);");
     outdiv.innerHTML = "<div class='alert alert-"+type+"' style=' width: 300px; height: 200px; position: absolute; top: 50%; left: 50%; margin-top: -100px; margin-left: -150px;border-radius: 10px;box-shadow: #3A3A3B 5px 5px 15px;'><div style='position: absolute;top: 20%;text-align: center; width: 90%;'><span style='display:block; text-align: center; margin:5px; font-size: 18px;font-weight: 400;'>"+msg+"</span><button class='btn-lg btn btn-primary' onclick='mhide(\"messenger\")'>OK</button></div></div>";
     document.body.appendChild(outdiv);
     pop('messenger');

}
function pop(div) {
        document.getElementById(div).style.display = 'block';
}
function mhide(div) {
        document.getElementById(div).style.display = 'none';
        document.body.removeChild(document.getElementById('messenger'));
}
function chide(div) {
        document.getElementById(div).style.display = 'none';
        document.body.removeChild(document.getElementById('confirmer'));
}

function tempAlert(msg,len,type)
{   
    var ico;
    if(type=='success')
        ico = "glyphicon glyphicon-ok";
    if(type=='danger')   
        ico = "glyphicon glyphicon-remove";
    if(type=='info')   
        ico = "glyphicon glyphicon-exclamation-sign";
    if(type=='warning')  
        ico = "glyphicon glyphicon-alert";
    if(type=='mail')  
     {
      ico = "glyphicon glyphicon-envelope";
      type= 'info';
     }
     var el = document.createElement("div");
      el.setAttribute("style","bottom:0px; right:0px; width:300px; z-index: 9002; width:300px; ");
     el.innerHTML = "<div style='margin-bottom:5px !important;padding:6px;font-size:15px' class='notic alert alert-"+type+"'><span class='"+ico+"'> </span> <b style='padding-left:5px;'>"+msg+"</b> </div>";
     setTimeout(function(){         
      el.parentNode.removeChild(el);      
     },len);
     document.getElementById("noti").insertBefore(el,document.getElementById("noti").firstChild);
}

function click2close(msg,type)
{   
    var ico;
    var close = "glyphicon glyphicon-remove-circle";
    if(type=='success')
        ico = "glyphicon glyphicon-ok";
    if(type=='danger')   
        ico = "glyphicon glyphicon-remove";
    if(type=='info')   
        ico = "glyphicon glyphicon-info-sign";
//        ico = "glyphicon glyphicon-exclamation-sign";
    if(type=='warning')  
        ico = "glyphicon glyphicon-alert";
    if(type=='mail')  
     {
      ico = "glyphicon glyphicon-envelope";
      type= 'info';
     }
     var el = document.createElement("div");
      el.setAttribute("style","bottom:0px; right:0px; width:300px; z-index: 9002; width:300px; ");
     el.innerHTML = "<div onclick='this.parentNode.style.display = \"none\"' style='margin-bottom:5px !important;padding:6px;font-size:15px' class='notic alert alert-"+type+"'><span class='"+ico+"'> </span> "+msg+" <span style='float:right;' class='"+close+"'> </span></div>";
     document.getElementById("noti").insertBefore(el,document.getElementById("noti").firstChild);
}
