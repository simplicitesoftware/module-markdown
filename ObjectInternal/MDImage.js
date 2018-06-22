MDImage.getMappedFilePath = function(f) {
	if (f.getName() == "mdImgFile")
		return this.getName() + "/" + this.getFieldValue("mdImgCode") + "." + FileTool.getExtension(f.getDocumentFromDB(this.getGrant()).getName());
};