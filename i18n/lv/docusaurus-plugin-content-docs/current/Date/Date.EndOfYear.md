---
title: Date.EndOfYear
---

# Date.EndOfYear


## Description

Atgriež gada beigas.


## Syntax

```powerquery
Date.EndOfYear(
    dateTime as any
) as any
```


## Details

Atgriež gada beigas, kas satur <code>dateTime</code>, ieskaitot sekunžu daļas. Tiek saglabāta informācija par laika joslu.      <ul>        <li><code>dateTime</code>: <code>date</code>, <code>datetime</code> vai <code>datetimezone</code> vērtība, no kuras tiek aprēķinātas gada beigas.</li>      </ul>


## Examples

### Example #1 
Iegūstiet gada beigas vērtībai 14.05.2011. plkst 17:00:00.
```powerquery
Date.EndOfYear(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```


### Example #2 
Iegūstiet stundas beigas vērtībai 17.05.2011. plkst. 17:00:00 -7:00.
```powerquery
Date.EndOfYear(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 12, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
