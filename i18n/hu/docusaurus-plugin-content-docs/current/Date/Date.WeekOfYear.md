---
title: Date.WeekOfYear
---

# Date.WeekOfYear


## Description

Egy olyan 1 és 54 közötti számot ad vissza, amely jelzi, hogy ez a dátum az év hányadik hetére esik.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

Egy 1 és 54 közé eső számot ad vissza, jelezve, hogy a dátum (<code>dateTime</code>) melyik hétre esik az évben. <ul>        <li><code>dateTime</code>: Egy <code>datetime</code> érték, amelyhez meg lesz határozva az év egy adott hete.</li>        <li><code>firstDayOfWeek</code>: Egy nem kötelező <code>Day.Type</code> érték, amely jelzi, hogy melyik nap minősül az új hét kezdetének (például <code>Day.Sunday</code>). Ha nincs megadva, akkor a kulturális környezetnek megfelelő alapérték lesz alkalmazva.</li>      </ul>


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
