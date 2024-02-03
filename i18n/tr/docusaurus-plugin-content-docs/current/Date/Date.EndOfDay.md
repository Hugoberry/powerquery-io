---
title: Date.EndOfDay
---

# Date.EndOfDay


## Description

Gün sonunu döndürür.


## Syntax

```powerquery
Date.EndOfDay(
    dateTime as any
) as any
```


## Details

<code>dateTime</code> tarafından temsil edilen gün sonunu döndürür. Saat dilimi bilgileri korunur.      <ul>      <li><code>dateTime</code>: Kendisinden itibaren günün sonunun hesaplandığı <code>date</code>, <code>datetime</code> veya <code>datetimezone</code> değeri.</li>      </ul>


## Examples

### Example #1 
14.05.2011 17:00:00 için günün sonunu alır.
```powerquery
Date.EndOfDay(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 23, 59, 59.9999999)
```


### Example #2 
17.05.2011 19:00 için günün sonunu alır.
```powerquery
Date.EndOfDay(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
