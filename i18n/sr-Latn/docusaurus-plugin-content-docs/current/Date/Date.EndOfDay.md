---
title: Date.EndOfDay
---

# Date.EndOfDay


## Description

Vraća kraj dana.


## Syntax

```powerquery
Date.EndOfDay(
    dateTime as any
) as any
```


## Details

Vraća kraj dana koji predstavlja <code>dateTime</code>. Informacije o vremenskoj zoni se čuvaju.      <ul>      <li><code>dateTime</code>: Vrednost <code>date</code>, <code>datetime</code> ili <code>datetimezone</code> na osnovu koje se izračunava kraj dana.</li>      </ul>


## Examples

### Example #1 
Izračunavanje kraja dana za 14.5.2011, 17:00:00.
```powerquery
Date.EndOfDay(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 23, 59, 59.9999999)
```


### Example #2 
Izračunavanje kraja dana za 17.5.2011, 17:00:00 -7:00.
```powerquery
Date.EndOfDay(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
