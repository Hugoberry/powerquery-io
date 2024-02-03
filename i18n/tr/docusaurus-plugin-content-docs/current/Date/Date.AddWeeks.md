---
title: Date.AddWeeks
---

# Date.AddWeeks


## Description

Belirtilen haftaları tarihe ekler.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Details

<code>numberOfWeeks</code> haftayı <code>datetime</code> değeri olan <code>dateTime</code> öğesine eklemeden <code>date</code>, <code>datetime</code> veya <code>datetimezone</code> sonucunu döndürür.      <ul>      <li><code>dateTime</code>: Haftaların eklendiği <code>date</code>, <code>datetime</code> veya <code>datetimezone</code> değeri.</li>      <li><code>numberOfWeeks</code>: Eklenecek hafta sayısı.</li>      </ul>


## Examples

### Example #1 
14/05/2011 tarihini temsil eden &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; veya &lt;code&gt;datetimezone&lt;/code&gt; değerine 2 hafta ekler.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
