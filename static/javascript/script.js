let parent=document.querySelector("#comments_div");
let form=document.getElementById("comment_form");
let email=document.getElementById("email");
let comments=document.getElementById("textcomments");
form.addEventListener("submit",function(e)
{
    console.log("Aschi");
    e.preventDefault();
    let thisForm=this;
    let url=thisForm.getAttribute("action");
    let method=thisForm.getAttribute("method");
    let eval=email.value.trim();
    let com=comments.value.trim();
    if(eval=="")
    {
        alert("Email Cannot Be Empty");
    }
    else if(com=="")
    {
        alert("Comments Cannot Be Empty");
    }
    else{

    $.ajax(
        {
            url: url,
            method: method,
            data:{
                email:email.value,
                message:comments.value,
                csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
            },
            success: function(data)
            {
                //create elemet
                const p=document.createElement("p");
                const b=document.createElement("b");
                const br=document.createElement("br")
                const msg=document.createElement("span");
                ///add content
                b.textContent=email.value;
                msg.textContent=comments.value;
                msg.style.marginLeft="10px";
                ///append to dom
                p.appendChild(b);
                p.appendChild(br);
                p.appendChild(msg);

                parent.insertBefore(p,parent.firstChild);
                alert("Comments Posted");
                email.value="";
                comments.value="";
            },
            error: function(data)
            {
                alert("Error Ocuured");
            }
        }
    )
    }
})