$(Document).ready(function() {
    
    $(`.add`).click(`submit`, function(e) {
        e.preventDefault()
        
        let item = $(`.in`).val()
        $(`li`).append(`<div class="tk">${item}</div>`)
            
        .on(`click`, `div`, function(){
            $(`.tk`).css("text-decoration", "line-through");

        })
    })
})
