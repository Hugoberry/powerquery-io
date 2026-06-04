---
title: Date.DayOfWeek
---

# Date.DayOfWeek


Visszaad egy számot (0 és 6 között), amely a hét napját jelöli a megadott érték vonatkozásában.


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Remarks

Visszaad egy számot (0 és 6 között), amely a hét napját jelöli a megadott `dateTime` vonatkozásában.

-   `dateTime`: Egy `date`, `datetime` vagy `datetimezone` érték.
-   `firstDayOfWeek`: Egy `Day` érték, amely megadja, hogy melyik nap minősül a hét első napjának. Az engedélyezett értékek a következők: Day.Sunday, Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday, or Day.Saturday. Ha nincs megadva, a rendszer a kulturális környezetnek megfelelő alapértelmezett értéket használja.


## Examples

### Example #1
A hét 2011. február 21., hétfő által jelölt napjának lekérése, ahol a vasárnap számít a hét első napjának.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Sunday)
```

Result: 
```powerquery
1
```


### Example #2
A hét 2011. február 21., hétfő által jelölt napjának lekérése, ahol a hétfő számít a hét első napjának.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Monday)
```

Result: 
```powerquery
0
```




## Category
Date
