$(document).ready(function() {
    // Initially hide all language elements except the default language
    $('[lang="es"], [lang="zh"], [lang="en"]').hide();

    // Change event listener for the language dropdown
    $('#lang-switch').change(function () {
        var lang = $(this).val();
        // Hide all language elements
        $('[lang]').hide();
        // Show the selected language element
        $('[lang="' + lang + '"]').show();

        // Update the link based on the selected language
        var mapPage = "";
        switch (lang) {
            case 'en':
                mapPage = "map.html";
                break;
            case 'es':
                mapPage = "esmap.html";
                break;
            case 'zh':
                mapPage = "zhmap.html";
                break;
            default:
                mapPage = "map.html";
        }
        $('a[href="map.html"]').attr('href', mapPage);
    });
});
