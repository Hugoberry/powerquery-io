---
title: Date.AddYears
---

# Date.AddYears


将指定年份数添加到该日期。


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

返回将 <code>numberOfYears</code> 添加到 <code>datetime</code> 值 <code>dateTime</code> 的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 结果。      <ul>        <li><code>dateTime</code>: 要将年份数添加到其中的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。</li>        <li><code>numberOfYears</code>: 要添加的年份数。</li>      </ul>


## Examples

### Example #1 
将 4 年添加到表示日期 5/14/2011 的 &lt;code&gt;date&lt;/code&gt;、&lt;code&gt;datetime&lt;/code&gt; 或 &lt;code&gt;datetimezone&lt;/code&gt; 值。
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2 
将 10 年添加到表示日期和时间 5/14/2011 08:15:22 AM 的 &lt;code&gt;date&lt;/code&gt;、&lt;code&gt;datetime&lt;/code&gt; 或 &lt;code&gt;datetimezone&lt;/code&gt; 值。
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
