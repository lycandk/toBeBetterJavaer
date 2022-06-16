import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,o,c,a as s,b as l,e as a,d as n}from"./app.48723813.js";const i={},u=a(`<h1 id="java\u4E2Dint\u3001integer\u3001new-integer\u4E4B\u95F4\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#java\u4E2Dint\u3001integer\u3001new-integer\u4E4B\u95F4\u7684\u533A\u522B" aria-hidden="true">#</a> Java\u4E2Dint\u3001Integer\u3001new Integer\u4E4B\u95F4\u7684\u533A\u522B</h1><p>\u201C\u4E09\u59B9\uFF0C\u4ECA\u5929\u6211\u4EEC\u6765\u8865\u4E00\u4E2A\u5C0F\u7684\u77E5\u8BC6\u70B9\uFF1AJava \u6570\u636E\u7C7B\u578B\u7F13\u5B58\u6C60\u3002\u201D\u6211\u559D\u4E86\u4E00\u53E3\u67B8\u675E\u6CE1\u7684\u8336\u540E\u5BF9\u4E09\u59B9\u8BF4\uFF0C\u201C\u8003\u4F60\u4E00\u4E2A\u95EE\u9898\u54C8\uFF1A<code>new Integer(18) \u4E0E Integer.valueOf(18) </code> \u7684\u533A\u522B\u662F\u4EC0\u4E48\uFF1F\u201D</p><p>\u201C\u96BE\u9053\u4E0D\u4E00\u6837\u5417\uFF1F\u201D\u4E09\u59B9\u6709\u70B9\u8BE7\u5F02\u3002</p><p>\u201C\u4E0D\u4E00\u6837\u7684\u3002\u201D\u6211\u7B11\u7740\u8BF4\u3002</p><ul><li><code>new Integer(18)</code> \u6BCF\u6B21\u90FD\u4F1A\u65B0\u5EFA\u4E00\u4E2A\u5BF9\u8C61;</li><li><code>Integer.valueOf(18)</code> \u4F1A\u4F7F\u2F64\u7528\u7F13\u5B58\u6C60\u4E2D\u7684\u5BF9\u8C61\uFF0C\u591A\u6B21\u8C03\u7528\u53EA\u4F1A\u53D6\u540C\u2F00\u4E00\u4E2A\u5BF9\u8C61\u7684\u5F15\u7528\u3002</li></ul><p>\u6765\u770B\u4E0B\u9762\u8FD9\u6BB5\u4EE3\u7801\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Integer</span> x <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Integer</span> y <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>x <span class="token operator">==</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Integer</span> z <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Integer</span> k <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>z <span class="token operator">==</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Integer</span> m <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Integer</span> p <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>m <span class="token operator">==</span> p<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6765\u770B\u4E00\u4E0B\u8F93\u51FA\u7ED3\u679C\u5427\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>false
true
false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u201C\u7B2C\u4E00\u4E2A false\uFF0C\u6211\u77E5\u9053\u539F\u56E0\uFF0C\u56E0\u4E3A new \u51FA\u6765\u7684\u662F\u4E0D\u540C\u7684\u5BF9\u8C61\uFF0C\u5730\u5740\u4E0D\u540C\u3002\u201D\u4E09\u59B9\u89E3\u91CA\u9053\uFF0C\u201C\u7B2C\u4E8C\u4E2A\u548C\u7B2C\u4E09\u4E2A\u6211\u8BA4\u4E3A\u90FD\u5E94\u8BE5\u662F true \u554A\uFF0C\u4E3A\u4EC0\u4E48\u7B2C\u4E09\u4E2A\u4F1A\u8F93\u51FA false \u5462\uFF1F\u8FD9\u4E2A\u6211\u7406\u89E3\u4E0D\u4E86\u3002\u201D</p><p>\u201C\u5176\u5B9E\u539F\u56E0\u4E5F\u5F88\u7B80\u5355\u3002\u201D\u6211\u80F8\u6709\u6210\u7AF9\u5730\u8BF4\u3002</p><p>\u57FA\u672C\u6570\u636E\u7C7B\u578B\u7684\u5305\u88C5\u7C7B\u9664\u4E86 Float \u548C Double \u4E4B\u5916\uFF0C\u5176\u4ED6\u516D\u4E2A\u5305\u88C5\u5668\u7C7B\uFF08Byte\u3001Short\u3001Integer\u3001Long\u3001Character\u3001Boolean\uFF09\u90FD\u6709\u5E38\u91CF\u7F13\u5B58\u6C60\u3002</p><ul><li>Byte\uFF1A-128~127\uFF0C\u4E5F\u5C31\u662F\u6240\u6709\u7684 byte \u503C</li><li>Short\uFF1A-128~127</li><li>Long\uFF1A-128~127</li><li>Character\uFF1A\\u0000 - \\u007F</li><li>Boolean\uFF1Atrue \u548C false</li></ul><p>\u62FF Integer \u6765\u4E3E\u4F8B\u5B50\uFF0CInteger \u7C7B\u5185\u90E8\u4E2D\u5185\u7F6E\u4E86 256 \u4E2A Integer \u7C7B\u578B\u7684\u7F13\u5B58\u6570\u636E\uFF0C\u5F53\u4F7F\u7528\u7684\u6570\u636E\u8303\u56F4\u5728 -128~127 \u4E4B\u95F4\u65F6\uFF0C\u4F1A\u76F4\u63A5\u8FD4\u56DE\u5E38\u91CF\u6C60\u4E2D\u6570\u636E\u7684\u5F15\u7528\uFF0C\u800C\u4E0D\u662F\u521B\u5EFA\u5BF9\u8C61\uFF0C\u8D85\u8FC7\u8FD9\u4E2A\u8303\u56F4\u65F6\u4F1A\u521B\u5EFA\u65B0\u7684\u5BF9\u8C61\u3002</p><p>18 \u5728 -128~127 \u4E4B\u95F4\uFF0C300 \u4E0D\u5728\u3002</p><p>\u6765\u770B\u4E00\u4E0B valueOf \u65B9\u6CD5\u7684\u6E90\u7801\u5427\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Integer</span> <span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span><span class="token class-name">IntegerCache</span><span class="token punctuation">.</span>low <span class="token operator">&amp;&amp;</span> i <span class="token operator">&lt;=</span><span class="token class-name">IntegerCache</span><span class="token punctuation">.</span>high<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token class-name">IntegerCache</span><span class="token punctuation">.</span>cache<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token operator">-</span><span class="token class-name">IntegerCache</span><span class="token punctuation">.</span>low<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u201C\u54E6\uFF0C\u539F\u6765\u662F\u56E0\u4E3A Integer.IntegerCache \u8FD9\u4E2A\u5185\u90E8\u7C7B\u7684\u539F\u56E0\u554A\uFF01\u201D\u4E09\u59B9\u597D\u50CF\u53D1\u73B0\u4E86\u65B0\u5927\u9646\u3002</p><p>\u201C\u662F\u6EF4\u3002\u6765\u770B\u4E00\u4E0B IntegerCache \u8FD9\u4E2A\u9759\u6001\u5185\u90E8\u7C7B\u7684\u6E90\u7801\u5427\u3002\u201D</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">IntegerCache</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> low <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">128</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> high<span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Integer</span> cache<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token comment">// high value may be configured by property</span>
        <span class="token keyword">int</span> h <span class="token operator">=</span> <span class="token number">127</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> integerCacheHighPropValue <span class="token operator">=</span>
                sun<span class="token punctuation">.</span>misc<span class="token punctuation">.</span>VM<span class="token punctuation">.</span><span class="token function">getSavedProperty</span><span class="token punctuation">(</span><span class="token string">&quot;java.lang.Integer.IntegerCache.high&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>integerCacheHighPropValue <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>integerCacheHighPropValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
                i <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">127</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// Maximum array size is Integer.MAX_VALUE</span>
                h <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span>MAX_VALUE <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token operator">-</span>low<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span> <span class="token class-name">NumberFormatException</span> nfe<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// If the property cannot be parsed into an int, ignore it.</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        high <span class="token operator">=</span> h<span class="token punctuation">;</span>

        cache <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">[</span><span class="token punctuation">(</span>high <span class="token operator">-</span> low<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> j <span class="token operator">=</span> low<span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> k <span class="token operator">&lt;</span> cache<span class="token punctuation">.</span>length<span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">)</span>
            cache<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// range [-128, 127] must be interned (JLS7 5.1.7)</span>
        <span class="token keyword">assert</span> <span class="token class-name">Integer<span class="token punctuation">.</span>IntegerCache</span><span class="token punctuation">.</span>high <span class="token operator">&gt;=</span> <span class="token number">127</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">IntegerCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),r=n("\u4E4B\u524D\u6211\u4EEC\u5728"),k={href:"https://github.com/itwanger/toBeBetterJavaer/blob/master/docs/keywords/java-static.md",target:"_blank",rel:"noopener noreferrer"},d=n("\u5B66\u4E60 static \u5173\u952E\u5B57"),v=n("\u7684\u65F6\u5019\uFF0C\u63D0\u5230\u8FC7\u9759\u6001\u4EE3\u7801\u5757\uFF0C\u8FD8\u8BB0\u5F97\u5427\uFF1F\u4E09\u59B9\u3002\u9759\u6001\u4EE3\u7801\u5757\u901A\u5E38\u7528\u6765\u521D\u59CB\u5316\u4E00\u4E9B\u9759\u6001\u53D8\u91CF\uFF0C\u5B83\u4F1A\u4F18\u5148\u4E8E main() \u65B9\u6CD5\u6267\u884C\u3002"),m=a(`<p>\u5728\u9759\u6001\u4EE3\u7801\u5757\u4E2D\uFF0Clow \u4E3A -128\uFF0C\u4E5F\u5C31\u662F\u7F13\u5B58\u6C60\u7684\u6700\u5C0F\u503C\uFF1Bhigh \u9ED8\u8BA4\u4E3A 127\uFF0C\u4E5F\u5C31\u662F\u7F13\u5B58\u6C60\u7684\u6700\u5927\u503C\uFF0C\u5171\u8BA1 256 \u4E2A\u3002</p><p><em>\u53EF\u4EE5\u5728 JVM \u542F\u52A8\u7684\u65F6\u5019\uFF0C\u901A\u8FC7 <code>-XX:AutoBoxCacheMax=NNN</code> \u6765\u8BBE\u7F6E\u7F13\u5B58\u6C60\u7684\u5927\u5C0F\uFF0C\u5F53\u7136\u4E86\uFF0C\u4E0D\u80FD\u65E0\u9650\u5927\uFF0C\u6700\u5927\u5230 <code>Integer.MAX_VALUE -129</code></em></p><p>\u4E4B\u540E\uFF0C\u521D\u59CB\u5316 cache \u6570\u7EC4\u7684\u5927\u5C0F\uFF0C\u7136\u540E\u904D\u5386\u586B\u5145\uFF0C\u4E0B\u6807\u4ECE 0 \u5F00\u59CB\u3002</p><p>\u201C\u660E\u767D\u4E86\u5427\uFF1F\u4E09\u59B9\u3002\u201D\u6211\u559D\u4E86\u4E00\u53E3\u6C34\u540E\uFF0C\u626D\u5934\u770B\u4E86\u770B\u65C1\u8FB9\u7684\u4E09\u59B9\u3002</p><p>\u201C\u8FD9\u6BB5\u4EE3\u7801\u4E0D\u96BE\u7406\u89E3\uFF0C\u96BE\u7406\u89E3\u7684\u662F <code>assert Integer.IntegerCache.high &gt;= 127;</code>\uFF0C\u8FD9\u884C\u4EE3\u7801\u662F\u5E72\u561B\u7684\u5440\uFF1F\u201D\u4E09\u59B9\u5F88\u662F\u4E0D\u89E3\u3002</p><p>\u201C\u54E6\u54E6\uFF0C\u4F60\u633A\u7EC6\u5FC3\u7684\u5440\uFF01\u201D\u4E09\u59B9\u771F\u4E0D\u9519\uFF0C\u6C42\u77E5\u6B32\u671B\u8D8A\u6765\u8D8A\u5F3A\u70C8\u4E86\u3002</p><p>assert \u662F Java \u4E2D\u7684\u4E00\u4E2A\u5173\u952E\u5B57\uFF0C\u5BD3\u610F\u662F\u65AD\u8A00\uFF0C\u4E3A\u4E86\u65B9\u4FBF\u8C03\u8BD5\u7A0B\u5E8F\uFF0C\u5E76\u4E0D\u662F\u53D1\u5E03\u7A0B\u5E8F\u7684\u7EC4\u6210\u90E8\u5206\u3002</p><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u65AD\u8A00\u662F\u5173\u95ED\u7684\uFF0C\u53EF\u4EE5\u5728\u547D\u4EE4\u884C\u8FD0\u884C Java \u7A0B\u5E8F\u7684\u65F6\u5019\u52A0\u4E0A <code>-ea</code> \u53C2\u6570\u6253\u5F00\u65AD\u8A00\u3002</p><p>\u6765\u770B\u8FD9\u6BB5\u4EE3\u7801\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AssertTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> high <span class="token operator">=</span> <span class="token number">126</span><span class="token punctuation">;</span>
        <span class="token keyword">assert</span> high <span class="token operator">&gt;=</span> <span class="token number">127</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5047\u8BBE\u624B\u52A8\u8BBE\u7F6E\u7684\u7F13\u5B58\u6C60\u5927\u5C0F\u4E3A 126\uFF0C\u663E\u7136\u4E0D\u592A\u7B26\u5408\u7F13\u5B58\u6C60\u7684\u9884\u671F\u503C 127\uFF0C\u7ED3\u679C\u4F1A\u8F93\u51FA\u4EC0\u4E48\u5462\uFF1F</p><p>\u76F4\u63A5\u5728 Intellij IDEA \u4E2D\u6253\u5F00\u547D\u4EE4\u884C\u7EC8\u7AEF\uFF0C\u8FDB\u5165 classes \u6587\u4EF6\uFF0C\u6267\u884C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> /usr/libexec/java_home -v 1.8 --exec java -ea com.itwanger.s51.AssertTest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>\u6211\u7528\u7684 macOS \u73AF\u5883\uFF0C\u88C5\u4E86\u597D\u591A\u4E2A\u7248\u672C\u7684 JDK\uFF0C\u8BE5\u547D\u4EE4\u53EF\u4EE5\u5207\u6362\u5230 JDK 8</em></p><p>\u4E5F\u53EF\u4EE5\u4E0D\u6307\u5B9A Java \u7248\u672C\u76F4\u63A5\u6267\u884C\uFF08\u52A0\u4E0A <code>-ea</code> \u53C2\u6570\uFF09\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>java -ea com.itwanger.s51.AssertTest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u201C\u5440\uFF0C\u62A5\u9519\u4E86\u5440\u3002\u201D\u4E09\u59B9\u558A\u9053\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Exception in thread &quot;main&quot; java.lang.AssertionError
        at com.itwanger.s51.AssertTest.main(AssertTest.java:9)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u201C\u662F\u6EF4\uFF0C\u56E0\u4E3A 126 \u5C0F\u4E8E 127\u3002\u201D\u6211\u56DE\u7B54\u9053\u3002</p><p>\u201C\u539F\u6765 assert \u662F\u8FD9\u6837\u7528\u7684\u554A\uFF0C\u6211\u660E\u767D\u4E86\u3002\u201D\u4E09\u59B9\u8868\u793A\u5B66\u4F1A\u4E86\u3002</p><p>\u201C\u90A3\uFF0C\u7F13\u5B58\u6C60\u4E4B\u6240\u4EE5\u5B58\u5728\u7684\u539F\u56E0\u4E5F\u662F\u56E0\u4E3A\u8FD9\u6837\u505A\u53EF\u4EE5\u63D0\u9AD8\u7A0B\u5E8F\u7684\u6574\u4F53\u6027\u80FD\uFF0C\u56E0\u4E3A\u76F8\u5BF9\u6765\u8BF4\uFF0C\u6BD4\u5982\u8BF4 Integer\uFF0C-128~127 \u8FD9\u4E2A\u8303\u56F4\u5185\u7684 256 \u4E2A\u6570\u5B57\u4F7F\u7528\u7684\u9891\u7387\u4F1A\u9AD8\u4E00\u70B9\u3002\u201D\u6211\u603B\u7ED3\u9053\u3002</p><p>\u201Cget \u4E86\uFF01\u4E8C\u54E5\u4F60\u771F\u68D2\uFF0C\u53C8\u5B66\u5230\u4E86\u3002\u201D\u4E09\u59B9\u5F88\u5F00\u5FC3~</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png" alt=""></p>`,23);function g(b,h){const e=p("ExternalLinkIcon");return o(),c("div",null,[u,s("p",null,[r,s("a",k,[d,l(e)]),v]),m])}var I=t(i,[["render",g],["__file","int-cache.html.vue"]]);export{I as default};