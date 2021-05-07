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
    handle_overlay: () => {
        let overlay = document.querySelector('.side-overlay');
        overlay.addEventListener('click', e => {
            if (e.target.classList.contains('side-overlay')) {
                overlay.classList.toggle('active');
            }
        })
    },
    handle_order_dropdown: () => {
        let select = document.querySelector('.custom-select-menu');
        let dropdown = document.querySelector('.select-drop-down');
        let arrow = document.querySelector('.select-order-arrow i');
        select.addEventListener('click', e => {
            dropdown.classList.toggle('active');
            arrow.classList.toggle('active');
        });
    },
    run: () => {
        console.log('SS running...');
        ss.handle_new_order();
        ss.handle_order_dropdown();
        ss.handle_overlay();
    }
}

ss.run();

