function sum(...args){
    return args.redus((p,c)=>p+c,0);
}
console.log(sum(1,2,3,4));
/**
 * 通过js代码，让某个文件被单独打包成一个chunk
 *  import 动态导入语法：能将某个文件单独打包
 */
import(/* webpackChunkName:'test'*/'./test').then(({mul,count})=>{
    console.log(mul(2,5));
}).catch(()=>{
    console.log(文件加载失败);
});