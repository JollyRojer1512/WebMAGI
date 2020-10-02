window.onload = function(){
    
    const background = document.getElementsByTagName("background");
    const order = document.getElementsByClassName("order");
    const box = document.getElementsByClassName("ourcontacts");
    const container = document.getElementsByClassName("ourcontacts_container");
    const change = document.getElementsByClassName("change");

    for(let i = 0; i < order.length; i++){
        order[i].addEventListener('click', function(){
            box[0].classList.toggle('inactive');
            background[0].classList.toggle('active');
            container[0].classList.toggle('inactive');
            change[0].addEventListener('click', toggleWorkers);
            change[1].addEventListener('click', toggleWorkers);
        });
    }
    
    background[0].addEventListener('click', function(){
        box[0].classList.toggle('inactive');
        background[0].classList.toggle('active');
        container[0].classList.add('inactive');
        container[1].classList.add('inactive');
    });
    
    // if(!box[0].classList.contains('inactive'))
    //     body[0].addEventListener('click', function(){
    //         box[0].classList.add('inactive');
    //     });

    function toggleWorkers(){
        container[0].classList.toggle('inactive');
        container[1].classList.toggle('inactive');
    }

};