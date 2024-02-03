---
title: Date.StartOfWeek
---

# Date.StartOfWeek


## Description

Vraća početak sedmice.


## Syntax

```powerquery
Date.StartOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

Vraća početak sedmice koji sadrži <code>dateTime</code>.    <code>dateTime</code> mora da bude vrednost <code>date</code>, <code>datetime</code> ili <code>datetimezone</code>.


## Examples

### Example #1 
Pronađite početak sedmice za utorak, 11. oktobar 2011.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32))
```

Result: 
```powerquery
// Sunday, October 9th, 2011
#datetime(2011, 10, 9, 0, 0, 0)
```


### Example #2 
Pronađite početak sedmice za utorak, 11. oktobar 2011, koristeći ponedeljak kao početak sedmice.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32), Day.Monday)
```

Result: 
```powerquery
// Monday, October 10th, 2011
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
