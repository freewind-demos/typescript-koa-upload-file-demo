import Koa from 'koa';
import Router from 'koa-router';
import KoaStatic from 'koa-static';
import koaBody from 'koa-body';
import fs from 'fs';

const app = new Koa();
app.use(KoaStatic('public'))

const router = new Router()

function assertsType<T>(obj: unknown): asserts obj is T {
    // do nothing
}

router.get('/aaa', ctx => {
    ctx.body = 'aaa!'
});
router.post('/upload', koaBody({multipart: true}), async ctx => {
    const fileToUpload = [ctx.request.files?.fileToUpload].flat()[0]
    if (!fileToUpload) return ctx.redirect('/');

    const targetPath = `uploadedFile/${fileToUpload.originalFilename}`;
    await fs.copyFileSync(fileToUpload.filepath, `public/${targetPath}`)
    ctx.body = `<a href="${targetPath}">View</a>`
})

app.use(router.routes());

app.listen(3000, () => {
    console.log('http://localhost:3000');
})
