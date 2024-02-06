---
title: Date.Day
---

# Date.Day


Gün bileşenini döndürür.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

Verilen <code>date</code>, <code>datetime</code> veya <code>datetimezone</code> değerinin gün bileşenini döndürür.      <ul>        <li><code>dateTime</code>: Gün bileşeninin ayıklandığı bir <code>date</code>, <code>datetime</code> veya <code>datetimezone</code> değeri.</li>      </ul>


## Examples

### Example #1 
14.05.2011 17:00:00 tarih ve saatini temsil eden &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; veya &lt;code&gt;datetimezone&lt;/code&gt; değerinin gün bileşenini alır.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
