---
title: Date.StartOfWeek
---

# Date.StartOfWeek


## Description

Vrne začetek tedna.


## Syntax

```powerquery
Date.StartOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

Vrne začetek tedna, ki vsebuje <code>dateTime</code>.    <code>dateTime</code> mora biti vrednost <code>date</code>, <code>datetime</code> ali <code>datetimezone</code>.


## Examples

### Example #1 
Poiščite začetek tedna za torek, 11. oktober 2011.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32))
```

Result: 
```powerquery
// Sunday, October 9th, 2011
#datetime(2011, 10, 9, 0, 0, 0)
```


### Example #2 
Poiščite začetek tedna za torek, 11. oktober 2011, pri tem pa za začetek tedna uporabite ponedeljek.
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
