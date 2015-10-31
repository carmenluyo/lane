jQuery(function() {
        
    setTimeout(function() {
        jQuery('#d1').fadeIn(500);
    }, 1000);
    
    

    setTimeout(function() {
        jQuery('#d1').fadeOut(500, function() {
            jQuery('#d2').fadeIn(500);
        });
    }, 3000);
    

    setTimeout(function() {
        jQuery('#d2').fadeIn(500, function() {
            jQuery('#d3').fadeIn(500);                
        });            
    }, 5000);
        
});