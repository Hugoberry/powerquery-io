---
title: Date.StartOfYear
---

# Date.StartOfYear


## Description

Vrne začetek leta.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Details

Vrne začetek leta, ki vsebuje <code>dateTime</code>.    <code>dateTime</code> mora biti vrednost <code>date</code>, <code>datetime</code> ali <code>datetimezone</code>.


## Examples

### Example #1 
Poiščite začetek leta za 10. oktober 2011, 8:10:32.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
