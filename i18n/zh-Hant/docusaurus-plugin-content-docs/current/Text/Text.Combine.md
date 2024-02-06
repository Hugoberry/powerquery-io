---
title: Text.Combine
---

# Text.Combine


將文字值的清單串連成一個文字值。


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Remarks

傳回將文字值清單 <code>texts</code> 結合成單一文字值的結果。會忽略 <code>texts</code> 中出現的任何 <code>null</code> 值。    可以指定在最終結合文字中使用的選用 <code>separator</code>。


## Examples

### Example #1 
結合文字值 &#34;Seattle&#34; 與 &#34;WA&#34;。
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2 
結合文字值 &#34;Seattle&#34; 和 &#34;WA&#34;，並以逗號和空格分隔。
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3 
結合值 &#34;Seattle&#34;、&lt;code&gt;null&lt;/code&gt; 和 &#34;WA&#34;，並以逗號和空格分隔。(請注意，會忽略 &lt;code&gt;null&lt;/code&gt;。)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```




## Category
Text.Transformations
