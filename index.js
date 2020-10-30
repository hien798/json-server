var express = require("express");
var app = express();
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get("/", (req, res, next) => {
    res.json({ "Hello": "EveryBody" });
});

app.get("/app", (req, res, next) => {
    res.json({ "an": "hien" });
});

app.get("/apple-app-site-association", (req, res, next) => {
    res.json({
        "applinks": {
            "apps": [],
            "details": [
                {
                    "appID": "2NN628UZ3C.com.herokuapp.nvhbk.hien",
                    "paths": [
                        "verify",
                        "/customer/tikinow",
                        "/chuong-trinh/mo-the-tikicard",
                        "/kich-hoat-the-tikicard",
                        "/form-mo-the-tikicard",
                        "/checkout/cart/*",
                        "NOT /customer/*",
                        "NOT /checkout/*",
                        "NOT /prepaidcard/payment/*",
                        "NOT /payment/information/*",
                        "*"
                    ]
                }
            ]
        }
    });
});