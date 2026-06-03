---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


Returnerer slutningen af kvartalet.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Remarks

Returnerer slutningen af det kvartal, der indeholder `dateTime`. Oplysninger om tidszone bevares.

-   `dateTime`: En værdi af typen `date`, `datetime` eller `datetimezone`, som slutningen af kvartalet beregnes ud fra.


## Examples

### Example #1
Find slutningen af kvartalet for 10. oktober 2011, 8:00.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
