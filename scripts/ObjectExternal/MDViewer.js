MDViewer.getMDImage = function(code) {
	var img = this.getGrant().getTmpObject("MDImage");
	img.resetFilters();
	img.getField("mdImgCode").setFilter(code);
	var rows = img.search();
	if (rows.size() == 1) {
		var row = rows.get(0);
		img.setValues(row);
		return img.getField("mdImgFile").getDocument(this.getGrant());
	} else {
		console.error("No markdown image for code " + code);
		return null;
	}
};

MDViewer.getModelImage = function(name) {
	var mdl = Grant.getSystemAdmin().getTmpObject("Model");
	mdl.resetFilters();
	mdl.getField("mod_name").setFilter(name);
	var rows = mdl.search();
	if (rows.size() == 1) {
		var row = rows.get(0);
		mdl.setValues(row);
		return mdl.getField("mod_image").getDocument(this.getGrant());
	} else {
		console.error("No model image for name " + name);
		return null;
	}
};

MDViewer.findTag = function(md, tag) {
	var k = md.indexOf("[" + tag + ":");
	return k >= 0 ? md.substring(k + tag.length + 2, md.indexOf("]", k)) : null; 
};

MDViewer.substTag = function(md, tag, sub) {
	var k = md.indexOf("[" + tag + ":");
	return k >= 0 ? md.substring(0, k) + sub + md.substring(md.indexOf("]", k) + 1) : null; 
};

MDViewer.substAll = function(loc, d) {
	var md = d.trim();

	// Include document tags first
	var m = MDViewer.findTag.call(this, md, "DOC"), img, tl, obj, pcs;
	while (m) {
		md =  MDViewer.substTag.call(this, md, "DOC", HTTPTool.appendURLParameter(loc, "doc=" + m));
		m = MDViewer.findTag.call(this, md, "DOC");
	}

	// Substitute root and base URL tags
	md = md.replace("[ROOT]", HTMLTool.getRoot()).replace("[URL]", this.getGrant().getContextURL());

	// Substitute image tags
	m = MDViewer.findTag.call(this, md, "IMAGE");
	while (m) {
		img = MDViewer.getMDImage.call(this, m);
		md =  MDViewer.substTag.call(this, md, "IMAGE", img ? HTMLTool.getImageDataURL(img.getMIME(), img.getBytes(true)) : "");
		m = MDViewer.findTag.call(this, md, "IMAGE");
	}

	// Substitute model tags
	m = MDViewer.findTag.call(this, md, "MODEL");
	while (m) {
		img = MDViewer.getModelImage.call(this, m);
		md = MDViewer.substTag.call(this, md, "MODEL", img ? HTMLTool.getImageDataURL(img.getMIME(), img.getBytes(true)) : "");
		m = MDViewer.findTag.call(this, md, "MODEL");
	}
	
	// Substitute module documentation tags
	try { // Under silent try/catch for upward compatibility
		m = MDViewer.findTag.call(this, md, "MODULEDOC");
		while (m) {
			var mdl = m.split(":");
			tl = mdl.length > 1 ? Tool.parseInt(mdl[1], 2) : 2;
			md = MDViewer.substTag.call(this, md, "MODULEDOC", MarkdownTool.docForModule(null, mdl[0], false, false, false, tl));
			m = MDViewer.findTag.call(this, md, "MODULEDOC");
		}
	} catch(e) {}

	// Substitute object documentation tags
	try { // Under silent try/catch for upward compatibility
		m = MDViewer.findTag.call(this, md, "OBJECTDOC");
		while (m) {
			obj = m.split(":");
			tl = obj.length > 1 ? Tool.parseInt(obj[1], 3) : 3;
			md = MDViewer.substTag.call(this, md, "OBJECTDOC", MarkdownTool.docForObject(null, obj[0], false, false, tl));
			m = MDViewer.findTag.call(this, md, "OBJECTDOC");
		}
	} catch(e) {}

	// Substitute object documentation tags
	try { // Under silent try/catch for upward compatibility
		m = MDViewer.findTag.call(this, md, "OBJECTSERVICEDOC");
		while (m) {
			obj = m.split(":");
			tl = obj.length > 1 ? Tool.parseInt(obj[1], 3) : 3;
			md = MDViewer.substTag.call(this, md, "OBJECTSERVICEDOC", MarkdownTool.docForObject(null, obj[0], false, true, tl));
			m = MDViewer.findTag.call(this, md, "OBJECTSERVICEDOC");
		}
	} catch(e) {}

	// Substitute process documentation tags
	try { // Under silent try/catch for upward compatibility
		m = MDViewer.findTag.call(this, md, "PROCESSDOC");
		while (m) {
			pcs = m.split(":");
			tl = pcs.length > 1 ? Tool.parseInt(pcs[1], 3) : 3;
			md = MDViewer.substTag.call(this, md, "PROCESSDOC", MarkdownTool.docForProcess(null, pcs[0], false, false, tl));
			m = MDViewer.findTag.call(this, md, "PROCESSDOC");
		}
	} catch(e) {}

	// Substitute process documentation tags
	try { // Under silent try/catch for upward compatibility
		m = MDViewer.findTag.call(this, md, "PROCESSSERVICEDOC");
		while (m) {
			pcs = m.split(":");
			tl = pcs.length > 1 ? Tool.parseInt(pcs[1], 3) : 3;
			md = MDViewer.substTag.call(this, md, "PROCESSSERVICEDOC", MarkdownTool.docForProcess(null, pcs[0], false, true, tl));
			m = MDViewer.findTag.call(this, md, "PROCESSSERVICEDOC");
		}
	} catch(e) {}

	// Substitute disposition resource tags
	try { // Under silent try/catch for upward compatibility
		m = MDViewer.findTag.call(this, md, "RESOURCE");
		while (m) {
			var res = HTMLTool.getResourceMDContent(this.getGrant(), m); // Try as markdown content
			if (res && res.length() > 0) {
				md = MDViewer.substTag.call(this, md, "RESOURCE", res);
			} else {
				res = this.getGrant().getResource(Resource.TYPE_IMAGE, m, null, null); // Then try as image
				if (res) {
					img = res.getDocument(this.getGrant());
					md = MDViewer.substTag.call(this, md, "RESOURCE", img ? HTMLTool.getImageDataURL(img.getMIME(), img.getBytes(true)) : "");
				} else {
					res = HTMLTool.getResourcePDFURL(this.getGrant(), m); // Then try as PDF
					md = MDViewer.substTag.call(this, md, "RESOURCE", res ? Tool.toString(res) : "");
				}
			}
			m = MDViewer.findTag.call(this, md, "RESOURCE");
		}
	} catch(e) {}

	return md;
};

