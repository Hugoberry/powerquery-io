---
title: Date.StartOfWeek
---

# Date.StartOfWeek


## Description

Vrátí začátek týdne.


## Syntax

```powerquery
Date.StartOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

Vrátí začátek týdne, který obsahuje <code>dateTime</code>.    <code>dateTime</code> musí být hodnota <code>date</code>, <code>datetime</code> nebo <code>datetimezone</code>.


## Examples

### Example #1 
Najděte začátek týdne na úterý 11. října 2011.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32))
```

Result: 
```powerquery
// Sunday, October 9th, 2011
#datetime(2011, 10, 9, 0, 0, 0)
```


### Example #2 
Najděte začátek týdne pro úterý 11. října 2011 a jako začátek týdne použijte pondělí.
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
