import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r,o as p,c as o,a as e,b as c,e as s,d}from"./app.2ced9489.js";const i={},n=s('<h1 id="\u4E00\u6B21\u5185\u5B58\u6EA2\u51FA\u6392\u67E5\u4F18\u5316\u5B9E\u6218" tabindex="-1"><a class="header-anchor" href="#\u4E00\u6B21\u5185\u5B58\u6EA2\u51FA\u6392\u67E5\u4F18\u5316\u5B9E\u6218" aria-hidden="true">#</a> \u4E00\u6B21\u5185\u5B58\u6EA2\u51FA\u6392\u67E5\u4F18\u5316\u5B9E\u6218</h1><h2 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00</h2><p><code>OutOfMemoryError</code> \u95EE\u9898\u76F8\u4FE1\u5F88\u591A\u670B\u53CB\u90FD\u9047\u5230\u8FC7\uFF0C\u76F8\u5BF9\u4E8E\u5E38\u89C1\u7684\u4E1A\u52A1\u5F02\u5E38\uFF08\u6570\u7EC4\u8D8A\u754C\u3001\u7A7A\u6307\u9488\u7B49\uFF09\u6765\u8BF4\u8FD9\u7C7B\u95EE\u9898\u662F\u5F88\u96BE\u5B9A\u4F4D\u548C\u89E3\u51B3\u7684\u3002</p><p>\u672C\u6587\u4EE5\u6700\u8FD1\u78B0\u5230\u7684\u4E00\u6B21\u7EBF\u4E0A\u5185\u5B58\u6EA2\u51FA\u7684\u5B9A\u4F4D\u3001\u89E3\u51B3\u95EE\u9898\u7684\u65B9\u5F0F\u5C55\u5F00\uFF1B\u5E0C\u671B\u80FD\u5BF9\u78B0\u5230\u7C7B\u4F3C\u95EE\u9898\u7684\u540C\u5B66\u5E26\u6765\u601D\u8DEF\u548C\u5E2E\u52A9\u3002</p><p>\u4E3B\u8981\u4ECE<code>\u8868\u73B0--&gt;\u6392\u67E5--&gt;\u5B9A\u4F4D--&gt;\u89E3\u51B3</code> \u56DB\u4E2A\u6B65\u9AA4\u6765\u5206\u6790\u548C\u89E3\u51B3\u95EE\u9898\u3002</p><h2 id="\u8868\u8C61" tabindex="-1"><a class="header-anchor" href="#\u8868\u8C61" aria-hidden="true">#</a> \u8868\u8C61</h2><p>\u6700\u8FD1\u6211\u4EEC\u751F\u4EA7\u4E0A\u7684\u4E00\u4E2A\u5E94\u7528\u4E0D\u65AD\u7684\u7206\u51FA\u5185\u5B58\u6EA2\u51FA\uFF0C\u5E76\u4E14\u968F\u7740\u4E1A\u52A1\u91CF\u7684\u589E\u957F\u51FA\u73B0\u7684\u9891\u6B21\u8D8A\u6765\u8D8A\u9AD8\u3002</p><p>\u8BE5\u7A0B\u5E8F\u7684\u4E1A\u52A1\u903B\u8F91\u975E\u5E38\u7B80\u5355\uFF0C\u5C31\u662F\u4ECE Kafka \u4E2D\u5C06\u6570\u636E\u6D88\u8D39\u4E0B\u6765\u7136\u540E\u6279\u91CF\u7684\u505A\u6301\u4E45\u5316\u64CD\u4F5C\u3002</p><p>\u800C\u73B0\u8C61\u5219\u662F\u968F\u7740 Kafka \u7684\u6D88\u606F\u8D8A\u591A\uFF0C\u51FA\u73B0\u7684\u5F02\u5E38\u7684\u9891\u6B21\u5C31\u8D8A\u5FEB\u3002\u7531\u4E8E\u5F53\u65F6\u8FD8\u6709\u5176\u4ED6\u5DE5\u4F5C\u6240\u4EE5\u53EA\u80FD\u8BA9\u8FD0\u7EF4\u505A\u91CD\u542F\uFF0C\u5E76\u4E14\u76D1\u63A7\u597D\u5806\u5185\u5B58\u4EE5\u53CA GC \u60C5\u51B5\u3002</p><blockquote><p>\u91CD\u542F\u5927\u6CD5\u867D\u597D\uFF0C\u53EF\u662F\u4F9D\u7136\u4E0D\u80FD\u6839\u672C\u89E3\u51B3\u95EE\u9898\u3002</p></blockquote><h2 id="\u6392\u67E5" tabindex="-1"><a class="header-anchor" href="#\u6392\u67E5" aria-hidden="true">#</a> \u6392\u67E5</h2><p>\u4E8E\u662F\u6211\u4EEC\u60F3\u6839\u636E\u8FD0\u7EF4\u4E4B\u524D\u6536\u96C6\u5230\u7684\u5185\u5B58\u6570\u636E\u3001GC \u65E5\u5FD7\u5C1D\u8BD5\u5224\u65AD\u54EA\u91CC\u51FA\u73B0\u95EE\u9898\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/oom-81051388-0c35-4de6-a3d9-4f546ef4bfec.jpg" alt=""></p><p>\u7ED3\u679C\u53D1\u73B0\u8001\u5E74\u4EE3\u7684\u5185\u5B58\u4F7F\u7528\u5C31\u7B97\u662F\u53D1\u751F GC \u4E5F\u4E00\u76F4\u5C45\u9AD8\u4E0D\u4E0B\uFF0C\u800C\u4E14\u968F\u7740\u65F6\u95F4\u63A8\u79FB\u4E5F\u8D8A\u6765\u8D8A\u9AD8\u3002</p><p>\u7ED3\u5408 jstat \u7684\u65E5\u5FD7\u53D1\u73B0\u5C31\u7B97\u662F\u53D1\u751F\u4E86 FGC \u8001\u5E74\u4EE3\u4E5F\u5DF2\u7ECF\u56DE\u6536\u4E0D\u4E86\uFF0C\u5185\u5B58\u5DF2\u7ECF\u5230\u9876\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/oom-e79d4da0-fbb1-4918-a8d8-e29d2d64323b.jpg" alt=""></p><p>\u751A\u81F3\u6709\u51E0\u53F0\u5E94\u7528 FGC \u8FBE\u5230\u4E86\u4E0A\u767E\u6B21\uFF0C\u65F6\u95F4\u4E5F\u9AD8\u7684\u53EF\u6015\u3002</p><p>\u8FD9\u8BF4\u660E\u5E94\u7528\u7684\u5185\u5B58\u4F7F\u7528\u80AF\u5B9A\u662F\u6709\u95EE\u9898\u7684\uFF0C\u6709\u8BB8\u591A\u8D56\u76AE\u5BF9\u8C61\u59CB\u7EC8\u56DE\u6536\u4E0D\u6389\u3002</p><h2 id="\u5B9A\u4F4D" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4F4D" aria-hidden="true">#</a> \u5B9A\u4F4D</h2><p>\u7531\u4E8E\u751F\u4EA7\u4E0A\u7684\u5185\u5B58 dump \u6587\u4EF6\u975E\u5E38\u5927\uFF0C\u8FBE\u5230\u4E86\u51E0\u5341G\u3002\u4E5F\u662F\u7531\u4E8E\u6211\u4EEC\u7684\u5185\u5B58\u8BBE\u7F6E\u592A\u5927\u6709\u5173\u3002</p><p>\u6240\u4EE5\u5BFC\u81F4\u60F3\u4F7F\u7528 MAT \u5206\u6790\u9700\u8981\u82B1\u8D39\u5927\u91CF\u65F6\u95F4\u3002</p><p>\u56E0\u6B64\u6211\u4EEC\u4FBF\u60F3\u662F\u5426\u53EF\u4EE5\u5728\u672C\u5730\u590D\u73B0\uFF0C\u8FD9\u6837\u5C31\u8981\u597D\u5B9A\u4F4D\u7684\u591A\u3002</p><p>\u4E3A\u4E86\u5C3D\u5FEB\u7684\u590D\u73B0\u95EE\u9898\uFF0C\u6211\u5C06\u672C\u5730\u5E94\u7528\u6700\u5927\u5806\u5185\u5B58\u8BBE\u7F6E\u4E3A 150M\u3002</p><p>\u7136\u540E\u5728\u6D88\u8D39 Kafka \u90A3\u91CC Mock \u4E3A\u4E00\u4E2A while \u5FAA\u73AF\u4E00\u76F4\u4E0D\u65AD\u7684\u751F\u6210\u6570\u636E\u3002</p><p>\u540C\u65F6\u5F53\u5E94\u7528\u542F\u52A8\u4E4B\u540E\u5229\u7528 VisualVM \u8FDE\u4E0A\u5E94\u7528\u5B9E\u65F6\u76D1\u63A7\u5185\u5B58\u3001GC \u7684\u4F7F\u7528\u60C5\u51B5\u3002</p><p>\u7ED3\u679C\u8DD1\u4E86 10 \u51E0\u5206\u949F\u5185\u5B58\u4F7F\u7528\u5E76\u6CA1\u6709\u4EC0\u4E48\u95EE\u9898\u3002\u6839\u636E\u56FE\u4E2D\u53EF\u4EE5\u770B\u51FA\uFF0C\u6BCF\u4EA7\u751F\u4E00\u6B21 GC \u5185\u5B58\u90FD\u80FD\u6709\u6548\u7684\u56DE\u6536\uFF0C\u6240\u4EE5\u8FD9\u6837\u5E76\u6CA1\u6709\u590D\u73B0\u95EE\u9898\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/oom-4cf05af0-924f-406b-a8a4-5aa885e38cea.jpg" alt=""></p><p>\u6CA1\u6CD5\u590D\u73B0\u95EE\u9898\u5C31\u5F88\u96BE\u5B9A\u4F4D\u4E86\u3002\u4E8E\u662F\u6211\u4EEC review \u4EE3\u7801\uFF0C\u53D1\u73B0\u751F\u4EA7\u7684\u903B\u8F91\u548C\u6211\u4EEC\u7528 while \u5FAA\u73AF Mock \u6570\u636E\u8FD8\u4E0D\u592A\u4E00\u6837\u3002</p><p>\u67E5\u770B\u751F\u4EA7\u7684\u65E5\u5FD7\u53D1\u73B0\u6BCF\u6B21\u4ECE Kafka \u4E2D\u53D6\u51FA\u7684\u90FD\u662F\u51E0\u767E\u6761\u6570\u636E\uFF0C\u800C\u6211\u4EEC Mock \u65F6\u6BCF\u6B21\u53EA\u80FD\u4EA7\u751F<strong>\u4E00\u6761</strong>\u3002</p><p>\u4E3A\u4E86\u5C3D\u53EF\u80FD\u7684\u6A21\u62DF\u751F\u4EA7\u60C5\u51B5\u4FBF\u5728\u670D\u52A1\u5668\u4E0A\u8DD1\u7740\u4E00\u4E2A\u751F\u4EA7\u8005\u7A0B\u5E8F\uFF0C\u4E00\u76F4\u6E90\u6E90\u4E0D\u65AD\u7684\u5411 Kafka \u4E2D\u53D1\u9001\u6570\u636E\u3002</p><p>\u679C\u7136\u4E0D\u51FA\u610F\u5916\u53EA\u8DD1\u4E86\u4E00\u5206\u591A\u949F\u5185\u5B58\u5C31\u9876\u4E0D\u4F4F\u4E86\uFF0C\u89C2\u5BDF\u5DE6\u56FE\u53D1\u73B0 GC \u7684\u9891\u6B21\u975E\u5E38\u9AD8\uFF0C\u4F46\u662F\u5185\u5B58\u7684\u56DE\u6536\u5374\u662F\u76F8\u5F62\u89C1\u62D9\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/oom-a6d6c9cd-e79c-4a76-ba97-032cfefefd5f.jpg" alt=""></p><p>\u540C\u65F6\u540E\u53F0\u4E5F\u5F00\u59CB\u6253\u5370\u5185\u5B58\u6EA2\u51FA\u4E86\uFF0C\u8FD9\u6837\u4FBF\u590D\u73B0\u51FA\u95EE\u9898\u3002</p><h2 id="\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3" aria-hidden="true">#</a> \u89E3\u51B3</h2><p>\u4ECE\u76EE\u524D\u7684\u8868\u73B0\u6765\u770B\u5C31\u662F\u5185\u5B58\u4E2D\u6709\u8BB8\u591A\u5BF9\u8C61\u4E00\u76F4\u5B58\u5728\u5F3A\u5F15\u7528\u5173\u7CFB\u5BFC\u81F4\u5F97\u4E0D\u5230\u56DE\u6536\u3002</p><p>\u4E8E\u662F\u4FBF\u60F3\u770B\u770B\u5230\u5E95\u662F\u4EC0\u4E48\u5BF9\u8C61\u5360\u7528\u4E86\u8FD9\u4E48\u591A\u7684\u5185\u5B58\uFF0C\u5229\u7528 VisualVM \u7684 HeapDump \u529F\u80FD\u53EF\u4EE5\u7ACB\u5373 dump \u51FA\u5F53\u524D\u5E94\u7528\u7684\u5185\u5B58\u60C5\u51B5\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/oom-49b47ca3-b3e2-49f7-85c9-23f7a3ef6f93.jpg" alt=""></p><p>\u7ED3\u679C\u53D1\u73B0 <code>com.lmax.disruptor.RingBuffer</code> \u7C7B\u578B\u7684\u5BF9\u8C61\u5360\u7528\u4E86\u5C06\u8FD1 50% \u7684\u5185\u5B58\u3002</p><p>\u770B\u5230\u8FD9\u4E2A\u5305\u81EA\u7136\u5C31\u60F3\u5230\u4E86 <code>Disruptor</code> \u73AF\u5F62\u961F\u5217\u3002</p><p>\u518D\u6B21 review \u4EE3\u7801\u53D1\u73B0\uFF1A\u4ECE Kafka \u91CC\u53D6\u51FA\u7684 700 \u6761\u6570\u636E\u662F\u76F4\u63A5\u5F80 Disruptor \u91CC\u4E22\u7684\u3002</p><p>\u8FD9\u91CC\u4E5F\u5C31\u80FD\u8BF4\u660E\u4E3A\u4EC0\u4E48\u7B2C\u4E00\u6B21\u6A21\u62DF\u6570\u636E\u6CA1\u590D\u73B0\u95EE\u9898\u4E86\u3002</p><p>\u6A21\u62DF\u7684\u65F6\u5019\u662F\u4E00\u4E2A\u5BF9\u8C61\u653E\u8FDB\u961F\u5217\u91CC\uFF0C\u800C\u751F\u4EA7\u7684\u60C5\u51B5\u662F 700 \u6761\u6570\u636E\u653E\u8FDB\u961F\u5217\u91CC\u3002\u8FD9\u4E2A\u6570\u636E\u91CF\u662F 700 \u500D\u7684\u5DEE\u8DDD\u3002</p><p>\u800C Disruptor \u4F5C\u4E3A\u4E00\u4E2A\u73AF\u5F62\u961F\u5217\uFF0C\u518D\u5BF9\u8C61\u6CA1\u6709\u88AB\u8986\u76D6\u4E4B\u524D\u662F\u4E00\u76F4\u5B58\u5728\u7684\u3002</p><p>\u6211\u4E5F\u505A\u4E86\u4E00\u4E2A\u5B9E\u9A8C\uFF0C\u8BC1\u660E\u786E\u5B9E\u5982\u6B64\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/oom-dee49da6-905a-4085-b82e-41e136d422e8.jpg" alt=""></p><p>\u6211\u8BBE\u7F6E\u961F\u5217\u5927\u5C0F\u4E3A 8 \uFF0C\u4ECE 0~9 \u5F80\u91CC\u9762\u5199 10 \u6761\u6570\u636E\uFF0C\u5F53\u5199\u5230 8 \u7684\u65F6\u5019\u5C31\u4F1A\u628A\u4E4B\u524D 0 \u7684\u4F4D\u7F6E\u8986\u76D6\u6389\uFF0C\u540E\u9762\u7684\u4EE5\u6B64\u7C7B\u63A8\uFF08\u7C7B\u4F3C\u4E8E HashMap \u7684\u53D6\u6A21\u5B9A\u4F4D\uFF09\u3002</p><p>\u6240\u4EE5\u5728\u751F\u4EA7\u4E0A\u5047\u8BBE\u6211\u4EEC\u7684\u961F\u5217\u5927\u5C0F\u662F 1024\uFF0C\u90A3\u4E48\u968F\u7740\u7CFB\u7EDF\u7684\u8FD0\u884C\u6700\u7EC8\u80AF\u5B9A\u4F1A\u5BFC\u81F4 1024 \u4E2A\u4F4D\u7F6E\u4E0A\u88C5\u6EE1\u4E86\u5BF9\u8C61\uFF0C\u800C\u4E14\u6BCF\u4E2A\u4F4D\u7F6E\u662F 700 \u4E2A\uFF01</p><p>\u4E8E\u662F\u67E5\u770B\u4E86\u751F\u4EA7\u4E0A Disruptor \u7684 RingBuffer \u914D\u7F6E\uFF0C\u7ED3\u679C\u662F\uFF1A<code>1024*1024</code>\u3002</p><p>\u8FD9\u4E2A\u6570\u91CF\u7EA7\u5C31\u975E\u5E38\u5413\u4EBA\u4E86\u3002</p><p>\u4E3A\u4E86\u9A8C\u8BC1\u662F\u5426\u662F\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6211\u5728\u672C\u5730\u5C06\u8BE5\u503C\u6362\u4E3A 2 \uFF0C\u4E00\u4E2A\u6700\u5C0F\u503C\u8BD5\u8BD5\u3002</p><p>\u540C\u6837\u7684 128M \u5185\u5B58\uFF0C\u4E5F\u662F\u901A\u8FC7 Kafka \u4E00\u76F4\u6E90\u6E90\u4E0D\u65AD\u7684\u53D6\u51FA\u6570\u636E\u3002\u901A\u8FC7\u76D1\u63A7\u5982\u4E0B\uFF1A</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/oom-5529781f-1f68-47a7-a3d2-04eba9e9d52e.jpg" alt=""></p><p>\u8DD1\u4E86 20 \u51E0\u5206\u949F\u7CFB\u7EDF\u4E00\u5207\u6B63\u5E38\uFF0C\u6BCF\u5F53\u4E00\u6B21 GC \u90FD\u80FD\u56DE\u6536\u5927\u90E8\u5206\u5185\u5B58\uFF0C\u6700\u7EC8\u5448\u73B0\u952F\u9F7F\u72B6\u3002</p><p>\u8FD9\u6837\u95EE\u9898\u5C31\u627E\u5230\u4E86\uFF0C\u4E0D\u8FC7\u751F\u4EA7\u4E0A\u8FD9\u4E2A\u503C\u5177\u4F53\u8BBE\u7F6E\u591A\u5C11\u8FD8\u5F97\u6839\u636E\u4E1A\u52A1\u60C5\u51B5\u6D4B\u8BD5\u624D\u80FD\u77E5\u9053\uFF0C\u4F46\u539F\u6709\u7684 1024*1024 \u662F\u7EDD\u5BF9\u4E0D\u80FD\u518D\u4F7F\u7528\u4E86\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u867D\u7136\u5230\u4E86\u6700\u540E\u4E5F\u5C31\u6539\u4E86\u4E00\u884C\u4EE3\u7801(\u8FD8\u6CA1\u6539\uFF0C\u76F4\u63A5\u4FEE\u6539\u914D\u7F6E)\uFF0C\u4F46\u8FD9\u6392\u67E5\u8FC7\u7A0B\u6211\u89C9\u5F97\u662F\u6709\u610F\u4E49\u7684\u3002</p><p>\u4E5F\u4F1A\u8BA9\u5927\u90E8\u5206\u89C9\u5F97 JVM \u8FD9\u6837\u7684\u9ED1\u76D2\u96BE\u4EE5\u4E0B\u624B\u7684\u540C\u5B66\u6709\u4E00\u4E2A\u76F4\u89C2\u7684\u611F\u53D7\u3002</p><p><code>\u540C\u65F6\u4E5F\u5F97\u611F\u53F9 Disruptor \u4E1C\u897F\u867D\u597D\uFF0C\u4E5F\u4E0D\u80FD\u4E71\u7528\u54E6\uFF01</code></p><p>\u76F8\u5173\u6F14\u793A\u4EE3\u7801\u67E5\u770B\uFF1A</p>',59),h={href:"https://github.com/crossoverJie/JCSprout/tree/master/src/main/java/com/crossoverjie/disruptor",target:"_blank",rel:"noopener noreferrer"},m=d("https://github.com/crossoverJie/JCSprout/tree/master/src/main/java/com/crossoverjie/disruptor"),b=e("p",null,[e("strong",null,"\u4F60\u7684\u70B9\u8D5E\u4E0E\u8F6C\u53D1\u662F\u6700\u5927\u7684\u652F\u6301\u3002")],-1),f=e("p",null,"\u539F\u6587\u94FE\u63A5\uFF1Ahttps://crossoverjie.top/2018/08/29/java-senior/OOM-Disruptor/",-1),l=e("p",null,[e("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:""})],-1);function u(g,j){const a=r("ExternalLinkIcon");return p(),o("div",null,[n,e("p",null,[e("a",h,[m,c(a)])]),b,f,l])}var k=t(i,[["render",u],["__file","oom.html.vue"]]);export{k as default};