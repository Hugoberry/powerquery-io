---
title: Date.AddQuarters
---

# Date.AddQuarters


## Description

将指定季度数添加到该日期。


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Details

通过将 <code>numberOfQuarters</code> 个季度添加到 <code>datetime</code> 值 <code>dateTime</code>，返回 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 结果。      <ul>      <li><code>dateTime</code>: 季度数要添加到的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。</li>      <li><code>numberOfQuarters</code>: 要添加的季度数。</li>      </ul>


## Examples

### Example #1 
将 1 个季度添加到表示日期 5/14/2011 的 &lt;code&gt;date&lt;/code&gt;、&lt;code&gt;datetime&lt;/code&gt; 或 &lt;code&gt;datetimezone&lt;/code&gt; 值。
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
