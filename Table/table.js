var res = document.getElementById("result");
//filter only name
function myFunction() {
    var i, input, tr, td, filter, id;
    table = document.getElementById('myTable');
    tr = table.getElementsByTagName('tr');
    input = document.getElementById('myInput')
    filter = input.value.toUpperCase();
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td')[2];// td[0] = first column
        // fiter all columns instead of one
        //         for (j=0; j<td.length;j++)
        //         {
        //         if(td[j])
        //         {
        //             if (td[j].innerHTML.toUpperCase().indexOf(filter) >-1)
        //                 tr[i].style.display="";
        //             else
        //                 tr[i].style.display="none";
        //         }
        //     }
        //     }
        // }
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
                id = tr[i].getElementsByTagName('td')[3];
                res.innerHTML = id.innerHTML;
            }
            else
                tr[i].style.display = "none";
        }
    }

}


//// Delete (-) button
// when click on del(td), retrive it's parent(tr). Then save its parent(tr) index
// also retrieving all td's value of the parent and save them into names array for later call
var table = document.getElementById('myTable');
var Ids=[]; // array of row indexes which are clicked
var names=[];   // array of id-value within a selected row
///check this : new JS DOM :::>>> document.querySelectorAll(''#tblOne > tbody > tr')

$(".del").click(function(){
    debugger;
    //get row index to hide on click
    var row_index = $(this).parent().index();
    
    Ids.push(row_index); // save all index row (not used yet)

    //get all td's value from parent(tr) - no need uncomment
//     $(this).closest('tr').find('td').each(function()
// {
//     names.push($(this).text()); // save all td's value into array for deletion
// });

    //Get column 3 of row_index, save into names array to pass to asp
    names.push($("#myTable tr:eq("+row_index+") td:eq(3)").text());

    // hide row
    $(this).parent().hide();
});


//testing delete with JS (need to pass it on real DB on asp)
function myFunction2()
{
    var i;
    // $("#result").html("Deleting the following: " + Ids);
    $("#result").html("Deleting the following: " + names);
    // for (i=0; i<Ids.length; i++)
    // {
    //     table.deleteRow(Ids[i]);
    //     // $("#result").append(Ids[i]);
    // }
}

