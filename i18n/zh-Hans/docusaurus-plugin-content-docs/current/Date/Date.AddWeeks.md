---
title: Date.AddWeeks
---

# Date.AddWeeks


将指定星期数添加到该日期。


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

通过将 <code>numberOfWeeks</code> 个星期添加到 <code>datetime</code> 值 <code>dateTime</code>，返回 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 结果。      <ul>      <li><code>dateTime</code>: 星期数要添加到的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。</li>      <li><code>numberOfWeeks</code>: 要添加的星期数。</li>      </ul>


## Examples

### Example #1 
将 2 个星期添加到表示日期 5/14/2011 的 &lt;code&gt;date&lt;/code&gt;、&lt;code&gt;datetime&lt;/code&gt; 或 &lt;code&gt;datetimezone&lt;/code&gt; 值。
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
