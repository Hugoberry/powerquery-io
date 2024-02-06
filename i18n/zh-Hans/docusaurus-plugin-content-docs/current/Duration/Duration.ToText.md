---
title: Duration.ToText
---

# Duration.ToText


返回采用 &#34;d.h:m:s&#34; 格式的文本。


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

返回给定持续时间值 <code>duration</code> 的 "day.hour:mins:sec" 格式文本表示形式。 <ul>        <li><code>duration</code>:计算文本表示形式所依据的 <code>duration</code>。</li>  <li><code>format</code>:<i>[可选]</i>已弃用，如果不为 null，将抛出错误</li>      </ul>


## Examples

### Example #1 
将 &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; 转换为文本值。
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
