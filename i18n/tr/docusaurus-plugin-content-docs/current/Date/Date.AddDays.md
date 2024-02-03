---
title: Date.AddDays
---

# Date.AddDays


## Description

Belirtilen günleri tarihe ekler.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Details

<code>numberOfDays</code> günü <code>datetime</code> değeri olan <code>dateTime</code> öğesine eklemeden <code>date</code>, <code>datetime</code> veya <code>datetimezone</code> sonucunu döndürür.      <ul>      <li><code>dateTime</code>: Günlerin eklendiği <code>date</code>, <code>datetime</code> veya <code>datetimezone</code> değeri.</li>      <li><code>numberOfDays</code>: Eklenecek gün sayısı.</li>      </ul>


## Examples

### Example #1 
14/05/2011 tarihini temsil eden &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; veya &lt;code&gt;datetimezone&lt;/code&gt; değerine 5 gün ekler.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
