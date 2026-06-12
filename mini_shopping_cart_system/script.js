const products = [
    {
        id : 1,
        name : "Laptop",
        price : 100000
    },
    {
        id : 2,
        name : "tablet",
        price : 50000
    },
    {
        id : 3,
        name : "mobile",
        price : 30000
    }
]

// const Cart = [];
let Cart = JSON.parse(localStorage.getItem("cart")) || [];

const div = document.querySelector("#message");

for(let product of products){
    const p = document.createElement("div");
    p.classList.add("card");

    const h3 = document.createElement("h3");
    h3.textContent = product.name;

    const p2 = document.createElement("p");
    p2.textContent = product.price;

    const btn = document.createElement("button");
    btn.textContent = "Add to cart";

    btn.onclick = function () {
        const exist = Cart.find(item => item.id === product.id);

        if(exist){
            exist.quantity += 1;

            showCart();

            localStorage.setItem("cart", JSON.stringify(Cart));
            return ;
        }

        Cart.push({
            id : product.id,
            name : product.name,
            price : product.price,
            quantity : 1,
        });

        localStorage.setItem("cart", JSON.stringify(Cart));

        showCart();
    }

    p.appendChild(h3);
    p.appendChild(p2);
    p.appendChild(btn);
    div.appendChild(p);
}

function showCart(){
    let totalAmount = 0;
    const div = document.querySelector("#cart");

    div.textContent = "";

    for(let product of Cart){

        totalAmount += product.price * product.quantity;

        const p = document.createElement("div");
        p.classList.add("card");

        const h3 = document.createElement("h3");
        h3.textContent = `${product.name} x ${product.quantity}`;

        const p2 = document.createElement("p");
        p2.textContent = `Unit Price: ₹${product.price}`;

        const totalamount = document.createElement("p");
        totalamount.textContent = `Amount: ₹${product.price * product.quantity}`;

        const btn1 = document.createElement("button");
        btn1.textContent = "Increase";

        const btn2 = document.createElement("button");
        btn2.textContent = "Decrease";

        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";

        btn1.onclick = function () {
            product.quantity += 1;
            localStorage.setItem("cart", JSON.stringify(Cart));
            showCart();
        }

        btn2.onclick = function () {
            if(product.quantity === 1){
                const idx = Cart.findIndex(item => item.id === product.id);

                if(idx !== -1){
                    Cart.splice(idx, 1);
                }
            }else{
                product.quantity -= 1;
            }

            localStorage.setItem("cart", JSON.stringify(Cart));
            showCart();

        }

        delBtn.onclick = function () {
            const idx = Cart.findIndex(item => item.id === product.id);
            if(idx !== -1){
                Cart.splice(idx, 1);
                localStorage.setItem("cart", JSON.stringify(Cart));
                showCart();
            }
        }

        p.appendChild(h3);
        p.appendChild(p2);
        p.appendChild(btn1);
        p.appendChild(btn2);
        p.appendChild(delBtn);
        p.appendChild(totalamount);
        div.appendChild(p);
    }

    const total = document.createElement("p");
    total.textContent = `Total Amount: ₹${totalAmount}`;
    div.appendChild(total);
}


showCart();