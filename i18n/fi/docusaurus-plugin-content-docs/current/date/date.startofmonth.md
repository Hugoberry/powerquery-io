---
title: Date.StartOfMonth
---

# Date.StartOfMonth


Palauttaa kuukauden alun.


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Remarks

Palauttaa `dateTime`sisältävän kuukauden alun. `dateTime` on oltava `date`\- tai `datetime`\-arvo.


## Examples

### Example #1
Selvitä kuukauden alku kohteelle 10. lokakuuta 2011 klo 8.10.32.
```powerquery
Date.StartOfMonth(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
