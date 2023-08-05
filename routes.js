const requestHandler = (req, res) => {
    if (req.url === "/") {
        res.write("<p>Hi this is the home page</p><a href='/contact'>Contact</a>")
        return res.end();
    } else if (req.url === "/contact") {
        res.write("<p>Contact us page</p>");
        return res.end();
    }
};

module.exports = requestHandler;