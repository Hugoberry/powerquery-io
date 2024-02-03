---
title: Date.StartOfWeek
---

# Date.StartOfWeek


## Description

Returnează începutul săptămânii.


## Syntax

```powerquery
Date.StartOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

Returnează începutul săptămânii care conține <code>dateTime</code>.    <code>dateTime</code> trebuie să fie o valoare <code>date</code>, <code>datetime</code> sau <code>datetimezone</code>.


## Examples

### Example #1 
Găsiți începutul săptămânii pentru marți, 11 octombrie 2011.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32))
```

Result: 
```powerquery
// Sunday, October 9th, 2011
#datetime(2011, 10, 9, 0, 0, 0)
```


### Example #2 
Găsiți începutul săptămânii pentru marți, 11 octombrie 2011, utilizând luni ca început de săptămână.
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
