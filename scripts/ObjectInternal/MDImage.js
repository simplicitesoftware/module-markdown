MDImage.getMappedFilePath = function(f) {
	if (f.getName() == "mdImgFile")
		return "docs/" + this.getName() + "/" + this.getFieldValue("mdImgCode") + "." + FileTool.getExtension(f.getDocument(this.getGrant()).getName());
};

MDImage.getMappedExportPath = function(row) {
	return this.getFieldValue("mdImgCode", row);	
};