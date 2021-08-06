
$(".video-button").on("click",function()
{
	var id = $(this).attr('data-id');
	var player = new Plyr('.ty_video_' + id);

	player.on('ready', function(event) 
	{
		var instance = event.detail.plyr;
		instance.on('enterfullscreen', function() 
		{
			player.stop();
			player.volume = 1;
			player.play();
		});
		instance.on('exitfullscreen', function() 
		{
					player.volume = 0;
					player.stop();
					player.destroy();
					e.close();
			
		});
	});
	player.fullscreen.enter();
});
