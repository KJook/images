
	if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
		console.log("hide Live2D");
		$("#live2dc").hide();
		// 执行相应代码或直接跳转到手机页面
	} else {
		console.log("init Live2D");
		var resourcesPath = 'https://i.kjqaq.com/live2d/';
		var backImageName = '';
		var modelDir = ['Hiyori'];
		initDefine(resourcesPath, backImageName, modelDir);
	}
