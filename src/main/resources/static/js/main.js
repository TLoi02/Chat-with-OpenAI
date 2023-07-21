function createList(){
    const checkList = JSON.parse(localStorage.getItem("messages"));
    if (checkList === null){
        const listMessage = [
            {
                id: 1,
                message: 'Hãy đặt câu hỏi cho tôi!'
            }
        ];
        localStorage.setItem('messages', JSON.stringify(listMessage));
    }
}

function setList(item){
    var getListMessage = JSON.parse(localStorage.getItem("messages"));
    getListMessage.push(item);
    localStorage.setItem('messages', JSON.stringify(getListMessage));
};

function getList(){
    return JSON.parse(localStorage.getItem("messages"));
};

function hanelReset(){
    localStorage.removeItem("messages")
}

function renderMessage(){
    const contentHTML = document.querySelector('.card-body');
    const handelHTML = getList().map((value)=>{
        //handel if type message is user
        if (value.id % 2 === 0){
            return `
                <div class="d-flex flex-row justify-content-end mb-4">
                    <div class="p-3 me-3 border" style="border-radius: 15px; background-color: #fbfbfb;">
                    <p class="small mb-0">${value.message}</p>
                    </div>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp" alt="avatar 1"
                    style="width: 45px; height: 100%;">
                </div>
            `;
        }
        else{
            return `
                <div class="d-flex flex-row justify-content-start mb-4">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" alt="avatar 1"
                    style="width: 45px; height: 100%;">
                    <div class="p-3 ms-3" style="border-radius: 15px; background-color: rgba(57, 192, 237,.2);">
                    <p class="small mb-0">${value.message}</p>
                    </div>
                </div>
            `;
        }
    });
    handelHTML.join("");
    contentHTML.innerHTML =handelHTML;
}

function handelSendMessage(){
    const getIdLastItem = getList().pop().id;
    const contentHTML = document.querySelector('.card-body');
    const inputHTML = document.querySelector("#textAreaExample");

    //last message for user
    if (getIdLastItem % 2 === 0 || inputHTML.value.trim() === ""){

        if (getIdLastItem % 2 === 0){
            alert("Bạn cần chờ trả lời trước khi đặt câu hỏi mới!");
            inputHTML.value ="";
        }
        else{
            alert("Bạn chưa nhập câu hỏi!");
            inputHTML.value ="";
        }

    }
    else{
        const newMessage = {
            id: getIdLastItem+1,
            message: inputHTML.value
        };

        setList(newMessage);

        //handel call API to send message

        inputHTML.value ="";
    }
}

function start(){
    createList();
    renderMessage();
}

start();