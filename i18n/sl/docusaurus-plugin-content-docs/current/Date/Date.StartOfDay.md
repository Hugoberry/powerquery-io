---
title: Date.StartOfDay
---

# Date.StartOfDay


## Description

Vrne začetek dneva.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Details

Vrne začetek dneva, ki je prikazan kot <code>dateTime</code>.    <code>dateTime</code> mora biti vrednost <code>date</code>, <code>datetime</code> ali <code>datetimezone</code>.


## Examples

### Example #1 
Poiščite začetek dneva za 10. oktober 2011, 8.00.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
