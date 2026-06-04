---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


Egy 1 és 6 közötti számot ad vissza, amely azt jelzi, hogy ez a dátum a hónap hányadik hetére esik.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Egy 1 és 6 közötti számot ad vissza, amely azt jelzi, hogy a(z) `dateTime` dátum a hónap hányadik hetére esik.

-   `dateTime`: a `datetime` azon értéke, amely alapul szolgál a hónap hetének meghatározásához.


## Examples

### Example #1
Annak megállapítása, hogy március hányadik hetére esik a hónap 15. napja 2011-ben.
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
