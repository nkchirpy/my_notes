<script>
        function navigation(event){

            var tabInfo = event.target.id
            switch(tabInfo){
                case 'tab_1_next':

                   var next_tab =  document.getElementById('tab2')
                   var current_tab = document.getElementById('tab1')
                   var req1,req2,req3,req4;
                   req1 = document.getElementById('phone').value;
                   req2 = document.getElementById('txtEmail').value;
                   
                   if(req1===''||req2===''){
                        alert('Kindly fill the required fields')
                   }else{
                        next_tab.style.display = 'block';
                        current_tab.style.display = 'none';
                   }
                   
                   break;
                case 'tab_2_next':
                    var next_tab =  document.getElementById('tab3')
                    var current_tab = document.getElementById('tab2')
                    var req3, req4, req5,req6;
                    req3 = document.getElementById('f_name').value;
                    req4 = document.getElementById('l_name').value;

                    req5 = document.getElementById('date1').value;
                    req6 = document.getElementById('date2').value;


                   
                    if(req5===''||req6==='' || req3 === '' || req4 === ''){
                        alert('Kindly fill the required fields')
                    }else{
                        next_tab.style.display = 'block';
                        current_tab.style.display = 'none';
                    }
                    break;
                case 'tab_3_next':
                    
                    var next_tab =  document.getElementById('tab4')
                    var current_tab = document.getElementById('tab3')

                    next_tab.style.display = 'block';
                    current_tab.style.display = 'none';



                    
                    break;
                case 'tab_4_next':
                    var next_tab =  document.getElementById('tab5')
                    var current_tab = document.getElementById('tab4')

                    radio_btn1 = document.getElementById('is_runaway_1').checked
                    radio_btn2 = document.getElementById('is_runaway_2').checked
                    radio_btn3 = document.getElementById('is_runaway_3').checked
                    req7 = document.getElementById('c_run_count').checked

                    if(radio_btn1 === 'true' || radio_btn2 === 'true' || radio_btn3 === 'true' || req7 === ''){
                        alert('Kindly fill the required fields')
                    }else{
                        next_tab.style.display = 'block';
                        current_tab.style.display = 'none';
                    }



                    
                    


                    break;
                case 'tab_5_next':
                    var next_tab =  document.getElementById('tab6')
                    var current_tab = document.getElementById('tab5')

                    var req8 = document.getElementById('c_len_stay').value;
                    radio_btn4 = document.getElementById('is_child_gang_yes').checked
                    radio_btn5 = document.getElementById('is_child_gang_no').checked
                    radio_btn6 = document.getElementById('is_child_gang_other').checked
                    radio_btn7 = document.getElementById('is_child_harr_yes').checked
                    radio_btn8 = document.getElementById('is_child_harr_no').checked
                    radio_btn9 = document.getElementById('is_child_harr_other').checked

                    if(req8 === '' || radio_btn4 === 'true' || radio_btn5 === 'true' || radio_btn6 === 'true' || radio_btn7 === 'true' || radio_btn8 === 'true' || radio_btn9 === 'true'){
                        alert('Kindly fill the required fields')
                    }else{
                        next_tab.style.display = 'block';
                        current_tab.style.display = 'none';
                    }


        
                    break;
                case 'tab_6_next':
                    var next_tab =  document.getElementById('tab7')
                    var current_tab = document.getElementById('tab6')
                    next_tab.style.display = 'block';
                    current_tab.style.display = 'none';
                    break;
                case 'tab_7_next':
                    var next_tab =  document.getElementById('tab8')
                    var current_tab = document.getElementById('tab7')

                    radio_btn10 = document.getElementById('child_gender_male').checked
                    radio_btn11 = document.getElementById('child_gender_female').checked
                    radio_btn12 = document.getElementById('child_gender_unde').checked
                    radio_btn13 = document.getElementById('child_ethincity1').checked
                    radio_btn14 = document.getElementById('child_ethincity2').checked
                    radio_btn15 = document.getElementById('child_ethincity3').checked
                    radio_btn16 = document.getElementById('child_ethincity4').checked
                    radio_btn17 = document.getElementById('child_ethincity5').checked
                    radio_btn18 = document.getElementById('child_ethincity6').checked
                    radio_btn19 = document.getElementById('child_ethincity7').checked
                    radio_btn20 = document.getElementById('child_ethincity8').checked
                    if(radio_btn10 === 'true' || radio_btn11 === 'true' || radio_btn12 === 'true' || radio_btn13 === 'true' || radio_btn14 === 'true' || radio_btn15 === 'true' || radio_btn16 === 'true' || radio_btn17 === 'true' || radio_btn18 === 'true' || radio_btn19 === 'true' || radio_btn20 === 'true'){
                        alert('Kindly fill the required fields')
                    }else{
                        next_tab.style.display = 'block';
                        current_tab.style.display = 'none';
                    }


                  


                 
                    break;
                case 'tab_8_next':
                    var next_tab =  document.getElementById('tab9')
                    var current_tab = document.getElementById('tab8')
                    radio_btn21 = document.getElementById('is_child_dis1').checked
                    radio_btn22 = document.getElementById('is_child_dis2').checked
                    radio_btn23 = document.getElementById('is_child_dis3').checked
                    if(radio_btn21 === 'true' || radio_btn22 === 'true' || radio_btn23 === 'true' ){
                        alert('Kindly fill the required fields')
                    }else{
                        next_tab.style.display = 'block';
                        current_tab.style.display = 'none';
                    }


                    break;
                case 'tab_9_next':
                    var next_tab =  document.getElementById('tab10')
                    var current_tab = document.getElementById('tab9')


                    break;
                case 'tab_10_next':
                    // var next_tab =  document.getElementById('tab8')
                    var current_tab = document.getElementById('tab10')

                    radio_btn24 = document.getElementById('is_child_court_order1').checked
                    radio_btn25 = document.getElementById('is_child_court_order2').checked
                    radio_btn26 = document.getElementById('is_child_court_order3').checked
                    req9 = document.getElementById('inputFileToLoad').value
                    radio_btn28 = document.getElementById('is_child_report1').checked
                    radio_btn29 = document.getElementById('is_child_report2').checked

                    if(radio_btn24 === 'true' || radio_btn25 === 'true' || radio_btn26 === 'true' || radio_btn28 === 'true' || radio_btn29 === 'true' || req9 ==='' ){
                        alert('Kindly fill the required fields')
                    }else{
                        current_tab.style.display = 'none';
                    }

                    break;




                case 'tab_2_pre':
                    var pre_tab =  document.getElementById('tab1')
                    var current_tab = document.getElementById('tab2')
                    pre_tab.style.display = 'block';
                    current_tab.style.display = 'none';
                    break;
                case 'tab_3_pre':
                    var pre_tab =  document.getElementById('tab2')
                    var current_tab = document.getElementById('tab3')
                    pre_tab.style.display = 'block';
                    current_tab.style.display = 'none';
                    break;
                case 'tab_4_pre':
                    var pre_tab =  document.getElementById('tab3')
                    var current_tab = document.getElementById('tab4')
                    pre_tab.style.display = 'block';
                    current_tab.style.display = 'none';
                    break;
                case 'tab_5_pre':
                    var pre_tab =  document.getElementById('tab4')
                    var current_tab = document.getElementById('tab5')
                    pre_tab.style.display = 'block';
                    current_tab.style.display = 'none';
                    break;
                case 'tab_6_pre':
                    var pre_tab =  document.getElementById('tab5')
                    var current_tab = document.getElementById('tab6')
                    pre_tab.style.display = 'block';
                    current_tab.style.display = 'none';
                    break;
                case 'tab_7_pre':
                    var pre_tab =  document.getElementById('tab6')
                    var current_tab = document.getElementById('tab7')
                    pre_tab.style.display = 'block';
                    current_tab.style.display = 'none';
                    break;
                case 'tab_8_pre':
                    var pre_tab =  document.getElementById('tab7')
                    var current_tab = document.getElementById('tab8')
                    pre_tab.style.display = 'block';
                    current_tab.style.display = 'none';
                    break;

                case 'tab_9_pre':
                    var pre_tab =  document.getElementById('tab8')
                    var current_tab = document.getElementById('tab9')
                    pre_tab.style.display = 'block';
                    current_tab.style.display = 'none';
                    break;

                case 'tab_10_pre':
                    var pre_tab =  document.getElementById('tab9')
                    var current_tab = document.getElementById('tab10')
                    pre_tab.style.display = 'block';
                    current_tab.style.display = 'none';
                    break;
                



            }
        }
    </script>