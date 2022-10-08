$(document).ready(function () {
    $('.error-input').hide();

    document.getElementById('burger').onclick = function () {
        document.getElementById('header-menu').classList.add('open');
    }

    document.querySelectorAll('#header-menu *').forEach((item) => {
        item.onclick = () => {
            document.getElementById('header-menu').classList.remove('open');
        }
    })
    const loader = $('.loader');
    const orderSuccess = $('.order-success');

    $('#order-send').click( (ev) => {
        const jqType = $('#order-type');
        const jqName = $('#order-name');
        const jqPhone = $('#order-phone');

        let errorFlag = false;

        if (!jqType.val()){
            jqType.siblings('.error-input').show();
            jqType.css('border-color', 'red');
            errorFlag = true;
        } else {
            jqType.css('border-color', 'rgb(130, 19, 40)');
            jqType.siblings('.error-input').hide();
        }

        if (!jqName.val()){
            jqName.siblings('.error-input').show();
            jqName.css('border-color', 'red');
            errorFlag = true;
        } else {
            jqName.css('border-color', 'rgb(130, 19, 40)');
            jqName.siblings('.error-input').hide();
        }

        if (!jqPhone.val()){
            jqPhone.siblings('.error-input').show();
            jqPhone.css('border-color', 'red');
            errorFlag = true;
        } else {
            jqPhone.css('border-color', 'rgb(130, 19, 40)');
            jqPhone.siblings('.error-input').hide();
        }

        if (!errorFlag) {
            loader.css('display', 'flex');
            $.ajax({
                method: "POST",
                url: 'https://testologia.site/checkout',
                data: {product: jqType.val(), name: jqName.val(), phone: jqPhone.val()}
            })
                .done(function (message) {
                    loader.hide();
                    if (message.success) {
                        $('#order-cont').css('align-items', 'center');
                        $('.order-text').hide();
                        orderSuccess.show();
                    } else {
                        alert("Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ");
                    }
                })
        }

    })
});