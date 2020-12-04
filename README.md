# auth

## HTTP Basic Authentication

### 验证方案

- Basic
- Bearer
- Digest
- HOBA
- Mutual
- Negotiate
- OAuth
- SCRAM-SHA-1
- SCRAM-SHA-256
- vapid

#### `Basic`

`userId` + `passworkd` 使用 base64 编码后通过 HTTP header `authentication` 传递给 server 端。由于账号信息只使用了 base64 进行编码，所以相当于是明文传输，所以需要直接 `https` 等方式来保障传输安全。默认情况下，浏览器中会弹出一个输入框来供用户输入账号和密码；我们还可以通过 `https://userId:pwd@www.example.com/` 的方式来便捷带上用户信息来访问目标服务。

登录过的 path 及 subPath 会自动带 `authorization` 头，注销可以通过 server 端返回 401 或者退出浏览器（不是关闭标签）。ps：*隐身模式下 `authorization` 信息也是独立的*。


https://carsonwah.github.io/http-authentication.html