import{o as n,c as t,a}from"./app.7be1f135.js";const s='{"title":"逻辑判断函数","description":"","frontmatter":{},"headers":[{"level":2,"title":"if_null","slug":"if-null"}],"relativePath":"function/03_logic.md","lastUpdated":1624958969426}',e={},p=a('<h1 id="逻辑判断函数"><a class="header-anchor" href="#逻辑判断函数" aria-hidden="true">#</a> 逻辑判断函数</h1><hr><h4 id="语法"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h4><div class="language-js"><pre><code><span class="token comment">// 函数名支持驼峰和下划线方式</span>\n<span class="token function">GwLogic</span><span class="token punctuation">(</span>函数名或编码<span class="token punctuation">,</span> 参数<span class="token number">1</span><span class="token punctuation">,</span> 参数<span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">)</span>\n</code></pre></div><table><thead><tr><th>函数名</th><th style="text-align:center;">编码</th><th style="text-align:right;">描述</th></tr></thead><tbody><tr><td>if_null</td><td style="text-align:center;">100</td><td style="text-align:right;">判断参数是为空</td></tr></tbody></table><h2 id="if-null"><a class="header-anchor" href="#if-null" aria-hidden="true">#</a> if_null</h2><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">类型</th><th style="text-align:right;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:center;">Any</td><td style="text-align:right;">不为空，返回此参数</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:center;">Any</td><td style="text-align:right;">为空，返回此参数</td></tr></tbody></table><div class="language-js"><pre><code><span class="token comment">// Happy</span>\n<span class="token function">GwLogic</span><span class="token punctuation">(</span><span class="token string">&#39;if_null&#39;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&#39;Happy&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Happy</span>\n<span class="token function">GwLogic</span><span class="token punctuation">(</span><span class="token string">&#39;ifNull&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Happy&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Happy</span>\n<span class="token function">GwLogic</span><span class="token punctuation">(</span><span class="token string">&#39;IfNull&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Happy&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// HaHa</span>\n<span class="token function">GwLogic</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token string">&#39;HaHa&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Happy&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div>',8);e.render=function(a,s,e,l,c,o){return n(),t("div",null,[p])};export default e;export{s as __pageData};
