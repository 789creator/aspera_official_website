function compare_material(row_id)
{
          
                
                var selected_value = $('#materials'+row_id).val();
                var data = selected_value.split('**');               
               
                                
                                document.getElementById('grade'+row_id).innerHTML = data[0];
								document.getElementById('uns'+row_id).innerHTML = data[1];
								document.getElementById('c'+row_id).innerHTML = data[2];
								document.getElementById('cr'+row_id).innerHTML = data[3];
								document.getElementById('ni'+row_id).innerHTML = data[4];
								document.getElementById('mo'+row_id).innerHTML = data[5];
								document.getElementById('other'+row_id).innerHTML = data[6];
								document.getElementById('tensile'+row_id).innerHTML = data[7];
								document.getElementById('yeild'+row_id).innerHTML = data[8];
								document.getElementById('elong'+row_id).innerHTML = data[9];
								document.getElementById('hardness'+row_id).innerHTML = data[10];
								document.getElementById('kg'+row_id).innerHTML = data[11];
                
}


function resetmm()
{
    document.getElementById('edit-mm-wt').selectedIndex=0;  
}

function resetsch()
{
    document.getElementById('edit-schedule').selectedIndex=0;  
}

