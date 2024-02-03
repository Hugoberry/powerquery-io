---
title: Date.AddMonths
---

# Date.AddMonths


## Description

将指定月份数添加到该日期。


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Details

通过将 <code>numberOfMonths</code> 个月添加到 <code>datetime</code> 值 <code>dateTime</code>，返回 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 结果。      <ul>        <li><code>dateTime</code>: 要将月份数添加到其中的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。</li>        <li><code>numberOfMonths</code>: 要添加的月份数。</li>      </ul>


## Examples

### Example #1 
将 5 个月添加到表示日期 5/14/2011 的 &lt;code&gt;date&lt;/code&gt;、&lt;code&gt;datetime&lt;/code&gt; 或 &lt;code&gt;datetimezone&lt;/code&gt; 值。
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2 
将 18 个月添加到表示日期和时间 5/14/2011 08:15:22 AM 的 &lt;code&gt;date&lt;/code&gt;、&lt;code&gt;datetime&lt;/code&gt; 或 &lt;code&gt;datetimezone&lt;/code&gt; 值。
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
