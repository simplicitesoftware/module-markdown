MDDocument.preSave = function() {
	var pub = this.getField("mdDocPublished").getBoolean(false);
	var ext = "MDViewer";
	var params = "doc=" + HTTPTool.encode(this.getFieldValue("mdDocCode"));
	var uri = pub ? HTMLTool.getPublicExternalObjectURL(ext, params) : HTMLTool.getExternalObjectURL(ext, params);
	this.setFieldValue("mdDocURL", HTMLTool.getRoot() + uri);
};

MDDocument.getMappedFilePath = function(f) {
	if (f.getName() == "mdDocFile")
		return "docs/" + this.getName() + "/" + this.getFieldValue("mdDocCode") + ".md";
};