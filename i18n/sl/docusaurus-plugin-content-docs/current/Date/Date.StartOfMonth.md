---
title: Date.StartOfMonth
---

# Date.StartOfMonth


## Description

Vrne začetek meseca.


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Details

Vrne začetek meseca, ki vsebuje <code>dateTime</code>.    <code>dateTime</code> mora biti vrednost <code>date</code> ali <code>datetime</code>.


## Examples

### Example #1 
Poiščite začetek meseca za 10. oktober 2011, 8:10:32.
```powerquery
Date.StartOfMonth(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
