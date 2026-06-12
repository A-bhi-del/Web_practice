// const users = ["abhi", "Tanu", "Tanuu", "Taniye", "sweetu"];

async function handleclick(){
    
    const div = document.querySelector('#message');
    try{
        const input = document.querySelector('input');
        if(input.value.trim() === ""){
            alert("please enter some text");
            return ;
        }
        div.textContent = "Loading...";
        // const div2 = document.querySelector('#message2');

        const userdata = await fetch('https://jsonplaceholder.typicode.com/users');

        if(!userdata.ok){
            alert("Error");
            return;
        }

        const data = await userdata.json();
    
        const new_data = data;

        // if(input.value === ""){
        //     alert("Please enter your name");
        //     return;
        // }

        div.textContent = "";
        // div2.textContent = "";

        // if(data.length === 0){
        //     const p = document.createElement('p');
        //     p.innerHTML = `
        //         <h3>No users found</h3>`;
        //     div.appendChild(p);
        //     return;
        // }


        let found = false;

        for(let user of new_data){
            const p = document.createElement('div');
            p.className = "card";
            const temp = user.name;
            p.innerHTML = `
                <h3>${user.name}</h3>
                <p>${user.email}</p>
                <p>${user.phone}</p>
                <p>${user.website}</p>`
            if(input.value.length > temp.length){
                continue;
            }
            if(temp.toLowerCase().includes(input.value.toLowerCase())){
                found = true;
                div.appendChild(p);
            }
        }

        if(!found){
            const p = document.createElement("div");
            p.className = "card";
            p.innerHTML = `
                <h3>No users found</h3>`;
            div.appendChild(p);
        }

        // for(let user of data){
        //     const user_data = document.createElement('div');
        //     user_data.className = "card";

        //     user_data.innerHTML = `
        //         <h3>${user.name}</h3>
        //         <p>${user.email}</p>
        //         <p>${user.phone}</p>
        //         <p>${user.website}</p>
        //         <p>${user.company.name}</p>
        //     `;
        //     div.appendChild(user_data);
        // }
        // for(let user of new_data){
        //     if(input.value.length > user.name.length){
        //         continue;
        //     }
        //     if(user.name.toLowerCase().substring(0, input.value.length) == input.value.toLowerCase()){
        //         const p1 = document.createElement('p');
        //         p1.textContent = user.name;
        //         dive.appendChild(p1);
        //     }
        //     if(user.name.toLowerCase().includes(input.value.toLowerCase())){
        //         const p2 = document.createElement('p');
        //         p2.textContent = user.name;
        //         div2.appendChild(p2);
        //     }
        // }

        // for(let user of new_data){
        //     const p = document.createElement('p');
        //     p.textContent = user.name;
        //     const temp = p.textContent;
        //     if(input.value.length > temp.length){
        //         continue;
        //     }
        //     if(temp.toLowerCase().includes(input.value.toLowerCase())){
        //         dive.appendChild(p);
        //     }
        // }
    }catch(err){
        console.log(err);
        div.textContent = "something went wrong";
        alert("Error");
    }
};