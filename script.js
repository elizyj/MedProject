$(document).ready(function() {
    $('[lang="es"], [lang="zh"]').hide();

    $('#lang-switch').change(function () {
        var lang = $(this).val();
        $('[lang]').hide();
        switch (lang) {
            case 'en': 
                $('[lang="en"]').show();
                break;
            case 'es':
                $('[lang="es"]').show();
                break;
            case 'zh':
                $('[lang="zh"]').show();
                break;
            default:
                $('[lang="en"]').show();
        }
    });
});
