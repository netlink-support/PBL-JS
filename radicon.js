var radicon = {
    url: "http://beta.netlink.co.in/elecon/",
    ajaxCustom: function (url, data, callback, callback_custom_variable_1)
    {
        $.ajax({
            url: url,
            data: data,
            method: 'POST',
            async: true,
            success: function (ret) {
                if (typeof callback === "function") {
                    if (typeof callback_custom_variable_1 !== "undefined")
                    {
                        callback(ret, callback_custom_variable_1);
                    } else
                    {
                        callback(ret);
                    }
                }
            },
            error: function (err) {
                alert('Error, Please try again later');
            }
        });
    },
    changeLanguage: function (value)
    {
        if (value == '' || value == 0)
        {
            alert('Please select language');
            return false;
        }

        $.ajax({
            url: radicon.ajax_url,
            data: {
                language: value
            },
            method: 'POST',
            async: false,
            success: function (ret) {
                window.location.reload();
            },
            error: function (err) {
                alert('Error changing language, Please try again later');
            }
        });
    },
    subscribeNews: function (email)
    {
        $('#news_sub_info').html('')
        var data = {
            email: email
        }
        radicon.ajaxCustom(radicon.url + 'ajax/news_sub/', data, function (html) {
            $('#news_sub_info').html(html)
        })
    },
    showCustomError: function (err, er_type)
    {
        if (typeof er_type !== 'undefined' && er_type !== '')
        {
            if (er_type == 'error')
            {
                $('.alert').removeClass('alert-warning');
                $('.alert').addClass('alert-danger');
            }
            if (er_type == 'info')
            {
                $('.alert').removeClass('alert-warning');
                $('.alert').addClass('alert-info');
            }
            if (er_type == 'success')
            {
                $('.alert').removeClass('alert-warning');
                $('.alert').addClass('alert-success');
            }
        } else
        {
            $('.alert').removeClass('alert-danger');
            $('.alert').removeClass('alert-info');
            $('.alert').removeClass('alert-success');
            $('.alert').removeClass('alert-warning');
            $('.alert').addClass('alert-warning');
        }
        $('#alert_text').html(err);
        $('.alert-msg').show();
        $('.alert').show();
        $('.alert-msg').delay(6000).fadeOut(500);

    },
    isValidEmailAddress: function (email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    },
    isValidNumber: function (number) {
        var regex = /^[- +()]*[0-9][- +()0-9]*$/;
        return regex.test(number);
    },
    submitModalForm: function (form_id, type)
    {

        //$.blockUI({css: {backgroundColor: '#FFFFFF', zIndex: 9999999}, message: '<p style="font-size: 24px;margin:0; color:#413E3D">One moment please...</p>'});
        var data = $(form_id).serialize();

        var modal_id = $('#modal_id').val();
        var path = '';
        if (type == 'download')
        {
            if ($('#catalog_email').val() == '')
            {
                alert('Please enter email');
                return false;
            }
            if (!radicon.isValidEmailAddress($('#catalog_email').val()))
            {
                alert('Please enter valid email id');
                return false;
            }
            if ($('#catalog_name').val() == '')
            {
                alert('Please enter name');
                return false;
            }
            var nameRegex = /^[A-Za-z]+$/;
            if (!nameRegex.test($('#catalog_name').val())) {
                alert('Name should contain only alphabetic characters');
                return false;
            }
            if ($('#catalog_name').val().length < 2 || $('#catalog_name').val().length > 50) {
                alert('Name should be between 2 and 50 characters');
                return false;
            }
            if ($('#catalog_mobile').val() == '')
            {
                alert('Please enter mobile number');
                return false;
            }
            var mobileNumber = $('#catalog_mobile').val();
            var mobileRegex = /^[0-9]+$/; 
            if (!mobileRegex.test(mobileNumber)) {
                alert('Mobile number should contain only digits (0-9)');
                return false;
            }
        
            if (mobileNumber.length < 10 || mobileNumber.length > 15) {
                alert('Mobile number should be between 10 and 15 digits');
                return false;
            }
            if (!radicon.isValidNumber($('#catalog_mobile').val()))
            {
                alert('Please enter valid mobile number\nNumbers, plus sign, brackets and hyphens are allowed');
                return false;
            }
            if ($('#catalog_company').val() == '')
            {
                alert('Please enter company');
                return false;
            }
            if ($('#catalog_city').val() == '')
            {
                alert('Please enter city');
                return false;
            }
            if ($('#catalog_country').val() == '')
            {
                alert('Please enter country');
                return false;
            }
            path = 'ajax/modal_form/'
        } else if (type == 'inquiry')
        {
            if ($('#inquiry_email').val() == '')
            {
                alert('Please enter email');
                return false;
            }

            if ($('#inquiry_name').val() == '')
            {
                alert('Please enter name');
                return false;
            }
			var nameRegex = /^[A-Za-z]+$/;
            if (!nameRegex.test($('#inquiry_name').val())) {
                alert('Name should contain only alphabetic characters');
                return false;
            }
            if ($('#inquiry_name').val().length < 2 || $('#inquiry_name').val().length > 50) {
                alert('Name should be between 2 and 50 characters');
                return false;
            }
            if ($('#inquiry_contact').val() == '')
            {
                alert('Please enter contact number');
                return false;
            }
			 if ($('#inquiry_city').val() == '')
            {
                alert('Please enter city');
                return false;
            }
			 if ($('#inquiry_country').val() == '')
            {
                alert('Please enter country');
                return false;
            }
            if (!radicon.isValidNumber($('#inquiry_contact').val()))
            {
                alert('Please enter valid mobile number\nNumbers, plus sign, brackets and hyphens are allowed');
                return false;
            }
			var inquirymobileNumber = $('#inquiry_contact').val();
            var mobileRegex = /^[0-9]+$/; 
            if (!mobileRegex.test(inquirymobileNumber)) {
                alert('Mobile number should contain only digits (0-9)');
                return false;
            }
            if (inquirymobileNumber.length < 10 || inquirymobileNumber.length > 15) {
                alert('Mobile number should be between 10 and 15 digits');
                return false;
            }
            if ($('#inquiry_company').val() == '')
            {
                alert('Please enter company name');
                return false;
            }
            path = 'ajax/product_inquiry/'
        } else if (type == 'div_inquiry')
        {
            if ($('#inquiry_email_d').val() == '')
            {
                alert('Please enter email');
                return false;
            }
            if ($('#inquiry_name_d').val() == '')
            {
                alert('Please enter name');
                return false;
            }
            path = 'ajax/division_inquiry/'
        }

        $(modal_id).modal('hide');
        $($('#modal_id_c').val()).modal('hide');
        $($('#modal_id_d').val()).modal('hide');

        if (type == 'download')
        {
            radicon.showCustomError('Thank you for your interest in PBL products, a link to download the catalog/brochure has been sent to <b>' + $('#catalog_email').val() + '</b>.', 'success');
        } else if (type == 'div_inquiry' || type == 'inquiry')
        {
            radicon.showCustomError('Thank you for your interest in PBL products, we will revert shortly.', 'success');
        }

        radicon.ajaxCustom(radicon.url + path, data, function (html) {

        });

        //$.unblockUI();
    }
}


