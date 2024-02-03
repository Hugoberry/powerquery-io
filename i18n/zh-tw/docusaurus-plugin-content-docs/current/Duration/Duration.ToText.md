---
title: Duration.ToText
---

# Duration.ToText


## Description

傳回 &#34;d.h:m:s&#34; 格式的文字。


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Details

傳回指定持續時間值 <code>duration</code> 的文字表示法，格式為 "day.hour:mins:sec"。 <ul>        <li><code>duration</code>: 計算文字表示法的來源 <code>duration</code>。</li>  <li><code>format</code>: <i>[選用]</i> 已淘汰，若不是 null，將會擲回錯誤</li>      </ul>


## Examples

### Example #1 
將 &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; 轉換成文字值。
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
