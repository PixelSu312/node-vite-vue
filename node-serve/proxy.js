import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const options = {
    target: "http://localhost:3000",
    changeOrigin: true,
    pathRewrite: {
        "^/api": "",
    },
};
// 静态资源代理
app.use("/web", express.static("dist"));
// api代理
app.use("/api", createProxyMiddleware(options));
// // history模式 404问题
app.use((req, res) => {
    res.sendFile(__dirname + "/dist/index.html");
});
app.listen(8080, () => {
    console.log("Proxy server is running on http://localhost:8080");
});
