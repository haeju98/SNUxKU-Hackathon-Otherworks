$(document).ready(() => {
    $(".cell").click((e) => {
        const $this = $(e.currentTarget);
        const $wrapper = $this.parent();
        const id = $wrapper.attr('id');
        const $rowHeader = $wrapper.parent().siblings('.row').children(`#${id}`);
        console.log(id);
        if ($wrapper.hasClass('large')) {
            $wrapper.css('height', '27px');
            $rowHeader.css('height', '27px');
        } else {
            $wrapper.css('height', '100px');
            $rowHeader.css('height', '100px');
        }
        $wrapper.toggleClass('large');
    });


    }
);