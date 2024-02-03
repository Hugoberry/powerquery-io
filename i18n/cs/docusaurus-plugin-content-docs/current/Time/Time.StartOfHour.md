---
title: Time.StartOfHour
---

# Time.StartOfHour


## Description

Vrátí začátek hodiny.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Details

Vrátí začátek hodiny, který představuje <code>dateTime</code>.    <code>dateTime</code> musí být hodnota <code>time</code>, <code>datetime</code> nebo <code>datetimezone</code>.


## Examples

### Example #1 
Najděte začátek hodiny pro 10. října 2011, 8:10:32.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
