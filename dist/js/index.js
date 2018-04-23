(function($){
    // dom
    const $menuTrigger = $('.cover--menu-trigger'),
          $menuTriggerIcon = $('.cover--menu-trigger--icon'),
          $menu = $('.cover--menu'),
          $menuOverlay = $('.cover--menu-overlay');

    $menuTrigger.on('click', () => {
        if (!$menu.is(':visible')) {
            $menu.css('display', 'flex');
            $menuOverlay.css('display', 'block');
            $menuTriggerIcon.removeClass('fa-bars').addClass('fa-times');
        } else {
            $menu.css('display', 'none');
            $menuOverlay.css('display', 'none');
            $menuTriggerIcon.removeClass('fa-times').addClass('fa-bars');
        }
    });
})(jQuery)