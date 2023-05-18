$(function() {
    $('.numbers-only').on("keypress", function(event) {
        return isNumeric(event);
    });

});
function days_between(firstDate, secondDate) {
    // The number of milliseconds in one day
    var oneDay = 1000 * 60 * 60 * 24;
    // Convert both dates to milliseconds
    // Calculate the difference in milliseconds
    var differenceInMs = Math.abs(firstDate.getTime() - secondDate.getTime());
    // Convert back to days and return
    return Math.round(differenceInMs / oneDay);
}
function addCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function isNumeric(evt) {

    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    console.log(charCode);
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}