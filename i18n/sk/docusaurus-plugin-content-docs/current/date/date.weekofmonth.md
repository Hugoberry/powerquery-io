---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


Vráti číslo od 1 do 6 udávajúce týždeň v mesiaci, do ktorého spadá tento dátum.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Vráti číslo od 1 do 6 udávajúce týždeň v mesiaci, do ktorého spadá dátum `dateTime`.

-   `dateTime`: Hodnota `datetime`, pre ktorú sa určuje týždeň v mesiaci.


## Examples

### Example #1
Určte, do ktorého týždňa v roku 2011 spadá dátum 15. marec.
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
