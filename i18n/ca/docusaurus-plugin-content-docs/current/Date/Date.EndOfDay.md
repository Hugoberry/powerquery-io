---
title: Date.EndOfDay
---

# Date.EndOfDay


## Description

Retorna el final del dia.


## Syntax

```powerquery
Date.EndOfDay(
    dateTime as any
) as any
```


## Details

Retorna el final del dia representat per <code>dateTime</code>. Es conserva la informació del fus horari.      <ul>        <li><code>dateTime</code>: valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> a partir del qual es calcula el final del dia.</li>      </ul>


## Examples

### Example #1 
Obté el final del dia per a 5/14/2011 05:00:00 pm.
```powerquery
Date.EndOfDay(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 23, 59, 59.9999999)
```


### Example #2 
Obté el final del dia per a 5/17/2011 05:00:00 pm -7:00.
```powerquery
Date.EndOfDay(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
