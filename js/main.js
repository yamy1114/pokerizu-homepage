$('.logo_twitter').on('click', function(){
	window.open('https://twitter.com/share?url=""&text=簡単操作のリズムゲーム「ポケリズ」（Androidアプリ）%0Aウェブサイト：http://yamy-works.com/pokerizu/%0aGoogle Play：https://play.google.com/store/apps/details?id=jp.yamy.pokerizu&hl=ja%0A#pokerizu','','width=600,height=400');
});

$('.logo_facebook').on('click', function(){
	window.open('https://www.facebook.com/share.php?u=http://yamy-works.com/pokerizu/','','width=600,height=400');
});

$(function(){
	$(".acMenu dt").on("click", function() {
		$(this).next().slideToggle();
		if($(this).children().text() == 'expand_more'){
			$(this).children().text('expand_less');
		}else{
			$(this).children().text('expand_more');
		}
		//$(this).remove();
	});
});

$('.go-top-btn').on('click', function(){
	$('body').animate({'scrollTop': 0}, 500);
});

$(function(){
	$('h5').append('　<i class="material-icons grey-text text-darken-2" style="font-size:30px; vertical-align: -5px">settings</i>');	
	$('h5').prepend('<i class="material-icons grey-text text-darken-2" style="font-size:30px; vertical-align: -5px">settings</i>　');	
});

// composer link
/*$(function(){
	var linklist = {
		'削除': 'http://sakuzyo.net/',
		'ginkiha': 'http://ginkiha.info/',
		'': '',
	}

	var entries = $('td');
	var length = entries.length;
	for(var i=0; i<length; i++){
		var name = $(entries[i]).text();
		var url = linklist[name];
		if(url != null){
			$(entries[i]).text('');
			$(entries[i]).append('<a href="' + url + '" target="black_">' + name + '</a>');
		}
	}
});
*/

// language
$(function(){
	$('.en').hide();	
});

$('.btn-translate').on('click', function(){
	$('.btn-lang').toggle();
	$('.btn-lang').css('opacity', 0);
	$('.btn-lang').animate({'opacity':'1'}, 10);
});

$('.btn-lang').on('click', function(){
	$('.btn-lang').toggle();
	var lang = $(this).text();
	if(lang == '日本語'){
		$('.ja').show();
		$('.en').hide();
	}else if(lang == 'English'){
		$('.ja').hide();
		$('.en').show();		
	}
});
