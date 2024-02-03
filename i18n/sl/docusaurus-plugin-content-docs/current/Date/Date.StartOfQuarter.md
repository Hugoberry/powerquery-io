---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


## Description

Vrne začetek četrtletja.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Details

Vrne začetek četrtletja, ki vsebuje <code>dateTime</code>.    <code>dateTime</code> mora biti vrednost <code>date</code>, <code>datetime</code> ali <code>datetimezone</code>.


## Examples

### Example #1 
Poiščite začetek četrtletja za 10. oktober 2011, 8.00.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
