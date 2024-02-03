---
title: Date.DayOfWeek
---

# Date.DayOfWeek


## Description

Vrne številko (od 0 do 6), ki označuje dan v tednu navedene vrednosti.


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Details

Vrne številko (od 0 do 6), ki označuje prvi dan v tednu navedene vrednosti <code>dateTime</code>.  <ul>        <li><code>dateTime</code>: vrednost <code>date</code>, <code>datetime</code> ali <code>datetimezone</code>.</li>        <li><code>firstDayOfWeek</code>: vrednost <code>Day</code> označuje, kateri dan je uporabljen kot prvi dan v tednu. Dovoljene vrednosti so Day.Sunday, Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday ali Day.Saturday. Če tega ne navedete, je uporabljena privzeta vrednost, odvisna od kulture.</li>      </ul>


## Examples

### Example #1 
Ugotovite, na kateri dan v tednu je 21. februar 2011, pri čemer je nedelja prvi dan v tednu.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Sunday)
```

Result: 
```powerquery
1
```


### Example #2 
Ugotovite, na kateri dan v tednu je 21. februar 2011, pri čemer je ponedeljek prvi dan v tednu.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Monday)
```

Result: 
```powerquery
0
```




## Category
Date
