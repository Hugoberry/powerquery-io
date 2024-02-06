---
title: Date.AddMonths
---

# Date.AddMonths


將日期加上指定的月數。


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Remarks

傳回將 <code>datetime</code> 值 <code>dateTime</code> 加上 <code>numberOfMonths</code> 個月後所產生的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code>。      <ul>        <li><code>dateTime</code>: 要加上月數的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。</li>        <li><code>numberOfMonths</code>: 要加上的月數。</li>      </ul>


## Examples

### Example #1 
將代表 5/14/2011 這個日期的 &lt;code&gt;date&lt;/code&gt;、&lt;code&gt;datetime&lt;/code&gt; 或 &lt;code&gt;datetimezone&lt;/code&gt; 值加 5 個月。
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2 
將代表 5/14/2011 08:15:22 AM 這個日期時間的 &lt;code&gt;date&lt;/code&gt;、&lt;code&gt;datetime&lt;/code&gt; 或 &lt;code&gt;datetimezone&lt;/code&gt; 值加 18 個月。
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
