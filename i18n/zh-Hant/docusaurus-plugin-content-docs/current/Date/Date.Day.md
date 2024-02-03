---
title: Date.Day
---

# Date.Day


## Description

傳回日元件。


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Details

傳回 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值的日元件。      <ul>        <li><code>dateTime</code>: 要從中擷取日元件的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。</li>      </ul>


## Examples

### Example #1 
取得代表 5/14/2011 05:00:00 PM 這個日期時間的 &lt;code&gt;date&lt;/code&gt;、&lt;code&gt;datetime&lt;/code&gt; 或 &lt;code&gt;datetimezone&lt;/code&gt; 值的日元件。
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
