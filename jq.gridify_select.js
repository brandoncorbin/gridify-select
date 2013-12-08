$.fn.gridify_select = function() {
 
    return this.each(function() {

    	var menu_max_height = 300;

        var select = $(this);
        var button = $('<div class="btn-group"><button class="btn dropdown-toggle" data-toggle="dropdown"><span class="title">'+$('option',select).eq(select.prop("selectedIndex")).text()+'</span> <span class="caret"></span></button><ul class="dropdown-menu"><li><div class="table-container" style="max-height:'+menu_max_height+'px; overflow-y:scroll; overflow-x:hidden;"></div></li></ul></div>');
        var table = $('<table class="table table-hover"></table>'); // setup table with highlights

        $('option', this).each(function(i) { 
        	
        	var fieldtxt = $(this).html(); // Get options text value
        	var fields = fieldtxt.split('	'); // Split it at the tab
        	var row = $('<tr data-index="'+i+'" style="cursor:pointer"></tr>'); // Setup Row
        	
        	$(fields).each(function(i) { 
        		row.append('<td>'+fields[i]+'</td>'); // Add value to table cell
        	}); // End looping over values

        	$(row).click(function() {
        		$('option', select).attr('selected',false); // Remove other selected item
        		$('tr', table).removeClass('info'); // Remove Selected table row
        		$(this).addClass('info'); // Set selected table row
        		$('option', select).eq($(this).attr('data-index')).attr('selected',true).addClass('active'); //select active option
        		$('span.title', button).html($('option', select).eq($(this).attr('data-index')).html()); // set title 
        	}); // Setup Row clicking events

        	table.append(row); // Stick row in table

       }); // End loop over options
       
       $('.dropdown-menu .table-container', button).append(table);
       select.on('change', function() { 
       		var index = select.prop("selectedIndex");
    		$('tr', table).removeClass('info');
    		$('tr',table).eq(index).addClass('info');
    		$('span.title', button).html($('option', select).eq(index).html());
       });

       select.after(button).hide();

    });
 
};