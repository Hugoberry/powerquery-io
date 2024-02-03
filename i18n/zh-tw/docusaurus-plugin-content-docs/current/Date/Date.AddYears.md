---
title: Date.AddYears
---

# Date.AddYears


## Description

將日期加上指定的年數。


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Details

傳回將 <code>datetime</code> 值 <code>dateTime</code> 加上 <code>numberOfYears</code> 所產生的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code>。      <ul>        <li><code>dateTime</code>: 要加上年數的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。</li>        <li><code>numberOfYears</code>: 要加上的年數。</li>      </ul>


## Examples

### Example #1 
將代表 5/14/2011 這個日期的 &lt;code&gt;date&lt;/code&gt;、&lt;code&gt;datetime&lt;/code&gt; 或 &lt;code&gt;datetimezone&lt;/code&gt; 值加 4 年。
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2 
將代表 5/14/2011 08:15:22 AM 這個日期時間的 &lt;code&gt;date&lt;/code&gt;、&lt;code&gt;datetime&lt;/code&gt; 或 &lt;code&gt;datetimezone&lt;/code&gt; 值加 10 年。
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
