---
title: Date.EndOfMonth
---

# Date.EndOfMonth


Ay sonunu döndürür.


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Remarks

<code>dateTime</code> içeren ay sonunu döndürür.      <ul>        <li><code>dateTime</code>: Kendisinden itibaren ayın sonunun hesaplandığı <code>date</code>, <code>datetime</code> veya <code>datetimezone</code> değeri.</li>      </ul>


## Examples

### Example #1 
14.05.2011 için ayın sonunu alır.
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2 
17.05.2011 17:00:00 -7:00 için ayın sonunu alır.
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
