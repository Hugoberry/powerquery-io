---
title: Date.DayOfWeek
---

# Date.DayOfWeek


## Description

Visszaad egy számot (0 és 6 között), amely a hét napját jelöli a megadott érték vonatkozásában.


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Details

Visszaad egy számot (0 és 6 között), amely a hét napját jelöli a megadott <code>dateTime</code> vonatkozásában.  <ul>        <li><code>dateTime</code>: Egy <code>date</code>, <code>datetime</code> vagy <code>datetimezone</code> érték.</li>        <li><code>firstDayOfWeek</code>: Egy <code>Day</code> érték, amely megadja, hogy melyik nap minősül a hét első napjának. Az engedélyezett értékek a következők: Day.Sunday, Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday, or Day.Saturday. Ha nincs megadva, a rendszer a kulturális környezetnek megfelelő alapértelmezett értéket használja.</li>      </ul>


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
