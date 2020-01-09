<template>
    <div class="box">
        <ul>
            <li>
                <canvas id="one" width="190" height="190"></canvas>
            </li>
            <li>
                <canvas id="two" width="190" height="190"></canvas>
            </li>
            <li>
                <canvas id="three" width="190" height="190"></canvas>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:[],
    data(){
        return{

        }
    },
    mounted() {
        drawCircle({
            id: 'one',
            color: '#169AFA',
            angle: 0.28,
            lineWidth: 18,
            text:'待单'
        });

        drawCircle({
            id: 'two',
            angle: 0.22,
            color: '#FDAB1B',
            lineWidth: 18,
            text:'途中'
        });

        drawCircle({
            id: 'three',
            angle: 0.22,
            lineWidth: 18,
            color: '#33CE92',
            text:'休息'
        });
        function drawCircle(_options){
            var options = _options || {};    //获取或定义options对象;
            options.angle = options.angle || 1;    //定义默认角度1为360度(角度范围 0-1);
            options.color = options.color || '#fff';    //定义默认颜色（包括字体和边框颜色）;
            options.lineWidth = options.lineWidth || 10;    //定义默认圆描边的宽度;
            options.lineCap = options.lineCap || 'square';    //定义描边的样式，默认为直角边，round 为圆角
            options.text = options.text;    //定义描边的样式，默认为直角边，round 为圆角
        
            var oBoxOne = document.getElementById(options.id);
            var sCenter = oBoxOne.width / 2;    //获取canvas元素的中心点;
            var ctx = oBoxOne.getContext('2d');
            var nBegin = Math.PI / 2;    //定义起始角度;
            var nEnd = Math.PI * 2;    //定义结束角度;
            
            var num = parseInt(options.angle * 100);

            ctx.textAlign = 'center';    //定义字体居中;
            ctx.font = 'normal normal 400 18px Arial';    //定义字体加粗大小字体样式;
            ctx.fillStyle = '#999';
            ctx.fillText(options.text, sCenter, 85);    //设置填充文字;
            ctx.font = 'normal normal 500 20px Arial';
            ctx.fillStyle = '#0F182E';//判断文字填充样式为颜色，还是渐变色;
            ctx.fillText(num + '%', sCenter, 115);    //设置填充文字;
            /*ctx.strokeStyle = grd;    //设置描边样式为渐变色;
            ctx.strokeText((options.angle * 100) + '%', sCenter, sCenter);    //设置描边文字(即镂空文字);*/
            ctx.lineCap = options.lineCap;
            ctx.strokeStyle = options.color == 'grd' ? grd : options.color;
            ctx.lineWidth = options.lineWidth;
        
            ctx.beginPath();    //设置起始路径，这段绘制360度背景;
            ctx.strokeStyle = '#D8D8D8';
            ctx.arc(sCenter, sCenter, (sCenter - options.lineWidth), -nBegin, nEnd, false);
            ctx.stroke();
        
            var imd = ctx.getImageData(0, 0, 240, 240);
            function draw(current) {    //该函数实现角度绘制;
                ctx.putImageData(imd, 0, 0);
                ctx.beginPath();
                ctx.strokeStyle = options.color == 'grd' ? grd : options.color;
                ctx.arc(sCenter, sCenter, (sCenter - options.lineWidth), -nBegin, (nEnd * current) - nBegin, false);
                ctx.stroke();
            }
        
            var t = 0;
            var timer = null;
            function loadCanvas(angle) {    //该函数循环绘制指定角度，实现加载动画;
                timer = setInterval(function(){
                    if (t > angle) {
                        draw(options.angle);
                        clearInterval(timer);
                    }else{
                        draw(t);
                        t += 0.02;
                    }
                }, 20);
            }
            loadCanvas(options.angle);    //载入百度比角度  0-1 范围;
            timer = null;
        
        }
    },
}
</script>
<style lang="scss" scope>
    .box ul{width: 90%;margin: 0 5%}
    .box ul li{
        width: 33.33%;
        float: left;
        text-align: center;
        margin: 100px 0
    }
</style>