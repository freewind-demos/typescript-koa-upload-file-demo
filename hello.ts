import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';

const app = new Koa();

app.use(bodyParser());

app.use(ctx => {
    ctx.body = ctx.request.body;
});

app.listen(3000, () => {
    console.log('http://localhost:3000');
});

