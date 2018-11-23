//
var  homeAdData =  require('./Home/ad')
var Koa =  require('koa');
var app = new Koa();
var router = require('koa-router')();
var koaBody = require('koa-body')();
var bodyParser = require('koa-bodyparser');
app.use(bodyParser())
app.use(async (ctx, next) => {
    console.log(ctx.request.path+':'+ctx.request.method);
    await next();
});
console.log("demo in run")

router.get('/api', async (ctx, next) => {
    ctx.response.body =  {
        a:1,
        b:123
    };
});

router.get('/api/1', async (ctx, next) => {
    ctx.response.body = 'this is api 1';
});

router.get('/api/2',async (ctx,next) =>{
    ctx.response.body = {
        a:1265,
        b:456
    }
})

router.post('/api/post', async (ctx, next) => {
    //var bodyata = ctx.request.body
    ctx.body = ctx.request.body
    //console.log(ctx.request.body)
    // var name = ctx.request.body.name || ``
    // var password = ctx.request.body.password || ``
    // console.log(`用户${name}请求登录,密码是${password}`)
    // if (name === `zhaotong` && password === `1994`) {
    //   ctx.response.body = `<h1>Welcome, ${name}!</h1>`
    // } else {
    //   ctx.response.body = `<h1>Login failed!</h1>
    //   <p><a href="/">Try again</a></p>`
    // }
})


//home ad.js

router.get('/api/ads',async (ctx,next) =>{
    ctx.body = homeAdData
    //console.log(ctx.body)
})

//home lsit.js
var  lsitAdData =  require('./Home/list')
router.get('/api/list/:location/:page',async (ctx,next) =>{
    const params = ctx.params;
    const paramsCity = params.location;
    const paramspage = params.page;
    console.log(JSON.stringify(paramsCity))
    console.log(paramspage)
    ctx.body = lsitAdData
    //console.log(ctx.body)
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(1996);