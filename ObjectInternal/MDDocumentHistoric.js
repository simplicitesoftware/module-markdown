MDDocumentHistoric.diff = function() {
	var g = this.getGrant();

	var doc = this.getGrant().getTmpObject("MDDocument");
	doc.resetFilters();
	doc.select(this.getFieldValue("row_ref_id"));

	var d = doc.getField("mdDocFile").getDocument(g);
	var dh = this.getField("mdDocFile").getDocument(g);

	var url = HTMLTool.getExternalObjectURL("MDDiff", "name1=" + HTTPTool.encode(dh.getName()) + "&doc1=" + dh.getId() + "&name2=" + HTTPTool.encode(d.getName()) + "&doc2=" + d.getId() + "&lines=3");
	return g.isResponsive() ? this.redirect(url) : this.javascript("Simplicite.UI.popup({ margin: 50, url: '" + url + "&nav=" + Navigator.NONE + "' })");
};

MDDocumentHistoric.isActionEnable = function(row, action) {
	if (action == "MDDocDiff")
		return row ? !Tool.isEmpty(row[this.getIndex("mdDocFile")]) : !this.getField("mdDocFile").isEmpty();
	return true;
};