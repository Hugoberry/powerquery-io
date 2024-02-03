---
title: Time.StartOfHour
---

# Time.StartOfHour


## Description

Vráti začiatok hodiny.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Details

Vráti začiatok hodiny, ktorý predstavuje hodnota <code>dateTime</code>.    <code>dateTime</code> musí byť hodnota <code>time</code>, <code>datetime</code> alebo <code>datetimezone</code>.


## Examples

### Example #1 
Nájdite začiatok hodiny pre dátum 10. október 2011 a čas 8:10:32.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
