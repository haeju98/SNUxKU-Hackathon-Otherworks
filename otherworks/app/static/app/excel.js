$(document).ready(() => {
    $(".row-header").click((e) => {
        const $wrapper = $(e.currentTarget);
        const id = $wrapper.attr('id');
        
        const $cellWrapper = $wrapper.parent().siblings('.table').children(`#${id}`);
        console.log(id);
        if ($wrapper.hasClass('large')) {
            $wrapper.css('height', '27px');
            $cellWrapper.css('height', '27px');
        } else {
            $wrapper.css('height', '70px');
            $cellWrapper.css('height', '70px');
        }
        $wrapper.toggleClass('large');
    });


    $(".cell.content").dblclick((e) => {
        const $this = $(e.currentTarget);
        const $contentWrapper = $this.parent().parent().parent()
        const $fakeWrapper = $this.parent().parent().parent().siblings('.cells')
        
        $($contentWrapper).fadeToggle(
            0
        );
        $($fakeWrapper).fadeToggle(
            0
        );
    });

    $('.omok-cell').click(function (e){
        const $this = $(e.currentTarget);
        const $board = $this.parent().parent();
        const $greyAttack = document.querySelector("#grey-attack");
        const $greenAttack = document.querySelector("#green-attack");
        const $greyWin = document.querySelector("#grey-win");
        const $greenWin = document.querySelector("#green-win");
        const $allBlocks = document.querySelectorAll(".omok-cell");

        if ($this.hasClass("checked")){
            return false;
        }
        else {
            if ($board.hasClass("green-turn")){
                $this.css('background-color', 'green');
                $this.toggleClass("checked green");
                $board.toggleClass("green-turn");
                $($greyAttack).fadeToggle(
                    0
                );
                $($greenAttack).fadeToggle(
                    0
                );
            }
            else{
                $this.css('background-color', '#adadad');
                $this.toggleClass("checked grey");
                $board.toggleClass("green-turn");
                $($greyAttack).fadeToggle(
                    0
                );
                $($greenAttack).fadeToggle(
                    0
                );
            }
        }

        var gameResult = 0;
        // 승패 확인
        
        // 가로 확인
        if ($board.hasClass("green-turn")){
            var $list = document.querySelectorAll('.grey');
            var len = $($list).length;

            for(var k=0 ; k < len ; k++){
                var $block = $list[k];
                var id = $($block).attr('id');
                var yPos = parseInt(id[0]);
                var xPos = parseInt(id[1]); 
                console.log('x좌표');
                console.log(xPos);
                console.log('y좌표');
                console.log(yPos);
                // 가로확인
                if (xPos >4){
                }
                else {
                    var counter = 0;
                    for(var j=1; j<5; j++){
                        var temp=xPos+j;
                        var x = temp.toString();
                        var y = yPos.toString();
                        var newID = y+x;
                        $anchor =  document.getElementById(newID);
                        if ($($anchor).hasClass("checked grey")){
                            counter += 1;
                        }    
                    }
                    
                    if(counter == 4){
                        gameResult = 1;
                        $($greyAttack).css('display', 'none');
                        $($greenAttack).css('display', 'none');
                        $($greyWin).css('display', 'block');
                        break;
                    }
                }
                // 세로확인
                if (yPos >4){
                }
                else {
                    var counter = 0;
                    for(var j=1; j<5; j++){
                        var temp=yPos+j;
                        var x = xPos.toString();
                        var y = temp.toString();
                        var newID = y+x;
                        $anchor =  document.getElementById(newID);
                        if ($($anchor).hasClass("checked grey")){
                            counter += 1;
                        }    
                    }
                    
                    if(counter == 4){
                        gameResult = 1;
                        $($greyAttack).css('display', 'none');
                        $($greenAttack).css('display', 'none');
                        $($greyWin).css('display', 'block');
                        break;
                    }
                }

                
                // 대각선확인 오아
                if(xPos>4 || yPos >4 ){
                }
                else {
                    
                    var counter = 0;
                    for(var j=1; j<5; j++){
                        var xtemp=xPos+j;
                        var ytemp=yPos+j;
                        var x = xtemp.toString();
                        var y = ytemp.toString();
                        var newID = y+x;
                        $anchor =  document.getElementById(newID);
                        if ($($anchor).hasClass("checked grey")){
                            counter += 1;
                        }    
                    }
                    
                    if(counter == 4){
                        gameResult = 1;
                        $($greyAttack).css('display', 'none');
                        $($greenAttack).css('display', 'none');
                        $($greyWin).css('display', 'block');
                        break;
                    }
                }
                // 대각선확인 왼아
                if(xPos<4 || yPos>4){

                }
                else {
                    
                    var counter = 0;
                    for(var j=1; j<5; j++){
                        var xtemp=xPos-j;
                        var ytemp=yPos+j;
                        var x = xtemp.toString();
                        var y = ytemp.toString();
                        var newID = y+x;    
                        console.log(newID);
                        $anchor =  document.getElementById(newID);
                        if ($($anchor).hasClass("checked grey")){
                            counter += 1;
                        }    
                    }
                    
                    if(counter == 4){
                        gameResult = 1;
                        $($greyAttack).css('display', 'none');
                        $($greenAttack).css('display', 'none');
                        $($greyWin).css('display', 'block');
                        break;
                    }
                }


            }
            
        }
        else{
            // 초록승리 확인
            var $list = document.querySelectorAll('.green');
            var len = $($list).length;

            for(var k=0 ; k < len ; k++){
                var $block = $list[k];
                var id = $($block).attr('id');
                var yPos = parseInt(id[0]);
                var xPos = parseInt(id[1]); 

                // 가로확인
                if (xPos >4){
                    continue;
                }
                else {
                    var counter = 0;
                    for(var j=1; j<5; j++){
                        var temp=xPos+j;
                        var x = temp.toString();
                        var y = yPos.toString();
                        var newID = y+x;
                        $anchor =  document.getElementById(newID);
                        if ($($anchor).hasClass("checked green")){
                            counter += 1;
                        }    
                    }
                    
                    if(counter == 4){
                        gameResult = 1;
                        $($greyAttack).css('display', 'none');
                        $($greenAttack).css('display', 'none');
                        $($greenWin).css('display', 'block');
                        break;
                    }
                }
                // 세로확인
                if (yPos >4){
                    continue;
                }
                else {
                    var counter = 0;
                    for(var j=1; j<5; j++){
                        var temp=yPos+j;
                        var x = xPos.toString();
                        var y = temp.toString();
                        var newID = y+x;
                        $anchor =  document.getElementById(newID);
                        if ($($anchor).hasClass("checked green")){
                            counter += 1;
                        }    
                    }
                    
                    if(counter == 4){
                        gameResult = 1;
                        $($greyAttack).css('display', 'none');
                        $($greenAttack).css('display', 'none');
                        $($greenWin).css('display', 'block');
                        break;
                    }
                }

                 // 대각선확인 오아
                if(xPos>4 || yPos >4 ){
                }
                else {
                    
                    var counter = 0;
                    for(var j=1; j<5; j++){
                        var xtemp=xPos+j;
                        var ytemp=yPos+j;
                        var x = xtemp.toString();
                        var y = ytemp.toString();
                        var newID = y+x;
                        $anchor =  document.getElementById(newID);
                        if ($($anchor).hasClass("checked green")){
                            counter += 1;
                        }    
                    }
                    
                    if(counter == 4){
                        gameResult = 1;
                        $($greyAttack).css('display', 'none');
                        $($greenAttack).css('display', 'none');
                        $($greenWin).css('display', 'block');
                        break;
                    }
                }
                // 대각선확인 왼아
                if(xPos<4 || yPos>4){

                }
                else {
                    
                    var counter = 0;
                    for(var j=1; j<5; j++){
                        var xtemp=xPos-j;
                        var ytemp=yPos+j;
                        var x = xtemp.toString();
                        var y = ytemp.toString();
                        var newID = y+x;    
                        console.log(newID);
                        $anchor =  document.getElementById(newID);
                        if ($($anchor).hasClass("checked green")){
                            counter += 1;
                        }    
                    }
                    
                    if(counter == 4){
                        gameResult = 1;
                        $($greyAttack).css('display', 'none');
                        $($greenAttack).css('display', 'none');
                        $($greenWin).css('display', 'block');
                        break;
                    }
                }

                
                


            }
        }
        
        if (gameResult ==1) {
            $($allBlocks).addClass('checked');
            $reset = document.querySelector("#reset_game");
            $($reset).fadeToggle(
                0
            );
        }
    });


    $("#reset_game").click((e) => {
        const $reset = $(e.currentTarget);
        const $allBlocks = document.querySelectorAll(".omok-cell");
        const $greyBlocks = document.querySelectorAll(".grey");
        const $greenBlocks = document.querySelectorAll(".green");
        const $greyAttack = document.querySelector("#grey-attack");
        const $greenAttack = document.querySelector("#green-attack");
        const $greyWin = document.querySelector("#grey-win");
        const $greenWin = document.querySelector("#green-win");
        const $board = document.querySelector('.omok-board');

        $($allBlocks).toggleClass('checked');
        $($allBlocks).css('background-color', 'white');
        $($greyBlocks).toggleClass('grey');
        $($greenBlocks).toggleClass('green');
        if ($($board).hasClass("green-turn")){
            $($board).toggleClass("green-turn");
        }
        
        $($reset).fadeToggle(
            0
        );
        $($greyAttack).fadeToggle(
            0
        );
        $($greyWin).css('display', 'none');
        $($greenAttack).css('display', 'none');
        $($greenWin).css('display', 'none');
    });


    $('.select-novel').submit((e) => {
        e.preventDefault();
        console.log('form submitted');
        const $this = $(e.currentTarget);
        const title = $this.data('title');
        const csrfmiddlewaretoken = $this.data('csrfmiddlewaretoken');
    
        $.ajax({
            type: 'POST',
            url: `/excel/`, 
            data: { 
                title: title,
                csrfmiddlewaretoken: csrfmiddlewaretoken,
            },
            dataType: 'json',
            success: function(response) { 
                console.log(response);
                const str = `
                    <div class = "input" id="title-selector">
                        <div class="value">
                            ${response.title}
                        </div>
                        <div>
                            <a href="/excel/${response.title}/><span>보러 가기</span></a>
                            <i class="material-icons">arrow_drop_down</i>
                        </div>
                    </div>
                `;
                
                const $titleSelector = document.querySelector("#title-selector");
                $(str).insertBefore($titleSelector);
                $titleSelector.remove();
            
            },
            error: function(response, status, error) {
                console.log(response, status, error);
            },
            complete: function(response) {
                console.log(response);
            },
        });
    });


    }
);