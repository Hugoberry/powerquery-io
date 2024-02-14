---
title: Date.StartOfMonth
---

# Date.StartOfMonth


Returnerer starten af måneden.


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Remarks

Returnerer starten på den måned, der indeholder <code>dateTime</code>.    <code>dateTime</code> skal være en værdi af typen <code>date</code> eller <code>datetime</code>.


## Examples

### Example #1 
Find starten af måneden for 10. oktober 2011, 8:10:32.
```powerquery
Date.StartOfMonth(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
