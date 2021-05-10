
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
const iterateClass_inverted = (className, collection, e) => {
    collection.forEach((item) => {
        if (e.target === item) {
            for (let i = 0; i < collection.length; i++) {
                collection[i].classList.add(className)
            }
            item.classList.remove(className);
        }
    });
}



const ss = {
    new_order: {
        start: () => {
            let btn = document.querySelector('.hero button');
            let no_orders = document.querySelector('.no-orders');
            let with_orders = document.querySelector('.with-orders');
            let overlay = document.querySelector('.side-overlay');
            btn.addEventListener('click', e => {
                no_orders.classList.toggle('hide');
                with_orders.classList.toggle('hide');
                with_orders.style.animation = 'bounceInUp 1s ease forwards';
                ss.overlay.open('active', closeable = false);
                ss.overlay.close();
                
            });
        }
    },
    overlay: {
        open: (classes, closeable) => {
            let overlay = document.querySelector('.side-overlay');
            overlay.classList.add(classes);
            if (closeable) {
                overlay.classList.add('closeable');
            }
        },
        close: () => {
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
        select: document.querySelector('.add-products-flow .custom-select-menu'),
        dropdown: document.querySelector('.add-products-flow .dropdown-menu'),
        arrow: document.querySelector('.select-arrow i'),

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

                let sections = document.querySelectorAll('.product-catalog.section');
                let sets = document.querySelector('.sets-combos.section');
                let skincare = document.querySelector('.skincare.section');
                let haircare = document.querySelector('.haircare.section');
                let wellness = document.querySelector('.wellness.section');
                let sections_arr = [sets, skincare, haircare, wellness];
                

                const filter = (e) => {
                    if (e.target.classList.contains('active')) {
                        sections_arr.forEach((el) => {
                            el.classList.add('hide');
                        });
                    }

                    setTimeout(() => {
                        if (e.target.textContent === 'All Products') {
                            sections_arr.forEach((el) => {
                                el.classList.remove('hide');
                            })
                        } else
                        if (e.target.textContent === 'Sets & Combos') {
                            
                            sets.classList.remove('hide');
                        } else
                        if (e.target.textContent === 'Skincare') {
                            
                            skincare.classList.remove('hide');
                        } else
                        if (e.target.textContent === 'Hair Care') {
                            
                            haircare.classList.remove('hide');
                        } else
                        if (e.target.textContent === 'Wellness') {
                            
                            wellness.classList.remove('hide');
                        }
                    }, 200)
                    
                }
                filter(e);
            });

            
            
        }
    },



    run: () => {
        console.log('SS running...');
        ss.new_order.start();
        ss.handle_order_dropdown();
        // ss.handle_overlay.activate_side_overlay();
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
        <img src="${product.image_thumb}" alt="Image of ${product.name}">
        <div class="card-content">
            <div class="name-and-info">
                <h3>${product.name}</h3>
                    <button class="btn-link round"><i class="fas fa-search"></i></button>
            </div>
            <div class="price-and-add">
                <p class="price"><span class="strike">$${product.price}.00 USD</span> <br> $${product.ss_price}.00 USD</p>
                <button class="btn-link blue-btn">Add</button>
            </div>
        </div>
    </div>
    `
});

let skincare = document.querySelector('.skincare .catalog');
product_data[1].products.forEach((product, index) => {
    skincare.innerHTML += 
    `
    <div class="product-card">
        <img src="${product.image_thumb}" alt="Image of ${product.name}">
        <div class="card-content">
            <div class="name-and-info">
                <h3>${product.name}</h3>
                    <button class="btn-link round"><i class="fas fa-search"></i></button>
            </div>
            <div class="price-and-add">
                <p class="price"><span class="strike">$${product.price}.00 USD</span> <br> $${product.ss_price}.00 USD</p>
                <button class="btn-link blue-btn">Add</button>
            </div>
        </div>
    </div>
    `
});

let haircare = document.querySelector('.haircare .catalog');
product_data[2].products.forEach((product, index) => {
    haircare.innerHTML += 
    `
    <div class="product-card">
        <img src="${product.image_thumb}" alt="Image of ${product.name}">
        <div class="card-content">
            <div class="name-and-info">
                <h3>${product.name}</h3>
                    <button class="btn-link round"><i class="fas fa-search"></i></button>
            </div>
            <div class="price-and-add">
                <p class="price"><span class="strike">$${product.price}.00 USD</span> <br> $${product.ss_price}.00 USD</p>
                <button class="btn-link blue-btn">Add</button>
            </div>
        </div>
    </div>
    `
});

let wellness = document.querySelector('.wellness .catalog');
product_data[3].products.forEach((product, index) => {
    wellness.innerHTML += 
    `
    <div class="product-card">
        <img src="${product.image_thumb}" alt="Image of ${product.name}">
        <div class="card-content">
            <div class="name-and-info">
                <h3>${product.name}</h3>
                    <button class="btn-link round"><i class="fas fa-search"></i></button>
            </div>
            <div class="price-and-add">
                <p class="price"><span class="strike">$${product.price}.00 USD</span> <br> $${product.ss_price}.00 USD</p>
                <button class="btn-link blue-btn">Add</button>
            </div>
        </div>
    </div>
    `
});