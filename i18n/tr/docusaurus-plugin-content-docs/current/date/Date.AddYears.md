---
title: Date.AddYears
---

# Date.AddYears


Belirtilen yılları tarihe ekler.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

<code>numberOfYears</code> yılı <code>datetime</code> değeri olan <code>dateTime</code> öğesine ekleme nedeniyle oluşan <code>date</code>, <code>datetime</code> veya <code>datetimezone</code> sonucunu döndürür.      <ul>        <li><code>dateTime</code>: Yılların eklendiği <code>date</code>, <code>datetime</code> veya <code>datetimezone</code> değeri.</li>        <li><code>numberOfYears</code>: Eklenecek yıl sayısı.</li>      </ul>


## Examples

### Example #1 
14/05/2011 tarihini temsil eden &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; veya &lt;code&gt;datetimezone&lt;/code&gt; değerine 4 yıl ekler.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2 
14/05/2011 08:15:22 tarih ve saatini temsil eden &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; veya &lt;code&gt;datetimezone&lt;/code&gt; değerine 10 yıl ekler.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
