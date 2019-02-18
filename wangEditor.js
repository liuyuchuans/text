textEditer:function(form){
	    	function uploadInit() {
	    		var editor = this;
	    		var btnId = editor.customUploadBtnId;
	    		var $fileInput = form.find('#img-upload-input');

	    		$('#' + btnId).click(function() {
	    			$fileInput.trigger('click');
	    			form.find('#fileTypeID').val("edit");
	    		});

	    		$fileInput.change(function(event) {
	    			var type = form.find('#fileTypeID').val();
	    			if(type=="edit"){
		    			elvdouEditor.progressInit($fileInput.val());
		    			//图片的上传用隐藏的文件框#cabinetDetailImage实现
		    			//这里执行图片提交操作成功后，执行elvdouEditor.progressEnd，传入上传成功的图片地址
		    			//调用上传图片接口
						function showResponse(responseText, statusText) {
				            var result =  responseText;
				            if (result.success) {
				            	elvdouEditor.progressEnd(function(){
			    					editor.command(null, 'insertHtml', '<img src="'+result.data.imgpath+'" style="max-width:100%;"/>');
			    				});
	
				            }else{
				            	//上传失败
				            	elvdouEditor.progressEnd(function(){
				            		form.find('.modal-content').message({
			                            type: 'error',
			                            content: result.errorMessage
			                        });
			    				});
				                
				            }
				        }
				    	var options = {
				                 success: showResponse, //处理完成 
				             };
				        form.find('#add-from').ajaxSubmit(options);
	    			}
				
	    		});

	    	}
	    	var edt = form.find('#cabinetDetail')[0];
	    	editor = new wangEditor(edt);

	    	editor.config.menus = [
	    						"img",
	    	   					'|',
	    	   					'bold',
	    	   					'italic',
	    	   					'underline',
	    	   					'forecolor',
	    	   					'bgcolor',
	    	   					'head',
	    	   					'eraser',
	    	   					'|',
	    	   					'unorderlist',
	    	   					'orderlist',
	    	   					'alignleft',
	    	   					'aligncenter',
	    	   					'alignright',
	    	   					'|',
	    	   					'link',
	    	   					'unlink',
	    	   					'table',
	    	   					'|',
	    	   					'source'
	    	   					
	    	   				];
	    	editor.config.customUpload = true;
	    	editor.config.customUploadInit = uploadInit;
	    	editor.create(); 
	    },