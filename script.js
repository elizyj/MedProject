$(document).ready(function() {
    // Initially hide the "Find a Doctor" button
    $('.form__button').hide();

    $('#lang-switch').change(function() {
        var lang = $(this).val();

        // Hide all language-specific content
        $('[lang]').hide();

        // Show the selected language content
        $('[lang="' + lang + '"]').show();

        // Update the "Find a Doctor" button's visibility based on the language selection
        if (lang !== "choose") { // Assuming 'en' is the default "Choose a language" option
            $('.form__button').show();
        } else {
            $('.form__button').hide();
        }

        // Update the link for the "Find a Doctor" button based on the selected language
        var mapPage = "";
        switch (lang) {
            case 'en':
                mapPage = "map.html"; // Assuming this is the default page
                break;
            case 'es':
                mapPage = "esmap.html";
                break;
            case 'zh':
                mapPage = "zhmap.html";
                break;
            default:
                mapPage = "map.html"; // Fallback to default if needed
        }
        $('a[href*="map.html"]').attr('href', mapPage); // Update all links containing 'map.html'
    });
});