TypeScript Koa Post Json Demo
=============================

```
npm install
npm run demo
```

Then:

```
brew install httpie

http POST http://localhost:3000 a=1 b=2
```

Responds:

```
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 17
Content-Type: application/json; charset=utf-8
Date: Tue, 08 Jan 2019 06:28:50 GMT

{
    "a": "1",
    "b": "2"
}
```

