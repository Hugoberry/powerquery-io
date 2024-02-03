---
title: Text.Combine
---

# Text.Combine


## Description

将一系列文本值连接成一个文本值。


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Details

返回将文本值列表，<code>texts</code>，合并为单个文本值的结果。<code>texts</code> 中存在的任何 <code>null</code> 值将被忽略。    可以指定在最终组合文本中使用的可选 <code>separator</code>。


## Examples

### Example #1 
组合文本值 &#34;Seattle&#34; 和 &#34;WA&#34;。
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2 
组合文本值 &#34;Seattle&#34; 和 &#34;WA&#34;，以逗号和空格分隔。
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3 
组合值 &#34;Seattle&#34;、&lt;code&gt;null&lt;/code&gt; 和 &#34;WA&#34;，用逗号和空格分隔。(请注意，忽略了&lt;code&gt;null&lt;/code&gt;。)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```




## Category
Text.Transformations
