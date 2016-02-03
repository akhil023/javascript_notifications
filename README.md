# javascript_notifications
Simple and Stylish Notifications that can be used instead of Alert, Confirm , temporary notifications and click to close notifications.
<h2>JavaScript Notifications , Stylish Custom Alert and Confirm Boxes</h2>

<p>
This is a very simple javascript library for stylish notifications which can be used with bootstrap .
<br/>
You can use it instead of alert(), confirm() functions.<br/>
You can also use it to display two types of notifications in the right bottom side of your page.<br/>
  One which closes when we click on it and one which stays for a specific time.
<br/><br/>
The div elements uses bootstrap classes. You have to use bootstrap css to see the styles or you can customize them on your own.

Add it to the html like any other javascript file using link tag.
</p>

# How to use

Notifications div uses 4 types of bootstrap classes <i> success,info,danger,warning </i> and extra class for displaying mails.
<br/>
success - green div with tick mark<br/>
danger - red div with cross mark<br/>
warning - orange div with warning symbol<br/>
info - blue div with info icon<br/>
mail - blue div with mail icon<br/>

<h3>Temporary Notification</h3>
<b>Sample Code</b>

  tempAlert("Message You want to display",3000,"success"); <br/>// displays the message in bottom right corner for 3 seconds in green div

<img src="https://cloud.githubusercontent.com/assets/16679120/12774953/f9bcaa80-ca17-11e5-9b81-13ad3f89dca9.png"/>
<h3>Notification Which Closes on click</h3>
<b>Sample Code</b>

  click2close("Message You want to display","info");<br/> // displays the message in bottom right corner for 3 seconds in blue div
  <img src="https://cloud.githubusercontent.com/assets/16679120/12775069/1a20b068-ca19-11e5-99e3-128ce34cbdd6.png"/>

<h3>Notification instead of javascript alert</h3>
<b>Sample Code</b>

  messenger("Message You want to display","danger"); <br/>// displays the message in middle of the div in blue div with ok button. User must click ok to close the div
  
  <img src="https://cloud.githubusercontent.com/assets/16679120/12777239/94351064-ca29-11e5-9228-a27966c6e3b9.png"/>

<h3>Notification instead of javascript confirm</h3>
<b>Sample Code</b>

  confirmer("Are you sure want to delete selected?", function (e){<br/>
                        if(e==='ok') {<br/>
                              // put your code <br/>
                            }<br/>
                        else <br/>
                        if(e==='cancel') <br/>
                            {<br/>
                                //  put your code <br/>
                            }<br/>
                    });<br/>
  
<img src="https://cloud.githubusercontent.com/assets/16679120/12777290/050239ac-ca2a-11e5-8ce8-53f961357eab.png"/>
