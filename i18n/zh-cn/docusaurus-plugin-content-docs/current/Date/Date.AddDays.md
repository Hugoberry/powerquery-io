---
title: Date.AddDays
---

# Date.AddDays


## Description

将指定天数添加到该日期。


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Details

通过将 <code>numberOfDays</code> 天添加到 <code>datetime</code> 值 <code>dateTime</code>，返回 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 结果。      <ul>      <li><code>dateTime</code>: 天数要添加到的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。</li>      <li><code>numberOfDays</code>: 要添加的天数。</li>      </ul>


## Examples

### Example #1 
将 5 天添加到表示日期 5/14/2011 的 &lt;code&gt;date&lt;/code&gt;、&lt;code&gt;datetime&lt;/code&gt; 或 &lt;code&gt;datetimezone&lt;/code&gt; 值。
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
