
     
function ShowC(heading, message, isSuccess) {
    $('#cpModal').modal('toggle');
    $('#cpModal').modal('show');
    var pHeading = document.getElementById('rpHeader');
    pHeading.innerHTML = heading + '<b> </b>';

    var element = document.getElementById('rpBody');
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild);
    }
    element.innerHTML = message;
    document.getElementById('mFooter').style.display='none';
   

}
function doMagic() {
   
    $('#cpModal').modal('toggle');
    $('#cpModal').modal('show');
    var div1 = document.getElementById('rpHeader');
    div1.innerHTML = 'Change Password' + '<b> </b>';
}