MDViewer.display = function(params) {
	var action = params.getBooleanParameter("action", false);
	this.setDecoration(action);

	this.addExtraCSS(HTMLTool.docCSS());	
	this.addExtraCSS(HTMLTool.highlightCSS());	
	this.addExtraJS(HTMLTool.highlightJS());	
	
	var title = this.getDisplay();
	var md = "";

	var code = params.getParameter("doc", "");
	if (!Tool.isEmpty(code)) {
		var doc = this.getGrant().getTmpObject("MDDocument");
		doc.resetFilters();
		doc.getField("mdDocCode").setFilter(code);
		if (this.isPublic())
			doc.getField("mdDocPublished").setFilter(Tool.TRUE);
		var rows = doc.search();
		if (rows.size() == 1) {
			var row = rows.get(0);
			doc.setValues(row);
			title = doc.getFieldValue("mdDocTitle");
			var d = doc.getField("mdDocFile");
			if (!d.isEmpty())
				md = Tool.toString(d.getDocument(this.getGrant()).getBytes(true));
		}
		if (Tool.isEmpty(md)) {
			title = "Error";
			md = "### Error\n\nNo markdown document for code `" + code + "`";
		}
	} else {
		code = params.getParameter("res");
		if (!Tool.isEmpty(code)) {
			title = code;
			var r = HTMLTool.getResourceMDContent(this.getGrant(), code);
			if (!Tool.isEmpty(r))
				md = Tool.toString(r);
			if (Tool.isEmpty(md)) {
				title = "Error";
				md = "### Error\n\nNo markdown document for resource `" + code + "`";
			}
		} else {
			var url = params.getParameter("url");
			if (!Tool.isEmpty(url)) {
				title = url;
				md = Tool.readUrl(url);
			} else {
				var file = params.getParameter("file");
				if (!Tool.isEmpty(file)) {
					title = file;
					md = FileTool.readFile(file);
				}
			}
		}
	}
	
	if (Tool.isEmpty(md)) {
		title = "Error";
		md = Tool.toString("### Error\n\nNo markdown content for specified parameters");
	} else {
		md = MDViewer.substAll.call(this, params.getBaseLocation(), md);
	}

	md = MarkdownTool.toHTMLPage(title, md);
	if (action)
		this.setHTML(md);
	else
		return md;
};