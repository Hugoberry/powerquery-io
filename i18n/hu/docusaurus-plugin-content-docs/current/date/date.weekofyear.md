---
title: Date.WeekOfYear
---

# Date.WeekOfYear


Egy olyan 1 és 54 közötti számot ad vissza, amely jelzi, hogy ez a dátum az év hányadik hetére esik.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Egy 1 és 54 közé eső számot ad vissza, jelezve, hogy a dátum (`dateTime`) melyik hétre esik az évben.

-   `dateTime`: Egy `datetime` érték, amelyhez meg lesz határozva az év egy adott hete.
-   `firstDayOfWeek`: Egy nem kötelező `Day.Type` érték, amely jelzi, hogy melyik nap minősül az új hét kezdetének (például `Day.Sunday`). Ha nincs megadva, akkor a kulturális környezetnek megfelelő alapérték lesz alkalmazva.


## Examples

### Example #1
Annak megállapítása, hogy az év mely hete tartalmazza 2011. március 27-ét.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2
Annak megállapítása, hogy az év hányadik hetére esik 2011. március 27., a hét kezdetét hétfőként megadva.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
