
const iterateClass = (className, collection, e) => {
    collection.forEach((item) => {
        if (e.target === item) {
            for (let i = 0; i < collection.length; i++) {
                collection[i].classList.remove(className)
            }
            item.classList.add(className);
        }
    });
}


const ss = {
    handle_new_order: () => {
        let btn = document.querySelector('.hero button');
        let no_orders = document.querySelector('.no-orders');
        let with_orders = document.querySelector('.with-orders');
        let overlay = document.querySelector('.side-overlay');
        btn.addEventListener('click', e => {
            no_orders.classList.toggle('hide');
            with_orders.classList.toggle('hide');
            with_orders.style.animation = 'bounceInUp 1s ease forwards';
            overlay.classList.toggle('active');
        });
    },
    handle_overlay: {
        activate_side_overlay: () => {
            let overlay = document.querySelector('.side-overlay');
            let panel = overlay.querySelector('.panel-right');
            overlay.addEventListener('click', e => {
                if (e.target.classList.contains('closeable')) {
                    panel.classList.add('innactive');
                    setTimeout(() => {
                        overlay.classList.toggle('active');
                    }, 600)
                }
            });
        }
    },
    handle_order_dropdown: () => {
        let select = document.querySelector('.dashboard-info .custom-select-menu');
        let dropdown = document.querySelector('.dashboard-info .select-drop-down');
        let arrow = document.querySelector('.dashboard-info .select-order-arrow i');
        select.addEventListener('click', e => {
            dropdown.classList.toggle('active');
            arrow.classList.toggle('active');
        });
    },
    add_products_dropdown: {
        select : document.querySelector('.add-products-flow .custom-select-menu'),
        dropdown : document.querySelector('.add-products-flow .dropdown-menu'),
        arrow : document.querySelector('.select-arrow i'),

        handle_filter: () => {
            
            ss.add_products_dropdown.select.addEventListener('click', e => {
                ss.add_products_dropdown.dropdown.classList.toggle('active');
            });
        }, 
        handle_selection: (e) => {
            ss.add_products_dropdown.dropdown.addEventListener('click', e => {
                let li = document.querySelectorAll('.add-products-flow .dropdown-menu li');
                let selection_text = document.querySelector('.selected-option');
                li.forEach((item) => {
                    
                    if (e.target === item) {
                        iterateClass('active', li, e);
                        selection_text.textContent = item.textContent;
                        ss.add_products_dropdown.dropdown.classList.toggle('active');
                        
                    }
                });
            });
        }
    },



    run: () => {
        console.log('SS running...');
        ss.handle_new_order();
        ss.handle_order_dropdown();
        ss.handle_overlay.activate_side_overlay();
        ss.add_products_dropdown.handle_filter();
        ss.add_products_dropdown.handle_selection();
    }
}

ss.run();



let sets_combos = document.querySelector('.sets-combos .catalog');
product_data[0].products.forEach((product, index) => {
    sets_combos.innerHTML += 
    `
    <div class="product-card">
        <div class="info-container">
            <img src="${product.image_thumb}" alt="">
            <div class="group">
                <h3>${product.name}</h3>
                <p class="price"><span class="strike">$${product.price}.00 USD</span> <br> $${product.ss_price}.00 USD</p>
            </div>
        </div>
        <div class="btn-container">
            <button class="btn-link default">Quick View</button>
            <button class="btn-link blue-btn">Add To Bag</button>
        </div>
    </div>
    `
});