---
title: Date.EndOfYear
---

# Date.EndOfYear


## Description

Vraća kraj godine.


## Syntax

```powerquery
Date.EndOfYear(
    dateTime as any
) as any
```


## Details

Vraća kraj godine koji sadrži <code>dateTime</code>, uključujući frakcione sekunde. Informacije o vremenskoj zoni se čuvaju      <ul>        <li><code>dateTime</code>: Vrednost <code>date</code>, <code>datetime</code> ili <code>datetimezone</code> na osnovu koje se izračunava kraj godine.</li>      </ul>


## Examples

### Example #1 
Izračunavanje kraja godine za 14.5.2011, 17:00:00.
```powerquery
Date.EndOfYear(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```


### Example #2 
Izračunavanje kraja sata za 17.5.2011, 17:00:00 -7:00.
```powerquery
Date.EndOfYear(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 12, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
