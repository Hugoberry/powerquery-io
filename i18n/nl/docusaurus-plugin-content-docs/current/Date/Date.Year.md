---
title: Date.Year
---

# Date.Year


## Description

Retourneert het jaargedeelte.


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Details

Retourneert het jaargedeelte van de opgegeven <code>datetime</code>waarde, <code>dateTime</code>.


## Examples

### Example #1 
Het jaar zoeken in #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
