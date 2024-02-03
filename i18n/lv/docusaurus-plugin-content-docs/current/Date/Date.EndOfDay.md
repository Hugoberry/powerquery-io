---
title: Date.EndOfDay
---

# Date.EndOfDay


## Description

Atgriež dienas beigas.


## Syntax

```powerquery
Date.EndOfDay(
    dateTime as any
) as any
```


## Details

Atgriež dienas beigas, kas apzīmēts ar <code>dateTime</code>. Informācija par laika joslu tiek saglabāta.      <ul>        <li><code>dateTime</code>: <code>date</code>, <code>datetime</code> vai <code>datetimezone</code> vērtība, no kuras tiek aprēķinātas dienas beigas.</li>      </ul>


## Examples

### Example #1 
Iegūstiet dienas beigas vērtībai 14.05.2011. plkst. 17:00:00.
```powerquery
Date.EndOfDay(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 23, 59, 59.9999999)
```


### Example #2 
Iegūstiet dienas beigas vērtībai 17.05.2011. plkst. 17:00:00 -7:00.
```powerquery
Date.EndOfDay(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
