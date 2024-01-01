import Koa from 'koa';
import mime  from 'mime-types';
import Router from 'koa-router';
import koaBody from 'koa-body';
import fs from 'fs';

// ({multipart: true, uploadDir: '.'})

const router = new Router()

router.post('/register', koaBody, async ctx => {
    try {
        const {path, name, type} = ctx.request.files.avatar
        const fileExtension = mime.extension(type)
        console.log(`path: ${path}`)
        console.log(`filename: ${name}`)
        console.log(`type: ${type}`)
        console.log(`fileExtension: ${fileExtension}`)
        await fs.copy(path, `public/avatars/${name}`)
        ctx.redirect('/')
    } catch(err) {
        console.log(`error ${err.message}`)
        await ctx.render('error', {message: err.message})
    }
})
