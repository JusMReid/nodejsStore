exports.getPNF = (req, res, next) => {
    res.status(404).render("pnf", { docTitle: "PAGE NOT FOUND" });
    // res.status(404).sendFile(path.join(__dirname, "views", "pnf.html"));
  };