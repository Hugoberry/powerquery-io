---
title: Date.DaysInMonth
---

# Date.DaysInMonth


Aydaki gün sayısını gösteren 28 ile 31 arasında bir sayı döndürür.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

<code>date</code>, <code>datetime</code> veya <code>datetimezone</code> değeri olan <code>dateTime</code> öğesindeki ay içinde bulunan gün sayısını döndürür. <ul>        <li><code>dateTime</code>: Aydaki gün sayısının döndürüldüğü bir <code>date</code>, <code>datetime</code> veya <code>datetimezone</code>değeri.</li>      </ul>


## Examples

### Example #1 
&lt;code&gt;#date(2011, 12, 01)&gt;&lt;/code&gt; ile gösterilen, Aralık ayındaki gün sayısı.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
