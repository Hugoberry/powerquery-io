---
title: Date.StartOfMonth
---

# Date.StartOfMonth


## Description

Returnerar början på månaden.


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Details

Returnerar början på den månad som innehåller <code>dateTime</code>.    <code>dateTime</code> måste vara ett <code>date</code>- eller <code>datetime-</code> värde.


## Examples

### Example #1 
Hitta månadens början för den 10 oktober 2011 08:10:32.
```powerquery
Date.StartOfMonth(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
