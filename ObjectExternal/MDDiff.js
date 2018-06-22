MDDiff.display = function(params) {
	var g = this.getGrant();
	
	if (!g.accessObject("MDDocument")) return g.T("NOT_GRANTED");

	this.addExtraCSS(HTMLTool.highlightCSS());	
	this.addExtraJS(HTMLTool.highlightJS());	
	
	var doc1 = params.getParameter("doc1");
	var name1 = params.getParameter("name1", "Document " + doc1);
	var content1 = DocTool.readFile(DocTool.getFilePath(doc1));

	var doc2 = params.getParameter("doc2");
	var name2 = params.getParameter("name2", "Document " + doc1);
	var content2 = DocTool.readFile(DocTool.getFilePath(doc2));

	var lines = params.getIntParameter("lines", 2);
	
	var diff = Tool.unifiedDiff(name1, content1, name2, content2, lines);
	this.setHTML("<pre><code id=\"diff\" class=\"diff\">" + diff + "</code></pre>");

	return this.javascript("hljs.highlightBlock($('#diff')[0]);");
};