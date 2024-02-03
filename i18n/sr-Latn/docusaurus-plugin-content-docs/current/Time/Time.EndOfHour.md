---
title: Time.EndOfHour
---

# Time.EndOfHour


## Description

Vraća kraj sata.


## Syntax

```powerquery
Time.EndOfHour(
    dateTime as any
) as any
```


## Details

Vraća kraj sata koji predstavlja <code>dateTime</code>, uključujući frakcione sekunde. Informacije o vremenskoj zoni se čuvaju      <ul>        <li><code>dateTime</code>: Vrednost <code>time</code>, <code>datetime</code> ili <code>datetimezone</code> na osnovu koje se izračunava kraj godine.</li>      </ul>


## Examples

### Example #1 
Izračunavanje kraja sata za 14.5.2011, 17:00:00.
```powerquery
Time.EndOfHour(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 17, 59, 59.9999999)
```


### Example #2 
Izračunavanje kraja sata za 17.5.2011, 17:00:00 -7:00.
```powerquery
Time.EndOfHour(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 5, 59, 59.9999999, -7, 0)
```




## Category
Date
