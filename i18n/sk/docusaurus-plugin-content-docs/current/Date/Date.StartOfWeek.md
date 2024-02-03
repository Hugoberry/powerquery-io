---
title: Date.StartOfWeek
---

# Date.StartOfWeek


## Description

Vráti začiatok týždňa.


## Syntax

```powerquery
Date.StartOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

Vráti začiatok týždňa, ktorý obsahuje hodnotu <code>dateTime</code>.    <code>dateTime</code> musí byť hodnota <code>date</code>, <code>datetime</code> alebo <code>datetimezone</code>.


## Examples

### Example #1 
Nájdite začiatok týždňa pre utorok 11. októbra 2011.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32))
```

Result: 
```powerquery
// Sunday, October 9th, 2011
#datetime(2011, 10, 9, 0, 0, 0)
```


### Example #2 
Nájdite začiatok týždňa pre utorok 11. októbra 2011 a ako začiatok týždňa použite pondelok.
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
