---
title: Date.StartOfDay
---

# Date.StartOfDay


## Description

Returnerar början på dagen.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Details

Returnerar början på dagen som representeras av <code>dateTime</code>.    <code>dateTime</code> måste vara ett <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värde.


## Examples

### Example #1 
Hitta dagens början för den 10 oktober 2011 08:00.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
