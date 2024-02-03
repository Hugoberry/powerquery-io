---
title: Date.AddMonths
---

# Date.AddMonths


## Description

Belirtilen ayları tarihe ekler.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Details

<code>numberOfMonths</code> ayı <code>datetime</code> değeri olan <code>dateTime</code> öğesine ekleme nedeniyle oluşan <code>date</code>, <code>datetime</code> veya <code>datetimezone</code> sonucunu döndürür.      <ul>        <li><code>dateTime</code>: Ayların eklendiği <code>date</code>, <code>datetime</code> veya <code>datetimezone</code> değeri.</li>        <li><code>numberOfMonths</code>: Eklenecek ay sayısı.</li>      </ul>


## Examples

### Example #1 
14/05/2011 tarihini temsil eden &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; veya &lt;code&gt;datetimezone&lt;/code&gt; değerine 5 ay ekler.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2 
14/05/2011 08:15:22 tarih ve saatini temsil eden &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; veya &lt;code&gt;datetimezone&lt;/code&gt; değerine 18 ay ekler.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
